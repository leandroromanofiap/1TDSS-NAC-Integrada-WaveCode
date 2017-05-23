$(document).ready(function() {
    tipos_servicos.iniciarForm();
});

tipos_servicos = {
    codigosReserva : {
        '123456' : true
    },
    iniciarForm : function () {
        tipos_servicos.submitForm();
    },
    submitForm : function (){
        $('form').submit(function (e) {
            e.preventDefault();
        });
    },
    validarCodigoReserva: function (codigo) {
        return tipos_servicos.codigosReserva[codigo];
    }
}