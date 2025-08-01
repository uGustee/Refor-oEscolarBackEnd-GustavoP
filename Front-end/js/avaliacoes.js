document.addEventListener('DOMContentLoaded', () => {
    const avaliacoes = [
        {
            id: 1,
            disciplina: "Matemática",
            data: "2023-06-15",
            nota: 8.5,
            aluno: "João Silva"
        }
    ];

    function renderCalendario() {
        const calendario = document.querySelector('.calendario-avaliacoes');
        // Implementação do calendário (pode usar bibliotecas como FullCalendar)
    }

    function renderDetalhes(avaliacao) {
        const detalhes = document.querySelector('.detalhes-avaliacao');
        detalhes.innerHTML = `
            <h3>${avaliacao.disciplina}</h3>
            <p><strong>Data:</strong> ${new Date(avaliacao.data).toLocaleDateString()}</p>
            <p><strong>Nota:</strong> ${avaliacao.nota}/10</p>
            <p><strong>Aluno:</strong> ${avaliacao.aluno}</p>
        `;
    }

    // Inicialização
    renderCalendario();
    if(avaliacoes.length > 0) renderDetalhes(avaliacoes[0]);
});
