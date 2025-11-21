$(document).ready(function(){

    $("#formContacto").on("submit", function (e) {
        e.preventDefault();

        if ($("#nombre").val().trim() === "" ||
            $("#correo").val().trim() === "" ||
            $("#mensaje").val().trim() === "") {
            alert("Por favor completa todos los campos");
        } else {
            alert("Formulario enviado correctamente");
            this.reset();
        }
    });

    // Manejo del modal de test de seguridad
    $("#formTest").on("submit", function (e) {
        e.preventDefault();

        if ($("#p1").val() === "no" && $("#p2").val() === "ignorar")  {
              $("#resultadoTest").text("Excelente, estás bien protegido.")
        } else {
              $("#resultadoTest").text("Necesitas reforzar tus conocimientos de seguridad.")
        }
    });
})