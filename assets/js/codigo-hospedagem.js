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
        //Drop Down das horas
        $('#hora-atual').html(
            "<option>00:00</option>"+
            "<option>01:00</option>"+
            "<option>02:00</option>"+
            "<option>03:00</option>"+
            "<option>04:00</option>"+
            "<option>05:00</option>"+
            "<option>06:00</option>"+
            "<option>07:00</option>"+
            "<option>08:00</option>"+
            "<option>09:00</option>"+
            "<option>10:00</option>"+
            "<option>11:00</option>"+
            "<option>12:00</option>"+
            "<option>13:00</option>"+
            "<option>14:00</option>"+
            "<option>15:00</option>"+
            "<option>16:00</option>"+
            "<option>17:00</option>"+
            "<option>18:00</option>"+
            "<option>19:00</option>"+
            "<option>20:00</option>"+
            "<option>21:00</option>"+
            "<option>22:00</option>"+
            "<option>23:00</option>"
            );
    },
    //Cole��o de c�digos v�lidos
    codigoValidacao: {
        '123456': 'Id34uAm'
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
        if (codigo_hospedagem.codigoValidacao[codigo] != undefined)
            swal({
                title: "Hospedagem confirmada!",
                text: "A sua hospedagem foi confirmada com sucesso. Código da hospedagem: " + codigo_hospedagem.codigoValidacao[codigo],
                type: "success",
                confirmButtonText: "Fechar"
            });
        else 
            swal({
                title: "Erro!",
                text: "Esta hospedagem não existe.",
                type: "error",
                confirmButtonText: "Fechar"
            });
    }
}