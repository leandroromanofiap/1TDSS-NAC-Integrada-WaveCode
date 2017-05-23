//Iniciando o evento da p�gina
$(document).ready(function () {
    codigo_hospedagem.iniciarForm();
});

//Objeto de fun��o da p�gina
codigo_hospedagem = {
    //Iniciar Formulario
    iniciarForm: function () {
        //handler do submit
        codigo_hospedagem.submitForm();
        //options do calend�rio
        $('#data').datepicker({
            closeText: 'Fechar',
            prevText: '&#x3c;Anterior',
            nextText: 'Pr&oacute;ximo&#x3e;',
            currentText: 'Hoje',
            monthNames: ['Janeiro', 'Fevereiro', 'Mar&ccedil;o', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
            'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            dayNames: ['Domingo', 'Segunda-feira', 'Ter&ccedil;a-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            weekHeader: 'Sm',
            dateFormat: 'dd/mm/yy',
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: '',
            language: "pt-br"
        });
        $('#hora-atual').timepicker();
    },
    //Cole��o de c�digos v�lidos
    codigoValidacao: {
        '123456': true
    },
    //Fun��o do Submit da p�gina
    submitForm : function (){
        $('form').submit(function (e) {
            e.preventDefault();
            codigo_hospedagem.validarCodigoReserva($('#codigo-reserva').val());
        });
    },
    //Fun��o de valida��o do c�digo
    validarCodigoReserva : function(codigo){
        if (codigo_hospedagem.codigoValidacao[codigo] == true)
            alert('certo');
        else 
            alert('errado')
    }
}