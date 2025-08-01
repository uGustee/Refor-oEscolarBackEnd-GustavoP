class GerenciadorResponsaveis {
    constructor() {
        this.responsaveis = [];
        this.carregarElementos();
        this.carregarDadosIniciais();
        this.configurarEventos();
    }

    carregarElementos() {
        this.formulario = document.getElementById('form-responsavel');
        this.tabela = document.querySelector('.tabela-responsaveis');
    }

    carregarDadosIniciais() {
        this.responsaveis = [
            { id: 1, nome: "Carlos Silva", email: "carlos@email.com", telefone: "11987654321", alunoId: 1 }
        ];
        this.atualizarTabela();
    }

    configurarEventos() {
        if(this.formulario) {
            this.formulario.addEventListener('submit', (e) => {
                e.preventDefault();
                this.salvarResponsavel();
            });
        }
    }

    salvarResponsavel() {
        const dados = {
            nome: document.getElementById('nome-responsavel').value,
            email: document.getElementById('email-responsavel').value,
            telefone: document.getElementById('telefone-responsavel').value,
            alunoId: document.getElementById('aluno-vinculado').value
        };
        this.responsaveis.push({...dados, id: Date.now()});
        this.atualizarTabela();
        this.formulario.reset();
    }

    atualizarTabela() {
        this.tabela.innerHTML = '';
        this.responsaveis.forEach(resp => {
            const linha = document.createElement('div');
            linha.className = 'linha-tabela';
            linha.innerHTML = `
                <span>${resp.nome}</span>
                <span>${resp.email}</span>
                <span>${this.formatarTelefone(resp.telefone)}</span>
                <span>Aluno ${resp.alunoId}</span>
                <span class="acoes-tabela">
                    <button class="botao-icone editar" data-id="${resp.id}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="botao-icone excluir" data-id="${resp.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </span>
            `;
            this.tabela.appendChild(linha);
        });
    }

    formatarTelefone(telefone) {
        return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
}

new GerenciadorResponsaveis();
