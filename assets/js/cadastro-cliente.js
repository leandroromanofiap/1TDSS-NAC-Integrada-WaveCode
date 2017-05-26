$(function() {
    cadastro_cliente.init();
    cadastro_cliente.inserirMasks();
});

cadastro_cliente = {
    init: function() {
        $('#cadastro-cliente-concluir').on('click', cadastro_cliente.concluirCadastro);
    },

    inserirMasks: function() {
        $('#cadastro-cliente-contato-ddd').mask('999');
        $('#cadastro-cliente-contato-numero').mask('0000-00000');
        $('#cadastro-cliente-endereco-cep').mask('00000-000');
        $('#cadastro-cliente-dados-cpf').mask('000.000.000-00');
        $('#cadastro-cliente-dados-rg').mask('00.000.000-0');

        $('#cadastro-cliente-dados-dt-nascimento').datepicker({
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
    },

    concluirCadastro: function(e) {
        e.preventDefault();
        
        swal({
            title: "Cadastro concluído!",
            text: "Parabéns! O cadastro do cliente (pessoa física) foi concluído com sucesso!",
            type: "success",
            confirmButtonText: "Retornar para Home"
        }, function() {
            window.location = 'index.html'
        });
    }
}