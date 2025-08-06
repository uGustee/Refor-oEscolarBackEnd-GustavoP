document.addEventListener('DOMContentLoaded', function() {
    const alternadorTema = document.querySelector('.alternador-tema');
    if(alternadorTema) {
        alternadorTema.addEventListener('click', () => {
            document.body.classList.toggle('modo-escuro');
            localStorage.setItem('temaEscuro', document.body.classList.contains('modo-escuro'));
            
            const iconeTema = alternadorTema.querySelector('i');
            if(document.body.classList.contains('modo-escuro')) {
                iconeTema.classList.replace('fa-moon', 'fa-sun');
            } else {
                iconeTema.classList.replace('fa-sun', 'fa-moon');
            }
        });
        
        if(localStorage.getItem('temaEscuro') === 'true') {
            document.body.classList.add('modo-escuro');
            alternadorTema.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        }
    }

    const botaoMenu = document.querySelector('.botao-menu-mobile');
    const menuMobile = document.getElementById('menu-principal');
    
    if(botaoMenu && menuMobile) {
        botaoMenu.addEventListener('click', () => {
            const estaAberto = menuMobile.style.display === 'block';
            menuMobile.style.display = estaAberto ? 'none' : 'block';
            botaoMenu.setAttribute('aria-expanded', !estaAberto);
            
            // Animação do ícone
            const icone = botaoMenu.querySelector('i');
            icone.classList.toggle('fa-times');
            icone.classList.toggle('fa-bars');
        });
    }

    const linksNavegacao = document.querySelectorAll('.nav-links a');
    const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
    
    linksNavegacao.forEach(link => {
        const linkPagina = link.getAttribute('href');
        
        if(paginaAtual === linkPagina || 
           (paginaAtual === '' && linkPagina === 'index.html')) {
            link.classList.add('ativo');
            link.setAttribute('aria-current', 'page');
        }
        
        link.addEventListener('click', () => {
            if(window.innerWidth <= 768 && menuMobile) {
                menuMobile.style.display = 'none';
                botaoMenu.querySelector('i').classList.replace('fa-times', 'fa-bars');
                botaoMenu.setAttribute('aria-expanded', 'false');
            }
        });
    });

    function carregarDadosUsuario() {
        const usuario = {
            nome: "Professor",
            avatar: "images/avatar.png"
        };
        
        const elementoUsuario = document.querySelector('.user-menu span');
        const avatarUsuario = document.querySelector('.user-menu img');
        
        if(elementoUsuario) elementoUsuario.textContent = usuario.nome;
        if(avatarUsuario && usuario.avatar) avatarUsuario.src = usuario.avatar;
    }

    carregarDadosUsuario();

    window.addEventListener('resize', function() {
        if(window.innerWidth > 768 && menuMobile) {
            menuMobile.style.display = '';
            const icone = botaoMenu.querySelector('i');
            icone.classList.remove('fa-times');
            icone.classList.add('fa-bars');
        }
    });
});
