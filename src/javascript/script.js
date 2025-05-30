// Impede o navegador de restaurar automaticamente a posição de scroll ao recarregar a página
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Rola para o topo da página quando carrega
window.scrollTo(0, 0);

// Executa quando o documento estiver totalmente carregado
$(document).ready(function () {
    // Botão de menu mobile - alterna a classe 'active' no menu e o ícone
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Seleciona todas as seções e itens de navegação
    const sections = $('section');
    const navItems = $('.nav-item');

    // Efeitos durante o scroll da página
    $(window).on('scroll', function () {
        const header = $('header');
        const headerHeight = header.outerHeight();
        // Calcula a posição do scroll + altura do header
        const scrollPosition = $(window).scrollTop() + headerHeight;

        // Índice da seção ativa (começa com 0)
        let activeSectionIndex = 0;

        // Adiciona/remove sombra do header baseado na posição do scroll
        if ($(window).scrollTop() <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        // Verifica em qual seção o scroll está
        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top;
            const sectionBottom = sectionTop + section.outerHeight();

            // Se a posição do scroll estiver dentro desta seção
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false; // Sai do loop
            }
        })

        // Atualiza o item de navegação ativo
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // Animação para o banner (vem da direita)
    ScrollReveal().reveal('#banner', {
        origin: 'right',
        duration: 2600,
        distance: '20%'
    });

    // Animação para a seção CTA (vem da esquerda)
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2600,
        distance: '20%'
    });

    // Animação para as propostas (vem da esquerda)
    ScrollReveal().reveal('.proposal-card', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
        easing: 'ease'
    });

    // Animação para a foto (vem da esquerda)
    ScrollReveal().reveal('#profile-image', {
        origin: 'left',
        duration: 2600,
        distance: '30%',
        easing: 'ease'
    })

    // Animação para os depoimentos (vem da direita)
    ScrollReveal().reveal('.about-card', {
        origin: 'right',
        duration: 2600,
        distance: '20%',
        easing: 'ease'
    })
});

// Sincroniza o clique no botão com o checkbox do coração
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('vote-btn');
    const checkbox = document.getElementById('vote-heart');

    if (btn && checkbox) {
        btn.addEventListener('click', function (e) {
            // Evita conflito quando clica diretamente no checkbox
            if (e.target === checkbox) return;

            // Alterna o estado do checkbox
            checkbox.checked = !checkbox.checked;
            e.preventDefault();
        });
    }
});