let peliculas = [
    {
        id: 1,
        titulo: "Gladiator",
        descripcion: "Un general romano busca vengarse del emperador corrupto que asesinó a su familia.",
        poster: "https://cdn.sincroguia.tv/uploads/programs/g/l/a/gladiator-el-gladiador-poster-152_SPA-87_V.jpg",
        horarios: ["13:00", "15:00", "18:30", "21:00"],
        asientos: 40
    },
    {
        id: 2,
        titulo: "The Dark Knight",
        descripcion: "Batman se enfrenta al Joker en una lucha por el alma de Gotham.",
        poster: "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
        horarios: ["14:00", "17:00", "20:00", "22:00"],
        asientos: 35
    },
    {
        id: 3,
        titulo: "Interstellar",
        descripcion: "Exploradores viajan por un agujero de gusano en busca de un nuevo hogar para la humanidad.",
        poster: "https://m.media-amazon.com/images/I/91vIHsL-zjL._AC_UF894,1000_QL80_.jpg",
        horarios: ["12:30", "16:00", "19:30", "22:30"],
        asientos: 50
    }
];

$(document).ready(function(){


    for (let i = 0; i < peliculas.length; i++){
        let pelicula = peliculas[i]
        $("#container-pelicula").append(`
            <div class="col-lg-4 col-md-6 col-12">
                <div class="card text-start container-img">
                    <img src=${pelicula.poster} class="card-img-top fixed-img" alt="Película">
                    <div class="card-body">
                        <h5 class="card-title">${pelicula.titulo}</h5>
                        <button data-id="${pelicula.id}" 
                        class="btn-reservar btn w-100 btn-secondary 
                        data-bs-toggle="modal" data-bs-target="#reservaModal">
                        Reservar</button>
                    </div>
                </div>
            </div>
            `)
        
    }

    let peliculaSeleccionada = null
    $(".btn-reservar").on("click", function(){
        let id = $(this).data("id")
        
        for (let i = 0; i < peliculas.length; i++){
            if (peliculas[i].id == id){
                peliculaSeleccionada = peliculas[i]
                break
            }
        }
        console.log(peliculaSeleccionada)
        $("#reservaModal").modal("show");
        $("#titulo-pelicula").val(`${peliculaSeleccionada.titulo}`)
        // $("#horario").append(``)
        // $("#asientosInput").val(`${peliculaSeleccionada.asientos}`)
    })

    $("#nombreTitular").on('input', function(){
        this.value = this.value.toUpperCase();
    })

    //confirmar reserva y luego mostrar alerta por tiempo breve
    $("#confirmar").on("click", function(){

        let hora = $("#horario").val();
        let asientos = $("#asientosInput").val();



        $(".reserva-confirmada").append(`
            <div class="alert alert-success mt-4" role="alert">
                🎉 ¡Tu reserva ha sido confirmada!  
                <br>
                <strong>Pelicula: ${peliculaSeleccionada.titulo}</strong>
                 <br>
                <strong>Hora: ${hora}</strong>
                <br>
                <strong>Asiento: ${asientos}</strong>
                <br>
                Puedes revisar los detalles en  
                <a href="https://youtu.be/xvFZjo5PgG0?list=RDxvFZjo5PgG0" class="alert-link">tu historial de reservas</a>.
            </div>
            `)
        $("#horario").val('');
        $("#asientosInput").val('');
        $("#reservaModal").modal("hide");
    })
});