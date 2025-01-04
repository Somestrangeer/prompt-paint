document.addEventListener('DOMContentLoaded', function() {
    // Обработка формы
    const form = document.getElementById('diagramForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Форма отправлена', {
            filename: form.filename.value,
            diagramType: form.diagramType.value,
            prompt: form.prompt.value
        });
    });

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

    themeToggle.addEventListener('click', function() {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        console.log('Switching theme from', currentTheme, 'to', newTheme);
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
        console.log('Theme icon updated for', theme);
    }
});