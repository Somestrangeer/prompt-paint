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
        // Здесь будет логика отправки на сервер
    });

    // Переключение темы
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme') || 'dark';
    root.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', function() {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
    }
});