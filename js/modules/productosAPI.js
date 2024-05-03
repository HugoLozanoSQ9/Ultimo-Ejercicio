const getData = async () => {
    //promesa --> await --> promesa cumplida --> muestra la info de la promesa
    let response = await fetch('https://peta-fbfed-default-rtdb.firebaseio.com/Productos.json')

    //También es una promesa --> await --> promesa cumplida y brinda los datos por el método JSON 
    let data = await response.json()

    //console.log(data)

    let keys = Object.keys(data) //Me devuelve un array de unicamente las llaves

    let productArr = keys.map((key) => {
        return { ...data[key], key }
    })

    
    return productArr

}
export {getData}