const clientes = {
        nombre: "Gastón Acosta",
        edad: 29, 
        nombreDeUsuario: "gasacosta",
        contraseniaDeUsuario: "gastonAcosta123",
        tieneTarjetaDeCredito: true,
        resideEnArgentina: true
    }

const formLogin = document.querySelector("#login")
const inputUser = document.querySelector("#input-user")
const inputPass = document.querySelector("#input-pass")
const logint = document.querySelector("#login-incorrect")
const logout = document.querySelector("#logout")
const fotoMundial = document.querySelector(".foto-mundial")

const subidaLocalStorage = (clave, valor) => {
    localStorage.setItem(clave, JSON.stringify(valor))
}

const bajadaLocalStorage = (clave) => {
    return JSON.parse(localStorage.getItem(clave))
}

formLogin.onsubmit = (event) => {
    event.preventDefault()
    if (inputUser.value === clientes.nombreDeUsuario && inputPass.value === clientes.contraseniaDeUsuario){
    subidaLocalStorage("login", true)
    formLogin.style.display = "none" 
    swal("Bienvenida/o", "Cada vez falta menos para la final del mundial!", "success");
    fotoMundial.style.display = "block"
    } else {
    logint.style.display = "block"
    inputUser.style.border = "1px solid red"
    inputPass.style.border = "1px solid red"
    swal ( "¡ERROR!" ,  "Usuario y/o contraseña inválido" ,  "error" )
    }
}

function checkLogin (clave) {
    if ( clave !== true ) {
        formLogin.style.display = "block"
        logout.style.display = "none"
    } else {
        formLogin.style.display = "none"
        logout.style.display = "block"
    }
}

checkLogin(bajadaLocalStorage("login"))

logout.onclick = () => {
    localStorage.removeItem("login")
    checkLogin(bajadaLocalStorage("login"))
}