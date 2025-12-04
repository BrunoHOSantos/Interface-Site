// 1. Aplicar tema salvo ao carregar a página
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
}

// 2. Alternar tema ao clicar no botão
document.getElementById('toggleTheme').addEventListener('click', function() {
    document.documentElement.classList.toggle('dark');

    // Salvar preferencia
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
