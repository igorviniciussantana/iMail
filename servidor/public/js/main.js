function focused(input) {
  const userDiv = document.querySelector(".username");
  const passDiv = document.querySelector(".password");
  const nomeDiv = document.querySelector(".nome");
  console.log(userDiv)
  console.log(passDiv)

  if (input == "user") {
    userDiv.style.cssText = "outline: 2px solid #8257E5;";
    passDiv.style.cssText = "outline: none";
    nomeDiv.style.cssText = "outline: none";
  } else if (input == "pass") {
    passDiv.style.cssText = "outline: 2px solid #8257E5;"; 
    userDiv.style.cssText = "outline: none;";
    nomeDiv.style.cssText = "outline: none;";
  }else{


    userDiv.style.cssText = "outline: none;";
    passDiv.style.cssText = "outline: none;";
    nomeDiv.style.cssText = "outline: 2px solid #8257E5;";
  }
}

function verSenha() {
  const eye = document.querySelector("#view");
  if (senha.type == "password") {
    senha.type = "text";
    eye.textContent = "visibility_off";
  } else {
    senha.type = "password";
    eye.textContent = "visibility";
  }
}

var visivel = false;
function mostrarSenha(){
const senha = document.querySelector('.senhaValue');
const eye = document.querySelector("#view");


if(visivel){
  eye.textContent = "visibility";
  senha.style.cssText = 'filter: blur(4px)'
  visivel = false

}else{
  eye.textContent = "visibility_off";
  senha.style.cssText = 'filter: blur(0px)'
  visivel = true
}

console.log(visivel)

}


