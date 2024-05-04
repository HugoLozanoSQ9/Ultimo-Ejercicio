import { getProductData } from "./modules/productosAPI.js"
const url = window.location.href
const params = new URLSearchParams(new URL(url).search)
let oneProductKey = params.get('key')



const editProduct = async (productKey, productObject) => {
    let response = await fetch(`https://peta-fbfed-default-rtdb.firebaseio.com/Productos/${productKey}.json`,
        {
            method: 'PATCH',
            body: JSON.stringify(productObject)
        }
    );

    let data = await response.json()

    return data
}


const getDatas = async(oneProductKey)=>{

    let data = await getProductData(oneProductKey)    
   
    return data
}


const organizeData= async()=>{
    let data = await getDatas(oneProductKey)
    let {nombre,imagen,categoria,precio,stock,descrption} = data
    document.getElementById('nombre').value = nombre
    document.getElementById('imagen').value = imagen
    document.getElementById('categoria').value = categoria
    document.getElementById('precio').value = precio
    document.getElementById('stock').value = stock
    document.getElementById('descrption').value = descrption

}

let buton = document.getElementById('guardar')

buton.addEventListener('click',async (event)=>{
    let listInputs = document.querySelectorAll('#form input')
    let objNewData={}
    listInputs.forEach((input)=>{
        objNewData[input.name]=input.value
    })

    await editProduct(oneProductKey,objNewData)
    window.open('../views/catalogo.html','self')
})



organizeData()






