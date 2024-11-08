<?php

$sevidor = "localhost";
$user = "root";
$senha = "123456";
$bd = "cadlogin";

$conn = new mysqli($sevidor,$user,$senha,$bd);
if(!$conn){
echo"<p style='color:red; text-align:center; font-size:25px;'>Erro de conexão!</p>";
}

if($_server["request_method"]=="post"){

    $user = $_POST["user"];
    $senha = $_POST["senha"];
    $logar = $_POST["logar"];

    if($senha ==$logar){
        $sql = "SELECT * FROM user WHERE user='$user'";
        $retorno = mysqli_query($conn, $sql);
        $row = mysqli_fectch_assoc($retorno);

        if($row){
            echo"<p style='color:red; text-align:center; font-size:25px;'>Usuário Já Existe</p>";
        } else{

            $hashsenha = senha_hash($senha, PASSWORD_BCRYPT);
            $sql = "INSERT INTO user (user, senha) values('$user', $hashsenha);
            $retorno = mysqli_query($conn, $sql);
        }
    }

}
?>