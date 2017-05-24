$(document).ready(function () {
    tipos_servicos.iniciarForm();
});

tipos_servicos = {
    eventos : function(){
        $('#registrar-servico').click(tipos_servicos.registrar);
    },
    tabela_servicos : {
        0 : {codigo: 10, tipo: "Cabeleireiro - Corte Masculino", valor: 30, cobrado: "Unidade" },
        1 : {codigo: 11, tipo: "Cabeleireiro - Corte Feminino", valor: 50, cobrado: "Unidade" },
        2 : {codigo: 12, tipo: "Cabeleireiro - Escova", valor: 40, cobrado: "Unidade" },
        3 : {codigo: 15, tipo: "Translado ao Aeroporto", valor: 50, cobrado: "Unidade hóspede" },
        4 : {codigo: 16, tipo: "SPA - Massagem", valor: 30, cobrado: "Unidade" },
        5 : {codigo: 17, tipo: "SPA - Ôfuro", valor: 30, cobrado: "Unidade" },
        6 : {codigo: 18, tipo: "Room Service - Almoço ou Jantar(pratos típicos)", valor: 50, cobrado: "Unidade" },
        7 : {codigo: 19, tipo: "Room Service - Café da Manhã", valor: 20, cobrado: "Unidade" },
        8 : {codigo: 20, tipo: "Telefonema Cobertura Local - Fixo", valor: 0.5, cobrado: "Unidade (Minuto)" },
        9 : {codigo: 21, tipo: "Telefonema Cobertura Local - Celular", valor: 2, cobrado: "Unidade (Minuto)" },
        10 : {codigo: 22, tipo: "Telefonema Cobertura Nacional - Fixo", valor: 1, cobrado: "Unidade (Minuto)" },
        11 : {codigo: 23, tipo: "Telefonema Cobertura Nacional - Celular", valor: 2.5, cobrado: "Unidade (Minuto)" },
        12 : {codigo: 24, tipo: "Telefonema Cobertura Internacional - Fixo", valor: 3, cobrado: "Unidade (Minuto)" },
        13 : {codigo: 25, tipo: "Telefonema Cobertura Internacional - Celular", valor: 5, cobrado: "Unidade (Minuto)" },
        14 : {codigo: 27, tipo: "Ligações Skype - qualquer lugar", valor: 0.5, cobrado: "Unidade (Minuto)" },
        15 : {codigo: 28, tipo: "Room Service - Lavanderia - Calça", valor: 8, cobrado: "Unidade" },
        16 : {codigo: 29, tipo: "Room Service - Lavanderia - Camiseta", valor: 5, cobrado: "Unidade" },
        17 : {codigo: 30, tipo: "Room Service - Lavanderia - Moletons", valor: 7, cobrado: "Unidade" },
        18 : {codigo: 31, tipo: "Room Service - Lavanderia - Vestido", valor: 10, cobrado: "Unidade" },
        19 : {codigo: 32, tipo: "Room Service - Lavanderia - Terno", valor: 15, cobrado: "Unidade" },
        20 : {codigo: 33, tipo: "Room  Service - Lavanderia - Peças Íntimas", valor: 5, cobrado: "Unidade" }
    },
    valor_total : 0.00,
    codigosReserva : {
        '123456' : true
    },
    iniciarForm : function () {
        tipos_servicos.submitForm();
        tipos_servicos.iniciar_tabela();
        tipos_servicos.atualizarValorTotal();
        tipos_servicos.eventos();
    },
    submitForm : function (){
        $('form').submit(function (e) {
            e.preventDefault();
            if (confirm("Tem certeza que deseja contabilizar a compra de R$" + tipos_servicos.valor_total.toFixed(2))) {
                alert('Compra efetuada com sucesso para a reserva: 123456')
                $('form').unbind('submit').submit();
            }
        });
    },
    validarCodigoReserva: function (codigo) {
        return tipos_servicos.codigosReserva[codigo];
    },
    iniciar_tabela: function () {
        var tab = "";
        for (var i = 0; i < 21; i++) {
            tab +=
                    "<tr>" +
                        "<td>" + tipos_servicos.tabela_servicos[i]["codigo"] + "</td>" +
                        "<td>" + tipos_servicos.tabela_servicos[i]["tipo"] + "</td>" +
                        "<td> R$ " + tipos_servicos.tabela_servicos[i]["valor"] + "</td>" +
                        "<td>" + tipos_servicos.tabela_servicos[i]["cobrado"] + "</td>" +
                    "</tr>"
        }
        $('#tabela-servicos').html(tab);
    },
    atualizarValorTotal: function () {
        $('#valor-total').html(tipos_servicos.valor_total.toFixed(2));
    },
    registrar: function () {
        codigo = $('#codigo-servico').val();
        qntd = $('#quantidade-produto').val();
        debugger;
        if (codigo.trim() != "" && qntd.trim() != "") {
            servico = tipos_servicos.localizar_servico(codigo);

            if (servico != undefined && !isNaN(qntd)) {
                valor_servico = servico["valor"];
                if (qntd > 0) {
                    debugger;
                    tipos_servicos.valor_total += valor_servico * qntd;
                    tipos_servicos.atualizarValorTotal();
                    $('#finalizar').show();
                }
                else
                    tipos_servicos.erro();
            }
            else
                tipos_servicos.erro();
        }
        else
            tipos_servicos.erro();
    },
    erro: function () {
        alert('São necessários o código e quantidade de serviços');
    },
    localizar_servico: function (codigo) {
        for (var i = 0; i < 21; i++) {
            if (tipos_servicos.tabela_servicos[i]["codigo"] == codigo) 
                return tipos_servicos.tabela_servicos[i];
        }
        return undefined;
    }
}