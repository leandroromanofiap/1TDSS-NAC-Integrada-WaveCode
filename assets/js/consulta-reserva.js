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
            if (registrar_consumo.validarCodigoReserva($('#codigo-reserva').val()))
                $(this).unbind('submit').submit();
            else
                alert('Deu ruim')
        });
    },
    validarCodigoReserva: function (codigo) {
        return registrar_consumo.codigosReserva[codigo];
    }
}
