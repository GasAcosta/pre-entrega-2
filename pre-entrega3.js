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