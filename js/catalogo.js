import { getData } from "./modules/productosAPI.js"

const createProduct = (productObject)=>{
    let {categoria,nombre,precio,stock,imagen} = productObject

    let container =  document.createElement('div')
    container.classList.add('card','col-3')
    
    let img = document.createElement('img')
    img.setAttribute('src',imagen)
    img.classList.add('card-img-top','images')

    let container1 = document.createElement('div')
    container1.classList.add('card-body')

    let title = document.createElement('h5')
    let titleText= document.createTextNode(`producto:${nombre}`)
    title.append(titleText)

    let paragraph = document.createElement('p')
    let paragraphText = document.createTextNode(`precio: ${precio} stock: ${stock}
    categoría: ${categoria}`)
    paragraph.append(paragraphText)

    let button = document.createElement('a')
    button.setAttribute('href',"#")
    button.classList.add('btn','btn-primary','btns')
    let buttonText = document.createTextNode('Agregar al carrito')
    button.append(buttonText)

    let button1 = document.createElement('a')
    button1.setAttribute('href',"#")
    button1.classList.add('btn','btn-success','btns')
    let button1Text = document.createTextNode('Ver detalle')
    button1.append(button1Text)

    container1.append(title,paragraph,button,button1)
    container.append(img,container1)
    return container
    
}

const createProductWrapper = (productsArray,wrapperId)=>{
    let wrapper = document.getElementById(wrapperId)
    //Esto me elimina los elementos anteriores para dar paso a los nuevos
   // wrapper.innerHTML = ''
    productsArray.forEach((element) => {
        let card  = createProduct(element)
        wrapper.append(card)
    })
    
}

const printProducts = async()=>{
    let productsArray = await getData()
    createProductWrapper(productsArray,'wrapper')
    console.log(productsArray)
}

printProducts()
