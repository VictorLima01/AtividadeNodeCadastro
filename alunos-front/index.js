export const nomeAluno = "bata";
import axios from 'axios';
let emailAluno;
let cursoAluno;

/*axios.get('http://localhost:3000/api/v1/alunos')
.then(response => criaListaDinamica(response.data))
.catch(error => console.log(error))
*/

export default { nomeAluno: nomeAluno } 

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
}

axios.get('http://localhost:3000/api/v1/alunos')
.then(response => trazerDadosAluno(response.data))
.catch(error => console.log(error))

const trazerDadosAluno = ( dados ) => {
const ulAlunos = document.getElementById('alunos')
alunos.map(aluno => {
  const listaAluno = document.createElement('li')
  listaAluno.innerHTML = `Nome: ${aluno.nome}`
  ulAlunos.appendChild(listaAluno)
})
}