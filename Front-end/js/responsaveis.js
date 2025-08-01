document.addEventListener('DOMContentLoaded', function() {
    // Simulação de dados - na implementação real, isso viria da API
    const alunos = [
        { id: 1, nome: "João Silva", serie: "7º Ano" },
        { id: 2, nome: "Maria Oliveira", serie: "8º Ano" }
    ];

    const responsaveis = [
        { id: 1, nome: "Carlos Silva", email: "carlos@email.com", telefone: "11987654321", alunoId: 1 }
    ];

    // Preencher dropdown de alunos
    const alunoSelect = document.getElementById('aluno-vinculado');
    alunos.forEach(aluno => {
        const option = document.createElement('option');
        option.value = aluno.id;
        option.textContent = `${aluno.nome} (${aluno.serie})`;
        alunoSelect.appendChild(option);
    });

    // Preencher tabela de responsáveis
    const tabelaResponsaveis = document.querySelector('.tabela-responsaveis');
    
    responsaveis.forEach(responsavel => {
        const aluno = alunos.find(a => a.id === responsavel.alunoId);
        const row = document.createElement('div');
        row.className = 'linha-tabela';
        row.innerHTML = `
            <span>${responsavel.nome}</span>
            <span>${responsavel.email}</span>
            <span>${formatarTelefone(responsavel.telefone)}</span>
            <span>${aluno ? aluno.nome : 'Não vinculado'}</span>
            <span class="acoes-tabela">
                <button class="botao-icone editar" data-id="${responsavel.id}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="botao-icone excluir" data-id="${responsavel.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </span>
        `;
        tabelaResponsaveis.appendChild(row);
    });

    // Formatar telefone para exibição
    function formatarTelefone(telefone) {
        return `(${telefone.substring(0, 2)}) ${telefone.substring(2, 7)}-${telefone.substring(7)}`;
    }

    // Manipular envio do formulário
    document.getElementById('form-responsavel').addEventListener('submit', function(e) {
        e.preventDefault();
        // Aqui você faria a chamada para a API para salvar o responsável
        alert('Responsável salvo com sucesso!');
        // Atualizar a tabela após salvar
    });

    // Adicionar máscara de telefone
    document.getElementById('telefone-responsavel').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        e.target.value = value;
    });
});
