// EscreveNumero guarda a quantia escolida para efetuar a operação
// Caso apareça mais de um operador consecutivamente na mesma conta aparecera 'Syntax error'
function EscreveNumero(elementId) {                                           
    var outputValueTo = document.getElementById('field1');

    if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
        outputValueTo.value = elementId.textContent;
    } else {

        outputValueTo.value += elementId.textContent;
    }
}

//Limpar apresentado no prohjeto como 'C' zera tudo que já estava guardado
function Limpar() {
    document.getElementById('field1').value = '0';
    document.getElementById('dec').disabled = false;
}

//Os operadores são colocados nas proprias versões da linguagem
//Novamente caso um operador apareça mais de um vez terá como mensagem 'Syntax error' 
function Operadores(elementId) {
    var outputValueTo = document.getElementById('field1');
    if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
        outputValueTo.value = '0';
    } else {
        outputValueTo.value += elementId.textContent;
        document.getElementById('dec').disabled = false;
    }
}
//muda o status do numero de int para double
function Decimal(elementId, status) {
    var outputValueTo = document.getElementById('field1');
    outputValueTo.value += elementId.textContent;
    document.getElementById('dec').disabled = status;
}
//Calcular gera a resposta por meio das operações atualizando o input(vizor)
function Calcular() {

    try {

        var field1txt = document.getElementById('field1');
        if (field1txt.value != '') {
            var calculateResult = eval(field1txt.value);
            field1txt.value = calculateResult;
        }
    } catch (err) {

        field1txt.value = 'Syntax error';

    }

}
// Representado pela letra B, a função apaga o ultimo numero digitado
function RemoverNumero() {

    var field1txt = document.getElementById('field1');

    if (field1txt.value.length == 1 || field1txt.value == '0' || field1txt.value == 'Syntax error') {
        field1txt.value = '0';
        document.getElementById('dec').disabled = false;
    } else {
        field1txt.value = field1txt.value.substring(0, field1txt.value.length - 1);
    }
}