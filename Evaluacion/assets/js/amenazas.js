let amenazas = [
    {
        id: 1,
        titulo: "Phishing",
        descripcion: "El phishing es una técnica de ingeniería social en la que un ciberdelincuente suplanta la identidad de una entidad confiable (como un banco, empresa o servicio digital) para engañar al usuario y obtener información personal o financiera. Suele llegar mediante correos, mensajes o sitios web falsificados que parecen reales. Su objetivo es robar credenciales, datos bancarios o instalar malware en los dispositivos.",
        imagen: "https://images.ctfassets.net/5i1m3im8l2b5/3wIRSBd1uuCeOlSr34Snlq/22d42b323358ba2de10db9560a9393a3/10-tips-to-prevent-phishing.png?w=1200&h=630&q=50&fm=png"
    },
    {
        id: 2,
        titulo: "Ransomware",
        descripcion: "El ransomware es un tipo de malware que cifra los archivos del usuario, bloqueando su acceso, y exige el pago de un rescate a cambio de devolver el control. Es una de las amenazas más peligrosas actualmente, ya que puede paralizar empresas completas. Se suele propagar mediante archivos adjuntos maliciosos, descargas sospechosas o vulnerabilidades sin parchear.",
        imagen: "https://web-assets.esetstatic.com/tn/-x700/wls/2025/01-2025/ataque-ransomware-que-hacer.jpeg"
    },
    {
        id: 3,
        titulo: "Malware",
        descripcion: "El malware es cualquier tipo de software malicioso diseñado para infiltrarse en un sistema y causar daño, robar información, espiar al usuario o tomar control de su equipo sin permiso. Incluye virus, troyanos, spyware, keyloggers y gusanos. Suelen instalarse mediante descargas inseguras, dispositivos infectados o páginas maliciosas.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRXMcxaeNk-mLMsY1ksLWO2qPb7UusQl7bQQ&s"
    },
    {
        id: 4,
        titulo: "Ataques DDoS",
        descripcion: "Un ataque DDoS (Distributed Denial of Service) consiste en saturar un servidor con un volumen masivo de tráfico proveniente de múltiples dispositivos comprometidos, llamados botnets. El objetivo es dejar un sitio web o servicio fuera de funcionamiento. Es común en sabotajes, extorsiones o conflictos entre organizaciones.",
        imagen: "https://as1.ftcdn.net/jpg/01/11/45/92/1000_F_111459249_YUwxSuCQqqcsBaFCXYPEj36qWt2RKyoj.jpg"
    }
];
$(document).ready(function(){

    for (let i = 0; i < amenazas.length; i++){
        let amenaza = amenazas[i]
        $(".container-amenazas").append(`
            <div class="col-md-6 col-lg-4 card-amenaza" data-id=${amenaza.id}>
                <div class="card h-100 card-select">
                    <img class="card-img-top object-fit-cover"
                        src=${amenaza.imagen}
                        height="200">
                    <div class="card-body">
                        <h3 class="card-title">${amenaza.titulo}</h3>
                    </div>
                </div>
            </div>
            `)
        
    }
    let amenazaSeleccionada = null
    $(".card-amenaza").on("click", function(){
        let id = $(this).data("id")
        
        for (let i = 0; i < amenazas.length; i++){
            if (amenazas[i].id == id){
                amenazaSeleccionada = amenazas[i]
                break
            }
        }
        console.log(amenazaSeleccionada)
        $("#amenazaModal").modal("show");
        
        $("#amenazaLabel").text(`${amenazaSeleccionada.titulo}`)
        $("#imgAmenaza").attr("src", amenazaSeleccionada.imagen);
        // $("#tituloAmenaza").text(amenazaSeleccionada.titulo);
        $("#description").text(amenazaSeleccionada.descripcion);

        // $("#horario").append(``)
        // $("#asientosInput").val(`${peliculaSeleccionada.asientos}`)
    })

})