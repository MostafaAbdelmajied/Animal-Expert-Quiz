const themeToggle = document.getElementById('themeToggle');

// Load saved theme
if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.add('light-mode');
}

// Toggle function
themeToggle.addEventListener('click', () => {
    if(document.body.classList.contains('dark-mode')){
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("sidebarToggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("show");
    });
}

document.addEventListener("click", (e) => {
    if (
        sidebar.classList.contains("show") &&
        !sidebar.contains(e.target) &&
        !toggleBtn.contains(e.target)
    ) {
        sidebar.classList.remove("show");
    }
});

