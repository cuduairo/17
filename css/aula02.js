    $(document).ready(function(){
        //selecionando o elemento que iremos monitorar o click

    $('.btn').click(function(e){
        e.preventDefault()
        

    // armazenando os dados digitados em variáveis
    var nome = $('#NOME').val()
    var idade = $('IDADE').val()
    var mensagem = 'Seja bem vindo, '+nome +', sua idade é' 
    alert(mensagem)
    //limpar os campos do formulário
    $('#NOME').val('')
    $('#IDADE').val('')
    $('#NOME').focusin(function(){
        $3('#mensagem').empty()
    })

    })
    })