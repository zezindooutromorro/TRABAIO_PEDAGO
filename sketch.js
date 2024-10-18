play.addEventListener("click", logar);


  function avancar(){
  var letra = document.getElementById('user').value;
  var letra = document.getElementById('senha').value;

  if(user == "admin" && 
  senha == "admin"){
    alert('Palavra correta')
    location.href = "index.html";
  }
  else{
    alert('Palavra incorreta')
  }
}