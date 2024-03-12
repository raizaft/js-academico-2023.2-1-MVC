class Disciplina {
  constructor(codigo, nome) {
    this._codigo = codigo;
    this._nome = nome;
    this.alunos = [];
  }

  get codigo() {
    return this._codigo;
  }

  set codigo(novoCodigo) {
    this._codigo = novoCodigo;
  }

  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
    this._nome = novoNome;
  }

  inserirAlunoNaDisciplina(aluno) {
    this.alunos.push(aluno);
  }
}
