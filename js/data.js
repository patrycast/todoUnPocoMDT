
const productsData=[
    {
        id:1, img:"./assets/img/21.jpg", name:"Aire Acondicionado " ,txt: "2300 frigorias",  Category:"aireAcondicionado", price:"250.000", 
    },
    {
        id:2, img:"./assets/img/20.jpg", name:"Aire Acondicionado",txt: "Especificaciones",  Category:"aireAcondicionado", price:"250.000",  
    },
    {
        id:3, img:"./assets/img/18.jpg", name:"Campera de Jeans", txt: "Talle S",  Category:"camperas", price:"10.000",  
    },
    {
        id:4, img:"./assets/img/10.jpg", name:"Campera de Cuero",txt: " con cinto Talle S", Category:"camperas", price:"28.000",
    },
    {
        id:5, img:"./assets/img/16.jpg", name:"Campera de Cuero",txt: " con corderito Talle S", Category:"camperas", price:"25.000", 
    },
    {
        id:6, img:"./assets/img/3.avif", name:"Remera Viejas Locas",txt: "pintada a mano Talle L", Category:"remera", price:"4.000",  
    },
    {
        id:7, img:"./assets/img/1.avif", name:"Remera PR",txt: "pintada a mano Talle S", Category:"remera", price:"3.000", 
    },
    {
        id:8, img:"./assets/img/2.avif", name:"Remera INDIO",txt: "pintada a mano Talle S", Category:"remera", price:"2.800",  
    },
    {
        id:9, img:"./assets/img/5.jpg", name:"Remera Rolling Stone",txt: "pintada a mano Talle S",  Category:"remera", price:"2.800",
    },
    {
        id:10, img:"./assets/img/6.jpg", name:"Remera Rolling Stone",txt: " Talle S", Category:"remera", price:"3-000", 
    },
    {
        id:11, img:"./assets/img/15.jpg", name:"chop Don Osvaldo",txt: "Tallado a mano", Category:"chop", price:"2.500", 
    },
    {
        id:12, img:"./assets/img/chop4.avif", name:"chop La Renga",txt: "Tallado a mano", Category:"chop", price:"2.500", 
    },
    {
        id:13, img:"./assets/img/alum1.avif", name:"chop PR",txt: "Tallado a mano", Category:"chop", price:"7.000", 
    },
    {
        id:14, img:"./assets/img/17.jpg", name:"chop PR",txt: "Tallado a mano", Category:"chop", price:"2.500", 
    },
    {
        id:15, img:"./assets/img/14.jpg", name:"Vasos (adelante) ",txt: "La 25 | cjs | Sumo", Category:"vaso", price:"1.000 c/u", 
    },
    {
        id:16, img:"./assets/img/7.jpg", name:"Vasos (atrás) ",txt: "Tallado a mano", Category:"vaso", price:"1.000 c/u", 
    },
    {
        id:17, img:"./assets/img/11.jpg", name:"Frasco (adelante) ",txt: "La renga, PR", Category:"frasco", price:"500 c/u", 
    },
    {
        id:18, img:"./assets/img/19.jpg", name:"Frasco (atrás) ",txt: "La renga, PR", Category:"frasco", price:"500 c/u", 
    },
    {
        id:19, img:"./assets/img/4.jpg", name:"Porta dni/sube/tarjetas ",txt: "cuerina (adelante)", Category:"portaDni", price:"300/400 c/u", 
    },
    {
        id:20, img:"./assets/img/12.jpg", name:"Porta dni/sube/tarjetas ",txt: "cuerina (atrás)", Category:"portaDni", price:"300/400 c/u", 
    },
    {
        id:21, img:"./assets/img/lu3.jpg", name:"Ventilador de Techo ",txt: "4 Aspas", Category:"electricidad", price:"30.000", 
    },
    {
        id:22, img:"./assets/img/lu4.jpg", name:"Ventilador de Techo ",txt: "4 Aspas", Category:"electricidad", price:"28.000", 
    },
      {
        id:23, img:"./assets/img/lu1.avif", name:"Juego de Luces ",txt: "(x 3)", Category:"electricidad", price:"3.500", 
    },
    {
        id:24, img:"./assets/img/lu2.jpg", name:"Juego de Luces ",txt: "(x 2)", Category:"electricidad", price:"2.500", 
    },
 
]



const divideProductsInParts= (size)=>{
    let productList=[]

    for(let i= 0; i< productsData.length; i+=size){
        productList.push(productsData.slice(i, i+size))
    }
    return productList;
} 


const PRODUCTS_SIZE=6;

const appState={
    products: divideProductsInParts(PRODUCTS_SIZE),
    productLimit: divideProductsInParts(PRODUCTS_SIZE).length,
    currentProductIndex:0,
    activeFilter: null

}






