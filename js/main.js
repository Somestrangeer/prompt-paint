document.addEventListener('DOMContentLoaded', function() {
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
    
    // Проверяем сохраненную тему или системные настройки
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Устанавливаем начальную тему
    root.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    console.log('Initial theme:', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = root.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Добавляем класс для анимации
            root.classList.add('theme-transitioning');
            
            console.log('Switching theme from', currentTheme, 'to', newTheme);
            root.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            
            // Удаляем класс после завершения анимации
            setTimeout(() => {
                root.classList.remove('theme-transitioning');
            }, 1000); // Время должно быть больше общей длительности анимации
        });
    }

    // Обработка кнопки скачивания
    const downloadButton = document.getElementById('downloadButton');

    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            if (!this.disabled) {
                console.log('Запрос на скачивание файла');
                // Здесь будет логика скачивания файла
            }
        });
    }

    function updateThemeIcon(theme) {
        if (themeToggle) {
            themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
            console.log('Theme icon updated for', theme);
        }
    }
});
