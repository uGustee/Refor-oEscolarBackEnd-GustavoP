// Configurações globais
function carregarDadosUsuario() {
    const usuario = {
        nome: "João Silva",
        tipo: "Aluno",
        pontos: 1250,
        avatar: "images/avatar.png"
    };
    
    document.querySelectorAll('.nome-usuario').forEach(el => {
        el.textContent = usuario.nome;
    });
    
    document.querySelector('.tipo-usuario').textContent = usuario.tipo;
    document.querySelector('.pontuacao-total span').textContent = usuario.pontos.toLocaleString();
    
    const avatarImg = document.querySelector('.avatar img');
    if(usuario.avatar) avatarImg.src = usuario.avatar;
}

// Menu Mobile
function configurarMenuMobile() {
    const botaoMenu = document.querySelector('.botao-menu-mobile');
    const menu = document.getElementById('menu-principal');
    
    if(botaoMenu && menu) {
        botaoMenu.addEventListener('click', () => {
            const estaAberto = menu.style.display === 'block';
            menu.style.display = estaAberto ? 'none' : 'block';
        });
    }
}

// Tema Escuro
function configurarTema() {
    const alternador = document.querySelector('.alternador-tema');
    if(alternador) {
        alternador.addEventListener('click', () => {
            document.body.classList.toggle('modo-escuro');
        });
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    carregarDadosUsuario();
    configurarMenuMobile();
    configurarTema();
});
