document.addEventListener('DOMContentLoaded', function() {
    // Inicializar gráficos
    const ctxDisciplinas = document.getElementById('grafico-disciplinas');
    const ctxProgresso = document.getElementById('grafico-progresso');
    
    // Dados simulados
    const dadosRelatorio = [
        { data: '2023-05-01', disciplina: 'Matemática', exercicio: 'Frações', nota: 8, tentativas: 1 },
        { data: '2023-05-03', disciplina: 'Português', exercicio: 'Sujeito e Predicado', nota: 9, tentativas: 2 }
    ];

    // Preencher tabela
    function carregarDadosRelatorio() {
        const tbody = document.getElementById('dados-relatorio');
        tbody.innerHTML = '';
        
        dadosRelatorio.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${formatarData(item.data)}</td>
                <td>${item.disciplina}</td>
                <td>${item.exercicio}</td>
                <td>${item.nota}/10</td>
                <td>${item.tentativas}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    // Formatadores
    function formatarData(data) {
        return new Date(data).toLocaleDateString('pt-BR');
    }

    // Configurar gráficos
    function inicializarGraficos() {
        new Chart(ctxDisciplinas, {
            type: 'bar',
            data: {
                labels: ['Matemática', 'Português', 'Ciências'],
                datasets: [{
                    label: 'Desempenho Médio',
                    data: [75, 82, 68],
                    backgroundColor: [
                        'rgba(255, 107, 107, 0.7)',
                        'rgba(78, 205, 196, 0.7)',
                        'rgba(255, 209, 102, 0.7)'
                    ]
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });

        new Chart(ctxProgresso, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
                datasets: [{
                    label: 'Pontuação Mensal',
                    data: [65, 59, 70, 72, 78],
                    fill: false,
                    borderColor: 'rgba(67, 97, 238, 1)',
                    tension: 0.1
                }]
            }
        });
    }

    // Filtros
    document.getElementById('periodo-relatorio').addEventListener('change', function() {
        const customDates = document.querySelector('.custom-dates');
        customDates.style.display = this.value === 'custom' ? 'flex' : 'none';
    });

    // Botão Gerar Relatório
    document.getElementById('gerar-relatorio').addEventListener('click', function() {
        // Aqui você faria a chamada para a API com os filtros
        console.log('Gerando relatório com filtros...');
        carregarDadosRelatorio();
    });

    // Inicialização
    carregarDadosRelatorio();
    inicializarGraficos();
});
