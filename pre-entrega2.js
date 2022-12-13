// Subscripción para ver la Final del Mundial de Fútbol
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


const paquetes = [
    {
        nombre: "Subscripción Paquete Básico",
        accesoContenido: "Básico", 
        precioDelPaquete: 1000,
        cantidadDeDispositivos: 2,
        calidadDeImagen: "720p",
        reproduccionEnSimultaneo: false,
    },
    {
        nombre: "Subscripción Paquete HD",
        accesoContenido: "Medio", 
        precioDelPaquete: 2000,
        cantidadDeDispositivos: 3,
        calidadDeImagen: "1080p",
        reproduccionEnSimultaneo: false,
    },
    {
        nombre: "Subscripción Paquete 4K",
        accesoContenido: "Avanzado", 
        precioDelPaquete: 3000,
        cantidadDeDispositivos: 5,
        calidadDeImagen: "1080p 4K",
        reproduccionEnSimultaneo: true,
    },
    {
        nombre: "Subscripción Paquete 4K Premium",
        accesoContenido: "Premium", 
        precioDelPaquete: 5000,
        cantidadDeDispositivos: 10,
        calidadDeImagen: "2060p 4K",
        reproduccionEnSimultaneo: true,
    }
]

for (let i=0; i<clientes.length; i++){
    console.log(`El nombre del Subscriptor es ${clientes[i].nombre} y tiene ${clientes[i].edad} años.`)
    if (clientes[i].tieneTarjetaDeCredito === true){
    console.log(`${clientes[i].nombre} posee Tarjeta de Crédito, por lo que puede acceder a su subscripción para ver la final del mundial.`)
    }else{
    console.log(`${clientes[i].nombre} no posee Tarjeta de Crédito, por lo que no podrá acceder a su subscripción para ver la final del mundial.`)
    }
    if (clientes[i].resideEnArgentina === true){
    console.log(`${clientes[i].nombre} paga el precio original de la subscripción.`)
    }else{
    console.log(`${clientes[i].nombre} abonará un recargo del 5% sobre el valor original de la subscripción.`)
    }
    function recargoFueraDelPais(a, b){
    if(clientes[i].tieneTarjetaDeCredito === true && clientes[i].resideEnArgentina === true){
        return console.log(`El pago de la subscripción es ${paquetes[0].precioDelPaquete}.`)
    }else{
        return console.log(`El pago de la subscripción es $${paquetes[0].precioDelPaquete*1.05}.`)
    }
    }
    recargoFueraDelPais(1000, 1.05)
}

confirm("¿Desea conocer el detalle de la Subscripción más barata?")

if (confirm = true){
    paquetes.filter((elemento, i=paquetes) => {
        return elemento === paquetes[0]
    })
    console.table(paquetes[0])
}else{
    console.log("Usted prefirió no conocer el detalle de la Subscripción más barata")
}

const paqueteBusqueda = prompt("¿Qué tipo de subscripción desea elegir?")
paquetes.find((paqueteBusqueda, i=paquetes) => {
        return paqueteBusqueda === paquetes[0]
    })

alert(paqueteBusqueda)