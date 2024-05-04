import { getProductData, deleteProduct } from "./modules/productosAPI.js"
//guardamos la url actual en una variable
const url = window.location.href

//Se crea una instancia del objeto URLSearchparams

const params = new URLSearchParams(new URL(url).search)

//Extraemos el parámetro que se desea
let productKey = params.get('productKey')


const printProductData = async (productKey)=>{
    let  productData = await getProductData(productKey)
    let {categoria, descrption,imagen,nombre,precio,stock} = productData

    document.getElementById('name').append(nombre)
    document.getElementById('descrip').append(descrption)
    document.getElementById('stock').append(stock)
    document.getElementById('price').append(precio)
    document.getElementById('descrip').append(descrption)
    document.getElementById('cat').append(categoria)
    document.getElementById('imagen').setAttribute('src',imagen)
    
}

let boton = document.getElementById('delete')


boton.addEventListener('click',async(event)=>{
    window.open('../views/catalogo.html','self')
    await deleteProduct(productKey)
    
})

printProductData(productKey)


let buton = document.getElementById('edit')

buton.addEventListener('click',(event)=>{
    
    window.open(`./editform.html?key=${productKey}`,'self')
    
})

