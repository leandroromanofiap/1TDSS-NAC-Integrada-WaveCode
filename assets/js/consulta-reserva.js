$(document).ready(function() {
    registrar_consumo.iniciarForm();
});

registrar_consumo = {
    codigosReserva : {
        '123456' : true
    },
    iniciarForm : function () {
        registrar_consumo.submitForm();
    },
    submitForm : function (){
        $('form').submit(function (e) {
            e.preventDefault();
            if (registrar_consumo.validarCodigoReserva($('#codigo-reserva').val())) {
                window.location = "codigo-hospedagem.html";
            } else {
                swal({
                    title: "Erro!",
                    text: "O código da reserva não foi encontrado.",
                    type: "error",
                    confirmButtonText: "Fechar"
                });
            }
                
        });
    },
    validarCodigoReserva: function (codigo) {
        return registrar_consumo.codigosReserva[codigo];
    }
}
