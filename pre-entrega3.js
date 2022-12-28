const paquetes = [
    {
        nombreDelPaquete: "Paquete Básico",
        precioDelPaquete: "$1000"
    },
    {
        nombreDelPaquete: "Paquete HD",
        precioDelPaquete: "$2000"
    },
    {
        nombreDelPaquete: "Paquete 4K",
        precioDelPaquete: "$3000"
    },
    {
        nombreDelPaquete: "Paquete 4K Premium",
        precioDelPaquete: "$4000"
    }
]

const contenedor = document.querySelector(".paquetes")

function paquetesAHtml (paquetes){
    for (let i = 0; i < paquetes.length; i++){
        const productos = document.createElement("div")
        productos.className = "paquetes"
        productos.innerHTML = `
            <div>
                <h2>${paquetes[i].nombreDelPaquete}</h2>
                <p>${paquetes[i].precioDelPaquete}</p>
            </div>
        `
        contenedor.appendChild(productos)
    }
}

paquetesAHtml(paquetes)

const clientes = [
    {
        nombre: "Gastón Acosta",
        edad: 29, 
        nombreDeUsuario: "gasacosta",
        contraseniaDeUsuario: "gastonAcosta123",
        tieneTarjetaDeCredito: true,
        resideEnArgentina: true
    },
    {
        nombre: "Ezequiel San Román",
        edad: 27, 
        nombreDeUsuario: "ezesanroman", 
        contraseniaDeUsuario: "EzeSanro123", 
        tieneTarjetaDeCredito: false,
        resideEnArgentina: false
    },
    {
        nombre: "Tamires Pereira",
        edad: 28, 
        nombreDeUsuario: "tamirocha",
        contraseniaDeUsuario: "tamirochper123", 
        tieneTarjetaDeCredito: true,
        resideEnArgentina: false
    }
]

const formLogin = document.querySelector("#login")
const inputUser = document.querySelector("#input-user")
const inputPass = document.querySelector("#input-pass")
const logint = document.querySelector("#login-incorrect")

const subidaLocalStorage = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const bajadaLocalStorage = (clave) => {
    return JSON.parse(localStorage.getItem(clave))
}

formLogin.onsubmit = (event) => {
    event.preventDefault()
    if (inputUser.value === clientes[i].nombreDeUsuario && inputPass.value === clientes[i].contraseniaDeUsuario){
        subidaLocalStorage("login", true)
    } else {
        logint.style.display = "block"
        inputUser.style.border = "1px solid red"
        inputPass.style.border = "1px solid red"
    }
}

