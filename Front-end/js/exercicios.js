document.addEventListener('DOMContentLoaded', () => {
    const exercicios = [
        {
            id: 1,
            pergunta: "Quanto é 2 + 2?",
            tipo: "multipla_escolha",
            disciplina: "Matemática",
            nivel: "Fácil"
        }
    ];

    const listaExercicios = document.querySelector('.lista-exercicios');
    
    exercicios.forEach(exercicio => {
        const exercicioElement = document.createElement('div');
        exercicioElement.className = 'cartao-exercicio';
        exercicioElement.innerHTML = `
            <h3>${exercicio.pergunta}</h3>
            <div class="metadados">
                <span class="disciplina">${exercicio.disciplina}</span>
                <span class="nivel">${exercicio.nivel}</span>
            </div>
        `;
        listaExercicios.appendChild(exercicioElement);
    });
});
