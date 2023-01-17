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
            </div>
        `
        contenedor.appendChild(productos)
    }
}
paquetesAHtml(paquetes)