const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  const hasReady = this.readyState == 4 && this.status == 200;
  if (hasReady) {
    processXml(this);
  }
};
xhttp.open("GET", "./database/alunos.xml", true);
xhttp.send();

function processXml(xml) {
  const xmlDoc = xml.responseXML;
  const parsedAlunos = xml2Object(xmlDoc);
  const grrs = getGrrs(parsedAlunos);
  let alunos = {}

  for (const grr of grrs) {
    const aluno = getAlunoByGrr(parsedAlunos, grr)
    alunos[grr] = aluno
  }

  console.log(alunos);  
}

function getGrrs(alunos) {
  const allGrrs = alunos.map(aluno => aluno.MATR_ALUNO);
  
  return new Set(allGrrs);
}

const getAlunoByGrr = (allAlunos, grr) => allAlunos.filter(aluno => aluno.MATR_ALUNO === grr);
