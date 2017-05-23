//Iniciando o evento da página
$(document).ready(function () {
    codigo_hospedagem.iniciarForm();
});

//Objeto de função da página
codigo_hospedagem = {
    //Iniciar Formulario
    iniciarForm: function () {
        //handler do submit
        codigo_hospedagem.submitForm();
        //options do calendário
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
    //Coleção de códigos válidos
    codigoValidacao: {
        '123456': true
    },
    //Função do Submit da página
    submitForm : function (){
        $('form').submit(function (e) {
            e.preventDefault();
            codigo_hospedagem.validarCodigoReserva($('#codigo-reserva').val());
        });
    },
    //Função de validação do código
    validarCodigoReserva : function(codigo){
        if (codigo_hospedagem.codigoValidacao[codigo] == true)
            alert('certo');
        else 
            alert('errado')
    }
}