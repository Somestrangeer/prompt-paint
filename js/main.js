document.addEventListener('DOMContentLoaded', function() {
    // Анимация при скролле
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-fade-up, .animate-fade-in, .animate-slide-in');
        
        elements.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight - 100;
            
            if (isVisible) {
                element.style.setProperty('--animation-order', index);
                element.style.visibility = 'visible';
                element.style.animationPlayState = 'running';
            }
        });
    };

    // Инициализация анимаций
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Эффект прогиба карточек
    const cards = document.querySelectorAll('.example-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = -(x - centerX) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    });

    // Обработка формы
    const form = document.getElementById('diagramForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Форма отправлена', {
                filename: form.filename.value,
                diagramType: form.diagramType.value,
                prompt: form.prompt.value
            });
            
            // После успешной генерации диаграммы активируем кнопку
            downloadButton.disabled = false;
        });
    }

    // Переключение темы
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    root.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    console.log('Initial theme:', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = root.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            root.classList.add('theme-transitioning');
            
            console.log('Switching theme from', currentTheme, 'to', newTheme);
            root.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            
            setTimeout(() => {
                root.classList.remove('theme-transitioning');
            }, 1000);
        });
    }

    // Обработка кнопки скачивания
    const downloadButton = document.getElementById('downloadButton');

    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            if (!this.disabled) {
                console.log('Запрос на скачивание файла');
            }
        });
    }

    // Copy button functionality
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', function() {
            const code = this.getAttribute('data-code');
            navigator.clipboard.writeText(code).then(() => {
                // Visual feedback
                const originalColor = button.style.color;
                button.style.color = '#8B7355';
                setTimeout(() => {
                    button.style.color = originalColor;
                }, 200);
            });
        });
    });

    function updateThemeIcon(theme) {
        if (themeToggle) {
            themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
            console.log('Theme icon updated for', theme);
        }
    }
});
