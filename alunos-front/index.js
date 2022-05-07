let nomeAluno;
let emailAluno;
let cursoAluno;


const nome = document.getElementById("nome")
const email = document.getElementById("email")
const cursoCP = document.getElementsByClassName("cp")
const cursoAds = document.getElementsByClassName("ads")
const cursoSi = document.getElementsByClassName("si")

function myFunction(){
  console.log(nome.value, email.value, cursoCP.value, cursoAds.value, cursoSi.value)
  nomeAluno = nome.value
  emailAluno = email.value

  if(cursoCP[0].checked){
    cursoAluno = cursoCP[0].value
  }else if(cursoAds[0].checked){
    cursoAluno = cursoAds[0].value
  }else if(cursoSi[0].checked){
    cursoAluno = cursoSi[0].value
  }

  document.getElementById("nomeAluno").innerHTML = '<label>' + nomeAluno + '</label>'
  document.getElementById("emailAluno").innerHTML = '<label>' + emailAluno + '</label>'
  document.getElementById("cursoAluno").innerHTML = '<label>' + cursoAluno + '</label>'

}

function limparCmapos(){
    email.value = ""
    nome.value = ""
    cursoCP[0].checked = false
    cursoAds[0].checked = false
    cursoSi[0].checked = false
}