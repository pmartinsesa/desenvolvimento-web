function main(alunos) {
  setTitleOfNavBar(alunos);
  configureSearch(alunos);
}

function setTitleOfNavBar(alunos) {
  const navbarTitle = alunos["GRR00000000"][0].NOME_CURSO;
  const navbar = $("#navbarTitle")[0];

  navbar.innerHTML = navbarTitle;
}

function configureSearch(alunos) {
  const input = $("#searchInputField")[0];
  const button = $("#searchButton");

  button.click(() => {
    const userInput = input.value;
    const selectedAluno = getWantUserInput(userInput.toUpperCase(), alunos); 
    const userInputIsValid = selectedAluno.length > 0;
    
    if (userInputIsValid) {
      updateGrid(selectedAluno);
    }
    else {
      alert("Entrada inválida, por favor digite um GRR válido.")
    }
    
    input.value = "";
  })  

  console.log(input)
  console.log(button)
}

function getWantUserInput(userInput, alunos) {
  return alunos[userInput] || [];
}

function updateGrid(aluno) {
  console.log("updateGrid = ", aluno);
}