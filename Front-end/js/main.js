// main.js atualizado
document.addEventListener('DOMContentLoaded', function() {
    // Gerenciamento de Tema
    const alternadorTema = document.querySelector('.alternador-tema');
    if(alternadorTema) {
        alternadorTema.addEventListener('click', () => {
            document.body.classList.toggle('modo-escuro');
            localStorage.setItem('temaEscuro', document.body.classList.contains('modo-escuro'));
        });
        
        // Verificar preferência salva
        if(localStorage.getItem('temaEscuro') === 'true') {
            document.body.classList.add('modo-escuro');
        }
    }

    // Menu Mobile
    const botaoMenu = document.querySelector('.botao-menu-mobile');
    if(botaoMenu) {
        botaoMenu.addEventListener('click', () => {
            const menu = document.getElementById('menu-principal');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Carregar dados do usuário
    function carregarDadosUsuario() {
        // Implementação existente...
    }

    carregarDadosUsuario();
});
