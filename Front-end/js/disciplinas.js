class GerenciadorDisciplinas {
    constructor() {
        this.disciplinas = [
            { id: 1, nome: "Matemática", descricao: "Cálculos e equações" },
            { id: 2, nome: "Português", descricao: "Gramática e literatura" }
        ];
        this.carregarDisciplinas();
    }

    carregarDisciplinas() {
        const grade = document.querySelector('.grade-disciplinas');
        grade.innerHTML = this.disciplinas.map(disciplina => `
            <div class="cartao-disciplina" data-id="${disciplina.id}">
                <i class="fas fa-book"></i>
                <h3>${disciplina.nome}</h3>
                <p>${disciplina.descricao}</p>
                <button class="botao-editar">Editar</button>
            </div>
        `).join('');
    }
}

new GerenciadorDisciplinas();
