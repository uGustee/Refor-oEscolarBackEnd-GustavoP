document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        navMenu.classList.toggle('active');
    });
    
    // Modal de confirmação
    const confirmationModal = document.getElementById('confirmation-modal');
    const cancelBtn = document.getElementById('cancel-btn');
    const confirmBtn = document.getElementById('confirm-btn');
    
    // Exemplo: abrir modal ao clicar em um botão de deletar
    document.querySelectorAll('[data-action="delete"]').forEach(btn => {
        btn.addEventListener('click', function() {
            confirmationModal.setAttribute('aria-hidden', 'false');
        });
    });
    
    cancelBtn.addEventListener('click', function() {
        confirmationModal.setAttribute('aria-hidden', 'true');
    });
    
    confirmBtn.addEventListener('click', function() {
        // Lógica para confirmar ação
        confirmationModal.setAttribute('aria-hidden', 'true');
        showToast('Ação concluída com sucesso!');
    });
    
    // Feedback toast
    function showToast(message) {
        const toast = document.getElementById('feedback-toast');
        const toastContent = toast.querySelector('p');
        
        toastContent.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
    
    // Exemplo: mostrar toast ao adicionar aluno
    const addAlunoBtn = document.getElementById('add-aluno');
    if (addAlunoBtn) {
        addAlunoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showToast('Aluno adicionado com sucesso!');
        });
    }
    
    // Acessibilidade - foco visível
    document.addEventListener('keyup', function(e) {
        if (e.key === 'Tab') {
            document.documentElement.classList.add('keyboard-focus');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.documentElement.classList.remove('keyboard-focus');
    });
});
