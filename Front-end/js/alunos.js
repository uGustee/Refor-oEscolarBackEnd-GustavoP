class GerenciadorAlunos {
    constructor() {
        this.alunos = [
            {
                id: 1,
                nome: "João Silva",
                serie: "7º Ano",
                pontos: 1250,
                nivel: 3
            }
        ];
        this.carregarElementos();
        this.carregarAlunos();
    }

    carregarElementos() {
        this.tabela = document.querySelector('.tabela-alunos');
    }

    carregarAlunos() {
        this.tabela.innerHTML = this.alunos.map(aluno => `
            <div class="linha-aluno">
                <span>${aluno.nome}</span>
                <span>${aluno.serie}</span>
                <span>${aluno.pontos} pts</span>
                <span>Nível ${aluno.nivel}</span>
                <button class="botao-editar" data-id="${aluno.id}">
                    <i class="fas fa-edit"></i>
                </button>
            </div>
        `).join('');
    }
}

new GerenciadorAlunos();
