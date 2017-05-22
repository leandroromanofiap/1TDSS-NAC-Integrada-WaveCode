$('#form-codigo-hospedagem').submit(function (e) {
    e.preventDefault();
    alert('e');
    codigo_hospedagem.validarCodigoReserva($('#codigo-reserva').val());
});

codigo_hospedagem = {
    codigoValidacao : {
        '123456' : true
    },
    validarCodigoReserva : function(codigo){
        if (codigo_hospedagem.codigoValidacao(codigo) == true)
            alert('certo');
        else 
            alert('errado')
    }
}