document.addEventListener('DOMContentLoaded', function() {
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
    if(usuario.avatar) {
        avatarImg.src = usuario.avatar;
    }

    const botaoMenu = document.querySelector('.botao-menu-mobile');
    const menu = document.getElementById('menu-principal');

    botaoMenu.addEventListener('click', function() {
        const estaAberto = menu.style.display === 'block';
        menu.style.display = estaAberto ? 'none' : 'block';
        this.setAttribute('aria-expanded', !estaAberto);
    });

    const alternadorTema = document.querySelector('.alternador-tema');
    alternadorTema.addEventListener('click', function() {
        document.body.classList.toggle('modo-escuro');
        const icone = this.querySelector('i');
        icone.classList.toggle('fa-sun');
        icone.classList.toggle('fa-moon');
    });

    document.querySelectorAll('.botao-continuar').forEach(botao => {
        botao.addEventListener('click', function() {
            window.location.href = 'conteudos.html';
        });
    });
});
