class DisciplinaService {
  constructor(alunoService) {
    this.repositorio = new DisciplinaRepositorio();
    this.alunoService = alunoService;
  }

  inserir(codigo, nome, aluno) {
    const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
    if (disciplinaPesquisada.length > 0) {
      throw new Error("disciplina já cadastrada!");
    }
    const disciplinaNova = new Disciplina(codigo, nome);
    this.repositorio.inserir(disciplinaNova);
    this.inserirAlunoNaDisciplina(disciplinaNova, aluno);
    return disciplinaNova;
  }

  pesquisarPorCodigo(codigo) {
    return this.repositorio
      .listar()
      .filter((disciplina) => disciplina.codigo === codigo);
  }

  remover(codigo) {
    this.repositorio.remover(codigo);
  }

  inserirAlunoNaDisciplina(disciplinaNova, aluno) {
    const alunoPesquisado = this.alunoService.pesquisarPorMatricula(aluno);
    const alunoObj = alunoPesquisado[0];
    disciplinaNova.inserirAlunoNaDisciplina(alunoObj);
  }
}
