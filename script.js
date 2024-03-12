const controladorAluno = new AlunoControlador();
const alunoService = controladorAluno.service;
const controladorDisciplina = new DisciplinaControlador(alunoService);
