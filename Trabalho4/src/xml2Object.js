function xml2Object(xmlDoc) {
  const xml = $(xmlDoc);
  const xmlAlunos = xml.find("ALUNO");

  let alunos = [];
  for (let i = 0; i < xmlAlunos.length; i++) {
    const tagsByAluno = xmlAlunos[i].getElementsByTagName("*");
    const alunoObj = createObjectByTag(tagsByAluno);

    alunos.push(alunoObj);
  }

  return alunos;
}

function createObjectByTag(tagsByAluno) {
  let obj = {};

  for (let i = 0; i < tagsByAluno.length; i++) {
    const key = tagsByAluno[i].nodeName;
    const value = tagsByAluno[i].innerHTML;

    obj[key] = value;
  }
  
  return obj;
}