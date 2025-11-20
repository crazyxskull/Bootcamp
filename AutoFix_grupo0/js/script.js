let servicios = [
    {
        id: 1,
        nombre: "cambio de aceite",
        precio: "$500 MXN",
        imagen: "https://cdn-icons-png.flaticon.com/512/7249/7249897.png"
    },
    {
        id: 2,
        nombre: "Revision de frenos",
        precio: "$700 MXN",
        imagen: "https://cdn-icons-png.flaticon.com/512/662/662856.png"
    },
    {
        id: 3,
        nombre: "Diagnostico electrico",
        precio: "$600 MXN",
        imagen: "https://cdn-icons-png.flaticon.com/512/5385/5385622.png"
    }
];

$(document).ready(function(){


    for (let i = 0; i < servicios.length; i++){
        let servicio = servicios[i]
        $("#container-servicio").append(`
            <div class="col-lg-4 col-md-4 col-6">
                <div class="card text-start container-img p-2">
                    <img src="${servicio.imagen}" class="card-img-top fixed-img" alt="Película">
                    <div class="card-body">
                        <p><strong>Precio: </strong>${servicio.precio}</p>
                    </div>
                </div>
            </div>
            `)
        
    }

    //confirmar reserva y luego mostrar alerta por tiempo breve
    $("#confirmar").on("click", function(){
        $(".servicio-confirmado").append(`
            <div class="alert alert-success mt-4" role="alert">
                🎉 ¡Tu servicio ha sido confirmado!  
             </div>
            `)
    })
});