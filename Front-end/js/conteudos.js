document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const modalConteudo = document.getElementById('modal-conteudo');
    const formConteudo = document.getElementById('form-conteudo');
    const btnAbrirModal = document.getElementById('abrir-modal-conteudo');
    const gradeConteudos = document.querySelector('.grade-conteudos');
    
    // Dados simulados (substituir por API real)
    const disciplinas = [
        { id: 1, nome: "Matemática" },
        { id: 2, nome: "Português" }
    ];
    
    const conteudos = [
        {
            id: 1,
            titulo: "Introdução às Frações",
            disciplina: 1,
            tipo: "video",
            url: "https://youtube.com/embed/xyz",
            descricao: "Aprenda os conceitos básicos de frações"
        }
    ];

    // Preencher dropdown de disciplinas
    const selectDisciplina = document.getElementById('disciplina-conteudo');
    disciplinas.forEach(disciplina => {
        const option = document.createElement('option');
        option.value = disciplina.id;
        option.textContent = disciplina.nome;
        selectDisciplina.appendChild(option);
    });

    // Abrir modal para novo conteúdo
    btnAbrirModal.addEventListener('click', () => {
        document.getElementById('titulo-modal-conteudo').textContent = "Adicionar Novo Conteúdo";
        formConteudo.reset();
        modalConteudo.removeAttribute('hidden');
    });

    // Fechar modal
    document.querySelectorAll('.fechar-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            modalConteudo.setAttribute('hidden', 'true');
        });
    });

    // Carregar conteúdos na grade
    function carregarConteudos() {
        gradeConteudos.innerHTML = '';
        
        conteudos.forEach(conteudo => {
            const disciplina = disciplinas.find(d => d.id === conteudo.disciplina);
            const cartao = document.createElement('div');
            cartao.className = 'cartao-conteudo';
            cartao.innerHTML = `
                <div class="cabecalho-conteudo">
                    <h3>${conteudo.titulo}</h3>
                    <span class="etiqueta ${disciplina.nome.toLowerCase()}">${disciplina.nome}</span>
                </div>
                <div class="corpo-conteudo">
                    <p>${conteudo.descricao || 'Sem descrição'}</p>
                    <p><strong>Tipo:</strong> ${conteudo.tipo}</p>
                </div>
                <div class="rodape-conteudo">
                    <button class="botao-icone editar" data-id="${conteudo.id}">
                        <i class="fas fa-edit"></i> Editar
                    </button>
                    <button class="botao-icone excluir" data-id="${conteudo.id}">
                        <i class="fas fa-trash"></i> Excluir
                    </button>
                </div>
            `;
            gradeConteudos.appendChild(cartao);
        });
    }

    // Manipular envio do formulário
    formConteudo.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const dadosConteudo = {
            titulo: document.getElementById('titulo-conteudo').value,
            disciplina: document.getElementById('disciplina-conteudo').value,
            tipo: document.getElementById('tipo-conteudo').value,
            url: document.getElementById('url-conteudo').value,
            descricao: document.getElementById('descricao-conteudo').value
        };

        // Aqui você faria a chamada para a API
        console.log('Dados para salvar:', dadosConteudo);
        modalConteudo.setAttribute('hidden', 'true');
        carregarConteudos();
    });

    // Filtros
    document.getElementById('filtro-disciplina').addEventListener('change', carregarConteudos);
    document.getElementById('filtro-tipo').addEventListener('change', carregarConteudos);

    // Carregar inicial
    carregarConteudos();
});
