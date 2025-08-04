// Inicialização do AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Inicializa os componentes
    initMobileMenu();
    initProjetosFiltro();
    initProjetosModals();
});

// Menu Mobile
function initMobileMenu() {
    const menuBtn = document.querySelector('.menu-mobile-btn');
    const menuOverlay = document.querySelector('.menu-mobile-overlay');

    if (menuBtn && menuOverlay) {
        menuBtn.addEventListener('click', function() {
            menuOverlay.classList.toggle('active');
            const icon = this.querySelector('i');
            if (menuOverlay.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

// Filtro de Projetos
function initProjetosFiltro() {
    const filterButtons = document.querySelectorAll('.filtro-btn');
    const projectCards = document.querySelectorAll('.projeto-card');

    // Ativa o filtro "todos" por padrão
    const todosButton = document.querySelector('[data-filter="todos"]');
    if (todosButton) {
        todosButton.classList.add('active');
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe active ao botão clicado
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                // Primeiro, aplicamos a animação de saída
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';

                setTimeout(() => {
                    if (filterValue === 'todos' || card.getAttribute('data-filter') === filterValue) {
                        card.style.display = 'block';
                        // Após definir display block, forçamos um reflow
                        void card.offsetWidth;
                        // Então aplicamos a animação de entrada
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    } else {
                        card.style.display = 'none';
                    }
                }, 300);
            });
        });
    });
}

// Modais dos Projetos
function initProjetosModals() {
    const projetosDetalhes = {
        projeto1: {
            titulo: 'Janelas Residenciais',
            descricao: 'Projeto de janelas em alumínio para residência de alto padrão, com foco em eficiência energética e design contemporâneo.',
            imagem: 'PHOTOS/Janela.jpeg',
            cliente: 'Residência Silva',
            localizacao: 'São Paulo, SP',
            ano: '2023',
            categoria: 'Residencial'
        },
        projeto2: {
            titulo: 'Fachada Comercial',
            descricao: 'Desenvolvimento e instalação de fachada comercial moderna, utilizando esquadrias de alumínio e vidro temperado.',
            imagem: 'PHOTOS/JANELA4.jpg',
            cliente: 'Shopping Center Plaza',
            localizacao: 'Campinas, SP',
            ano: '2023',
            categoria: 'Comercial'
        },
        projeto3: {
            titulo: 'Guarda-Corpo Industrial',
            descricao: 'Projeto e instalação de guarda-corpo em alumínio e vidro para área industrial, priorizando segurança e durabilidade.',
            imagem: 'PHOTOS/GUARDACORPO1.jpg',
            cliente: 'Indústria Tech',
            localizacao: 'Guarulhos, SP',
            ano: '2023',
            categoria: 'Industrial'
        },
        projeto4: {
            titulo: 'Portas Residenciais',
            descricao: 'Conjunto de portas em alumínio para condomínio residencial, com design moderno e alta resistência.',
            imagem: 'PHOTOS/PORTA4.jpg',
            cliente: 'Condomínio Park View',
            localizacao: 'São Paulo, SP',
            ano: '2023',
            categoria: 'Residencial'
        },
        projeto5: {
            titulo: 'Portas Comerciais',
            descricao: 'Sistema de portas em alumínio para centro empresarial, combinando estética e funcionalidade.',
            imagem: 'PHOTOS/PORTA7.jpg',
            cliente: 'Centro Empresarial Business',
            localizacao: 'São Paulo, SP',
            ano: '2023',
            categoria: 'Comercial'
        },
        projeto6: {
            titulo: 'Portas Industriais',
            descricao: 'Portas industriais em alumínio com sistema de segurança integrado para complexo logístico.',
            imagem: 'PHOTOS/PORTA7.jpg',
            cliente: 'Logística Express',
            localizacao: 'Barueri, SP',
            ano: '2023',
            categoria: 'Industrial'
        }
    };

    const modal = document.querySelector('.modal');
    const modalTitle = modal?.querySelector('.modal-title');
    const modalImage = modal?.querySelector('.modal-image img');
    const modalDescription = modal?.querySelector('.modal-description p');
    const modalClient = modal?.querySelector('.detail-client');
    const modalLocation = modal?.querySelector('.detail-location');
    const modalYear = modal?.querySelector('.detail-year');
    const modalCategory = modal?.querySelector('.detail-category');
    const closeButton = modal?.querySelector('.close-modal');

    // Adiciona evento de clique aos cards de projeto
    document.querySelectorAll('.projeto-card').forEach(card => {
        card.addEventListener('click', () => {
            const projetoId = card.getAttribute('data-projeto');
            const projeto = projetosDetalhes[projetoId];

            if (projeto && modal) {
                modalTitle.textContent = projeto.titulo;
                modalImage.src = projeto.imagem;
                modalImage.alt = projeto.titulo;
                modalDescription.textContent = projeto.descricao;
                modalClient.textContent = projeto.cliente;
                modalLocation.textContent = projeto.localizacao;
                modalYear.textContent = projeto.ano;
                modalCategory.textContent = projeto.categoria;

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Fecha o modal
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Fecha o modal ao clicar fora dele
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Função para alternar o menu mobile
function toggleMenu() {
    const menuOverlay = document.querySelector('.menu-mobile-overlay');
    const menuBtn = document.querySelector('.menu-mobile-btn i');

    if (menuOverlay && menuBtn) {
        menuOverlay.classList.toggle('active');
        menuBtn.classList.toggle('fa-bars');
        menuBtn.classList.toggle('fa-times');
    }
}
