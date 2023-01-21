const paquetes = [
    {
        nombreDelPaquete: "Paquete Básico",
        precioDelPaquete: "$1000",
        accesoContenido: "Básico", 
        cantidadDeDispositivos: 2,
        calidadDeImagen: "720p",
        reproduccionEnSimultaneo: false,
    },
    {
        nombreDelPaquete: "Paquete HD",
        precioDelPaquete: "$2000",
        accesoContenido: "Medio",
        cantidadDeDispositivos: 3,
        calidadDeImagen: "1080p",
        reproduccionEnSimultaneo: false,
    },
    {
        nombreDelPaquete: "Paquete 4K",
        precioDelPaquete: "$3000",
        accesoContenido: "Avanzado",
        cantidadDeDispositivos: 5,
        calidadDeImagen: "1080p 4K",
        reproduccionEnSimultaneo: true,
    },
    {
        nombreDelPaquete: "Paquete 4K Premium",
        precioDelPaquete: "$4000",
        accesoContenido: "Premium",
        cantidadDeDispositivos: 10,
        calidadDeImagen: "2060p 4K",
        reproduccionEnSimultaneo: true,
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
                <button id="boton">Ver más</button>
            </div>
        `
        contenedor.appendChild(productos)
    }
}
paquetesAHtml(paquetes)

// const boton = document.querySelector("#boton")

// boton.onClick = (paquetes) => {
//     for (let i = 0; i < paquetes.length; i++){
//     swal({
//         title: `${paquetes[i].nombreDelPaquete}`,
//         text: "You clicked the button!",
//         icon: "success",
//       });
//     }
// }

const argentina = document.querySelector(".arg")
const francia = document.querySelector(".fra")

argentina.onclick = () => {
Toastify({
    text: "VAMOS ARGENTINA!",
    duration: 500,
    close: true,
    gravity: "bottom",
    position: "left",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #ffffff, #75AADB)",
        }
    }
).showToast()
}

francia.onclick = () => {
    Toastify({
        text: "ALEZ FRANCIA!",
        duration: 500,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #0055A4, #FFFFFF, #EF4135)",
            }
        }
    ).showToast()
}