const nome = document.getElementById('campo1');
const sobrenome = document.getElementById('campo2');
const email = document.getElementById('campo3');
const senha = document.getElementById('campo4');
const sexo = document.querySelectorAll('#form-signup input[type="radio"]');
function validaForm () {
  if (nome.value == null || nome.value == ""){
    alert('Nome precisa ser preenchido');
    nome.focus();
    return false;
  }
  if (sobrenome.value == null || sobrenome.value == ""){
    alert('Sobrenome precisa ser preenchido');
    sobrenome.focus();
    return false;
  }
  if (email.value == null || email.value == ""){
    alert('Email precisa ser preenchido');
    email.focus();
    return false;
  }
  if (senha.value == null || senha.value == ""){
    alert('Senha precisa ser preenchido');
    senha.focus();
    return false;
  }
};
function showResult(){
// retorna o valor do genero
function gender() {
  let radios = document.querySelectorAll('#form-signup input[type="radio"]');
  let value;
  for (let i = 0; i < radios.length; i++) {
      if (radios[i].type === 'radio' && radios[i].checked) {         
          value = radios[i].value;       
      }
  }
  return value;
};
  let name = nome.value;
  let sex = gender();
  alert('Nome: '+name+ ' e genero: '+sex);
};
const btn = document.querySelector('#facebook-register');
    btn.addEventListener('click', function(e){
    e.preventDefault();
    validaForm();
    showResult();
});