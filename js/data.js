
const productsData=[
    {
        id:1, img:"./assets/img/21.avif", name:"Aire Acondicionado " ,txt: "2300 frigorias",  Category:"aireAcondicionado", price:"250.000", 
    },
    {
        id:2, img:"./assets/img/20.avif", name:"Aire Acondicionado",txt: "Especificaciones",  Category:"aireAcondicionado", price:"250.000",  
    },
    {
        id:3, img:"./assets/img/18.avif", name:"Campera de Jeans", txt: "Talle S",  Category:"camperas", price:"10.000",  
    },
    {
        id:4, img:"./assets/img/10.avif", name:"Campera de Cuero",txt: " con cinto Talle S", Category:"camperas", price:"28.000",
    },
    {
        id:5, img:"./assets/img/16.avif", name:"Campera de Cuero",txt: " con corderito Talle S", Category:"camperas", price:"25.000", 
    },
    {
        id:6, img:"./assets/img/a.jpg", name:"Remera PR",txt: "Talle s | adelante", Category:"remera", price:"4.500",  
    },
    {
        id:7, img:"./assets/img/b.jpg", name:"Remera PR",txt: "Talle s | atrás", Category:"remera", price:"4.500",  
    },
    {
        id:8, img:"./assets/img/3.avif", name:"Remera Viejas Locas",txt: "pintada a mano Talle L", Category:"remera", price:"4.000",  
    },
    {
        id:9, img:"./assets/img/1.avif", name:"Remera PR",txt: "pintada a mano Talle S", Category:"remera", price:"3.000", 
    },
    {
        id:10, img:"./assets/img/2.avif", name:"Remera INDIO",txt: "pintada a mano Talle S", Category:"remera", price:"2.800",  
    },
    {
        id:11, img:"./assets/img/5.avif", name:"Remera Rolling Stone",txt: "pintada a mano Talle S",  Category:"remera", price:"2.800",
    },
    {
        id:12, img:"./assets/img/6.avif", name:"Remera Rolling Stone",txt: " Talle S", Category:"remera", price:"3.000", 
    },
    {
        id:13, img:"./assets/img/c.jpg", name:"Vestido Elastizado",txt: "Adelante | Talle S", Category:"remera", price:"3.500", 
    },
    {
        id:14, img:"./assets/img/d.jpg", name:"Vestido Elastizado",txt: "Atrás | Talle S", Category:"remera", price:"3.500", 
    },
    {
        id:15, img:"./assets/img/e.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:16, img:"./assets/img/f.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:17, img:"./assets/img/g.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:18, img:"./assets/img/h.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:19, img:"./assets/img/i.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:20, img:"./assets/img/j.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:21, img:"./assets/img/k.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:22, img:"./assets/img/l.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:23, img:"./assets/img/m.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:24, img:"./assets/img/n.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:25, img:"./assets/img/ñ.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:26, img:"./assets/img/o.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:27, img:"./assets/img/p.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:28, img:"./assets/img/q.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:29, img:"./assets/img/r.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:30, img:"./assets/img/s.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:31, img:"./assets/img/t.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:32, img:"./assets/img/u.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:33, img:"./assets/img/v.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:34, img:"./assets/img/w.jpg", name:"Remera para señora",txt: "Talle 50", Category:"remera", price:"", 
    },
    {
        id:35, img:"./assets/img/15.jpg", name:"chop Don Osvaldo",txt: "Tallado a mano", Category:"chop", price:"2.500", 
    },
    {
        id:36, img:"./assets/img/chop4.avif", name:"chop La Renga",txt: "Tallado a mano", Category:"chop", price:"2.500", 
    },
    {
        id:37, img:"./assets/img/17.jpg", name:"chop PR",txt: "Tallado a mano", Category:"chop", price:"2.500", 
    },
    {
        id:38, img:"./assets/img/alum1.avif", name:"chop PR",txt: "Tallado a mano", Category:"chop", price:"7.000", 
    },
    {
        id:39, img:"./assets/img/14.jpg", name:"Vasos (adelante) ",txt: "La 25 | cjs | Sumo", Category:"vaso", price:"1.000 c/u", 
    },
    {
        id:40, img:"./assets/img/7.jpg", name:"Vasos (atrás) ",txt: "Tallado a mano", Category:"vaso", price:"1.000 c/u", 
    },
    {
        id:41, img:"./assets/img/11.jpg", name:"Frasco (adelante) ",txt: "La renga, PR", Category:"frasco", price:"500 c/u", 
    },
    {
        id:42, img:"./assets/img/19.jpg", name:"Frasco (atrás) ",txt: "La renga, PR", Category:"frasco", price:"500 c/u", 
    },
    {
        id:43, img:"./assets/img/4.avif", name:"Porta dni/sube/tarjetas ",txt: "cuerina (adelante)", Category:"portaDni", price:"300/400 c/u", 
    },
    {
        id:44, img:"./assets/img/12.avif", name:"Porta dni/sube/tarjetas ",txt: "cuerina (atrás)", Category:"portaDni", price:"300/400 c/u", 
    },
    {
        id:45, img:"./assets/img/x.jpg", name:"Porta dni/sube/tarjetas ",txt: "forma de uso", Category:"portaDni", price:"300/400 c/u", 
    },
    {
        id:46, img:"./assets/img/lu3.jpg", name:"Ventilador de Techo ",txt: "4 Aspas", Category:"electricidad", price:"30.000", 
    },
    {
        id:47, img:"./assets/img/lu4.jpg", name:"Ventilador de Techo ",txt: "4 Aspas", Category:"electricidad", price:"28.000", 
    },
      {
        id:48, img:"./assets/img/lu1.avif", name:"Juego de Luces ",txt: "(x 3)", Category:"electricidad", price:"3.500", 
    },
    {
        id:49, img:"./assets/img/lu2.jpg", name:"Juego de Luces ",txt: "(x 2)", Category:"electricidad", price:"2.500", 
    },
    {
        id:50, img:"./assets/img/lu5.jpg", name:"Lampara de Techo ",txt: "", Category:"electricidad", price:"4.000", 
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






