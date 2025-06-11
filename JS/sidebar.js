const sidebar = document.querySelector(".sidebar");
const sideBarToggler = document.querySelector(".sidebarToggler");

    const isCollapsed = localStorage.getItem("sidebar-collapsed") === "true";

    if (isCollapsed) {
        sidebar.classList.add("no-transition");  
        sidebar.classList.add("collapsed");      
    }


    requestAnimationFrame(() => {
        sidebar.classList.remove("no-transition");
    });



sideBarToggler.addEventListener("click", () => {

    sidebar.classList.toggle("collapsed");

    const isNowCollapsed = sidebar.classList.contains("collapsed");
    localStorage.setItem("sidebar-collapsed", isNowCollapsed);
});


const themeToggle = document.querySelector('.themeSwitch input');
const currentTheme = localStorage.getItem('theme');


if (currentTheme === 'whiteTheme') {
    document.body.classList.add('whiteTheme');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('whiteTheme');
        localStorage.setItem('theme', 'whiteTheme');
    } else {
        document.body.classList.remove('whiteTheme');
        localStorage.setItem('theme', '');
    }
    

    document.body.style.animation = 'none';
    requestAnimationFrame(() => {
        document.body.style.animation = '';
    });
});

document.querySelectorAll('.themeToggleBtn .nav-icon').forEach(icon => {
    icon.style.cursor = 'pointer';
    icon.addEventListener('click', () => {
        themeToggle.click(); 
    });
});