document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logoutBtn');
    const accountBtns = document.querySelectorAll('.accountBtn');
    const loginSection = document.getElementById('login');
    const closeBtn = document.querySelector('.closeLoginBtn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('user');
            localStorage.removeItem('pfUser');
            if (loginSection) {
                loginSection.classList.add('active');
            }
        });
    }

    accountBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            if (loginSection) loginSection.classList.add('active');
        });
    });

    if (closeBtn && loginSection) {
        closeBtn.addEventListener('click', function() {
            loginSection.classList.remove('active');
        });
    }

    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const forgotBox = document.getElementById('forgotPasswordBox');
    const forgotLink = document.querySelector('.rememberForgot a');
    const backToLogin = document.getElementById('backToLogin');

    if (showRegister && registerForm && loginForm) {
        showRegister.addEventListener('click', function(e) {
            e.preventDefault();
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
            if (forgotBox) forgotBox.style.display = 'none';
        });
    }
    if (showLogin && registerForm && loginForm) {
        showLogin.addEventListener('click', function(e) {
            e.preventDefault();
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
            if (forgotBox) forgotBox.style.display = 'none';
        });
    }
    if (forgotLink && forgotBox && loginForm && registerForm) {
        forgotLink.addEventListener('click', function(e) {
            e.preventDefault();
            loginForm.style.display = 'none';
            registerForm.style.display = 'none';
            forgotBox.style.display = 'flex';
        });
    }
    if (backToLogin && forgotBox && loginForm) {
        backToLogin.addEventListener('click', function(e) {
            e.preventDefault();
            forgotBox.style.display = 'none';
            loginForm.style.display = 'block';
        });
    }
});