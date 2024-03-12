class DisciplinaControlador {
  constructor(alunoService) {
    this.servico = new DisciplinaService(alunoService);
  }

  inserir() {
    const codigoElemento = document.querySelector("#codigo");
    const nomeElemento = document.querySelector("#nomeDisc");
    const alunoElemento = document.querySelector("#aluno");
    const disciplinaInserida = this.servico.inserir(
      codigoElemento.value,
      nomeElemento.value,
      alunoElemento.value
    );
    const listaDisciplinasElemento =
      document.querySelector("#listaDisciplinas");
    if (disciplinaInserida) {
      this.inserirDisciplinaNoHtml(
        disciplinaInserida,
        listaDisciplinasElemento
      );
    }
  }

  inserirDisciplinaNoHtml(disciplina, elementoDestino) {
    const disciplinaElemento = document.createElement("li");
    disciplinaElemento.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome} - Alunos: ${disciplina.alunos[0].nome}`;
    elementoDestino.appendChild(disciplinaElemento);
  }
}
