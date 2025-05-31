document.addEventListener('DOMContentLoaded', function () {
   
    const accountBtns = document.querySelectorAll('.accountBtn');
    const loginSection = document.getElementById('login');
    const closeBtn = document.querySelector('.close-login-btn');
    accountBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            loginSection.classList.add('active');
        });
    });
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            loginSection.classList.remove('active');
        });
    }

    
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    if (showRegister && showLogin && loginForm && registerForm) {
        showRegister.addEventListener('click', function(e) {
            e.preventDefault();
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        });
        showLogin.addEventListener('click', function(e) {
            e.preventDefault();
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const forgotBox = document.getElementById('forgot-password-box');
    const forgotLink = document.querySelector('.remember-forgot a');
    const backToLogin = document.getElementById('back-to-login');

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