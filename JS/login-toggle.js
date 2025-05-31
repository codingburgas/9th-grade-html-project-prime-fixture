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