let guardar = document.getElementById('logIn')

let validUsers = []

//Con esto podemos acceder al local Storage
//localStorage.getItem('user')
let user = JSON.parse(localStorage.getItem('user'))


let form = document.getElementById('form')


guardar.addEventListener('click', (event) => {
    event.preventDefault()
    let userObj = {}
    let listInputs = document.querySelectorAll('#form input')
    listInputs.forEach((input) => {
        userObj[input.name] = input.value
    })

    validUsers.push(userObj)
    console.log(validUsers)

    //Con esto se crea la local Storage
    localStorage.setItem("user", JSON.stringify(validUsers))
    window.open("../index.html", "_self")
})


