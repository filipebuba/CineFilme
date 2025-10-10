let autoplayInterval;

function scrollCarousel(id, direction) {
    const carousel = document.getElementById(id);
    const scrollAmount = 600; 
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

function startAutoplay(id) {
    const carousel = document.getElementById(id);
    const scrollAmount = 600;
    autoplayInterval = setInterval(() => {
        // Se chegou ao final, volta ao início
        if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 1) {
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }, 5000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

function handleCardClick(btn) {
    // Exemplo de ação ao clicar no card
    alert(btn.getAttribute('aria-label'));
}

document.addEventListener('DOMContentLoaded', () => {
    startAutoplay('carousel1');

    const carousel = document.getElementById('carousel1');
    carousel.addEventListener('mouseover', stopAutoplay);
    carousel.addEventListener('mouseout', () => startAutoplay('carousel1'));
    carousel.addEventListener('focusin', stopAutoplay);
    carousel.addEventListener('focusout', () => startAutoplay('carousel1'));

    // Acessibilidade dos botões
    document.querySelector('.nav-button.left').setAttribute('aria-label', 'Anterior');
    document.querySelector('.nav-button.right').setAttribute('aria-label', 'Próximo');
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.style.outline = 'none';
        btn.addEventListener('focus', function() {
            this.style.outline = '2px solid #e50914';
        });
        btn.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});
