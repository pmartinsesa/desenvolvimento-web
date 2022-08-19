function main(alunos) {
  setTitleOfNavBar(alunos);
  configureSearch();
}

function setTitleOfNavBar(alunos) {
  const navbarTitle = alunos["GRR00000000"][0].NOME_CURSO;
  const navbar = $("#navbarTitle")[0];

  navbar.innerHTML = navbarTitle;
}

function configureSearch() {
  const input = $("#searchInputField")[0];
  const button = $("#searchButton");

  button.click(() => {
    const userInput = input.value;
    
    
    
    input.value = "";
  })  

  console.log(input)
  console.log(button)
}