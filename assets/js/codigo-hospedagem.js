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
    //Coleção de códigos válidos
    codigoValidacao: {
        '123456': 'Id34uAm'
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
        if (codigo_hospedagem.codigoValidacao[codigo] != undefined)
            alert('Hospedagem: ' + codigo_hospedagem.codigoValidacao[codigo]);
        else 
            alert('Esta hospedagem não existe.')
    }
}