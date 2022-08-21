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
    } else {
      alert("Entrada inválida, por favor digite um GRR válido.");
    }
  });
}

function getWantUserInput(userInput, alunos) {
  return alunos[userInput] || [];
}

function updateGrid(aluno) {
  const allCells = $("*[id*=class-cell]");
  allCells.mousedown((e) => {
    const isRightClick = e.which === 3;
    const isLeftClick = e.which === 1;

    if (isLeftClick) {
      leftClick(e, aluno);
    }

    if (isRightClick) {
      rightClick(e, aluno);
    }
  });

  allCells.removeClass("text-bg-success");
  allCells.removeClass("text-bg-danger");
  allCells.removeClass("text-bg-warning");
  allCells.removeClass("text-bg-primary");
  const findedOpt = aluno.filter(
    (alunoSubject) => "Optativas" === alunoSubject.DESCR_ESTRUTURA
  );
  const findedTG1 = aluno.filter(
    (alunoSubject) => "Trabalho de Graduação I" === alunoSubject.DESCR_ESTRUTURA
  );
  const findedTG2 = aluno.filter(
    (alunoSubject) =>
      "Trabalho de Graduação II" === alunoSubject.DESCR_ESTRUTURA
  );

  allCells.each(function () {
    const cellClassWithoutSubject = this.className.split("#")[0];
    this.className = cellClassWithoutSubject;
    const subject = this.innerHTML;
    let findedSubjects = [];
    if (subject === "OPT") {
      findedSubjects = findedOpt;
    } else if (subject === "TCC1") {
      findedSubjects = findedTG1;
    } else if (subject === "TCC2") {
      findedSubjects = findedTG2;
    } else {
      findedSubjects = aluno.filter(
        (alunoSubject) => subject === alunoSubject.COD_ATIV_CURRIC
      );
    }

    const studentTookThisClass = findedSubjects.length > 0;
    if (studentTookThisClass) {
      const lastSubject = getLastSubject(findedSubjects);

      if (!lastSubject.invalid) {
        SUBJECT_STATUS[lastSubject.SIGLA](this);
        this.className += ` #${lastSubject.COD_ATIV_CURRIC}`;
      }

      if (subject === "OPT") {
        findedOpt.pop();
      }
    }
  });
}

function getLastSubject(findedSubjects) {
  let lastSubject = {};

  for (let i = findedSubjects.length - 1; i >= 0; i--) {
    lastSubject = findedSubjects[i];

    if (
      lastSubject.SIGLA === "Aprovado" ||
      lastSubject.SIGLA === "Reprovado" ||
      lastSubject.SIGLA === "Matricula" ||
      lastSubject.SIGLA === "Equivale" ||
      lastSubject.SIGLA === "Repr. Freq" ||
      lastSubject.SIGLA === "Rep. s/n"
    ) {
      break;
    }

    lastSubject.invalid = true;
  }

  return lastSubject;
}

const setApprovedClass = (cell) => {
  cell.className += " text-bg-success";
};

const setDisapprovedClass = (cell) => {
  cell.className += " text-bg-danger";
};

const setEquivalenceClass = (cell) => {
  cell.className += " text-bg-warning";
};

const setRegisteredClass = (cell) => {
  cell.className += " text-bg-primary";
};

const SUBJECT_STATUS = {
  Aprovado: setApprovedClass,
  Reprovado: setDisapprovedClass,
  "Repr. Freq": setDisapprovedClass,
  "Rep. s/n": setDisapprovedClass,
  Matricula: setRegisteredClass,
  Equivale: setEquivalenceClass,
};

const rightClick = (e, aluno) => {
  const selectedCell = e.currentTarget;
  const cellSubject = selectedCell.className.split("#")[1];
  console.log(cellSubject);
  findedSubjects = aluno.filter(
    (alunoSubject) => cellSubject === alunoSubject.COD_ATIV_CURRIC
  );

  const studentTookThisClass = findedSubjects.length > 0;
  if (studentTookThisClass) {
    const modal = $(".modal-body");
    $(modal).empty();
    $(modal).append(`
      <div class="row row-cols-8 ">
        <div class="col border border-dark p-1 text-center">Código</div>
        <div class="col-3 border border-dark p-1 text-center">Nome</div>
        <div class="col border border-dark p-1 text-center">Ano</div>
        <div class="col border border-dark p-1 text-center">Período</div>
        <div class="col border border-dark p-1 text-center">Situação</div>
        <div class="col border border-dark p-1 text-center">Nota final</div>
        <div class="col border border-dark p-1 text-center">Frequência</div>
      </div>
    `);

    findedSubjects.forEach(subject => {
      if (subject.MEDIA_FINAL === "9999") {
        subject.MEDIA_FINAL = 0;
      }
      setSubjectOnModal(modal, subject)
    });
  }
  $("#historyModal").modal("show");
};

const leftClick = (e, aluno) => {
  const selectedCell = e.currentTarget;
  const cellSubject = selectedCell.className.split("#")[1];
  console.log(cellSubject);
  findedSubjects = aluno.filter(
    (alunoSubject) => cellSubject === alunoSubject.COD_ATIV_CURRIC
  );

  const studentTookThisClass = findedSubjects.length > 0;
  if (studentTookThisClass) {
    let lastSubject = getLastSubject(findedSubjects);

    if (!lastSubject.invalid) {
      if (lastSubject.MEDIA_FINAL === "9999") {
        lastSubject.MEDIA_FINAL = 0;
      }
      const modal = $(".modal-body");
      $(modal).empty();
      $(modal).append(`
        <div class="row row-cols-8 ">
          <div class="col border border-dark p-1 text-center">Código</div>
          <div class="col-3 border border-dark p-1 text-center">Nome</div>
          <div class="col border border-dark p-1 text-center">Ano</div>
          <div class="col border border-dark p-1 text-center">Período</div>
          <div class="col border border-dark p-1 text-center">Situação</div>
          <div class="col border border-dark p-1 text-center">Nota final</div>
          <div class="col border border-dark p-1 text-center">Frequência</div>
      </div>
      `);
      setSubjectOnModal(modal, lastSubject)
    }
  }
  $("#historyModal").modal("show");
};

const setSubjectOnModal = (modal, subject) => {
  $(modal).append(`
    <div class="row row-cols-7 ">
      <div class="col border border-dark p-1 text-center">${
        subject.COD_ATIV_CURRIC
      }</div>
      <div class="col-3 border border-dark p-1 text-center">${
        subject.NOME_ATIV_CURRIC
      }</div>
      <div class="col border border-dark p-1  text-center">${
        subject.ANO
      }</div>
      <div class="col border border-dark p-1  text-center">${
        subject.PERIODO
      }</div>
      <div class="col border border-dark p-1  text-center">${
        subject.SIGLA
      }</div>
      <div class="col border border-dark p-1  text-center">${
        subject.MEDIA_FINAL
      }</div>
      <div class="col border border-dark p-1  text-center">${
        Math.floor(parseInt(subject.FREQUENCIA))
      }</div>
    </div>
`);
};
