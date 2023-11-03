document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Fecha todos os outros itens do acordeão
            buttons.forEach((btn, idx) => {
                if (idx !== index) {
                    btn.setAttribute('aria-expanded', 'false');
                }
            });

            // Alterna o estado do item do acordeão atual
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!isExpanded));
        });
    });
});

const box = document.querySelector('.floating-box') as HTMLElement;

box.addEventListener('click', () => {
    box.classList.toggle('clicked');
});

box.addEventListener('mouseenter', () => {
    box.style.transform = 'scale(1.1)';
});

box.addEventListener('mouseleave', () => {
    if (!box.classList.contains('clicked')) {
        box.style.transform = 'scale(1)';
    }
});