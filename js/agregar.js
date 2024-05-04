import { postProducto } from "./modules/productosAPI.js"
let buton = document.getElementById('guardar')

buton.addEventListener('click',(event)=>{
    console.log('hola')
    let listInputs = document.querySelectorAll('#form  input')
    let productObj = {}
    listInputs.forEach((input)=>{
        productObj[input.name]=input.value
    })
    console.log(productObj)
    postProducto(productObj)
    listInputs.forEach((input)=>{
        input.value = ''
    })
})


