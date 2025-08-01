class GerenciadorUtilhas {
    constructor() {
        this.utilhas = [
            {
                id: 1,
                nome: "Calculadora Científica",
                disciplina: "Matemática",
                nivel: "Intermediário",
                status: "Ativo"
            }
        ];
        this.init();
    }

    init() {
        this.carregarUtilhas();
        this.configurarFiltros();
    }

    carregarUtilhas() {
        const lista = document.querySelector('.lista-utilhas');
        lista.innerHTML = this.utilhas.map(utilha => `
            <div class="cartao-utilha" data-id="${utilha.id}">
                <h3>${utilha.nome}</h3>
                <p><strong>Disciplina:</strong> ${utilha.disciplina}</p>
                <p><strong>Nível:</strong> ${utilha.nivel}</p>
                <span class="status ${utilha.status.toLowerCase()}">${utilha.status}</span>
            </div>
        `).join('');
    }

    configurarFiltros() {
        document.getElementById('filtro-disciplina').addEventListener('change', () => {
            this.aplicarFiltros();
        });
        
        document.getElementById('filtro-nivel').addEventListener('change', () => {
            this.aplicarFiltros();
        });
    }

    aplicarFiltros() {
        // Lógica de filtragem aqui
    }
}

new GerenciadorUtilhas();
