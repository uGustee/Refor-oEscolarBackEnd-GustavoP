document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.querySelector('.theme-switcher');
    const body = document.body;
    
    // Verificar preferência do usuário
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    // Aplicar tema salvo ou preferência do sistema
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else if (prefersDark) {
        body.classList.add('dark-theme');
    }
    
    // Atualizar ícone do botão
    updateThemeIcon();
    
    // Alternar tema
    themeSwitcher.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        // Salvar preferência
        const theme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
        localStorage.setItem('theme', theme);
        
        // Atualizar ícone
        updateThemeIcon();
    });
    
    function updateThemeIcon() {
        const icon = themeSwitcher.querySelector('i');
        if (body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            themeSwitcher.setAttribute('aria-label', 'Alternar para tema claro');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            themeSwitcher.setAttribute('aria-label', 'Alternar para tema escuro');
        }
    }
});
