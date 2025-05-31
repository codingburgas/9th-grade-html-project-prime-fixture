function pfShowPopup(message, title = "Съобщение") {
    document.querySelectorAll('.pf-popup-bg').forEach(e => e.remove());
    const bg = document.createElement('div');
    bg.className = 'pf-popup-bg';
    bg.innerHTML = `
        <div class="pf-popup">
            <div class="pf-popup-title">${title}</div>
            <div class="pf-popup-msg">${message}</div>
            <button class="pf-popup-btn">OK</button>
        </div>
    `;
    document.body.appendChild(bg);
    bg.querySelector('.pf-popup-btn').onclick = () => bg.remove();
    bg.onclick = e => { if (e.target === bg) bg.remove(); };
}

document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = registerForm.querySelector('input[type="text"]').value.trim();
            const email = registerForm.querySelector('input[type="email"]').value.trim();
            const password = registerForm.querySelector('input[type="password"]').value;
            const role = registerForm.querySelector('input[name="role"]:checked').value;
            if (!username || !email || !password) {
                pfShowPopup('Попълни всички полета!', 'Грешка');
                return;
            }
            localStorage.setItem('pf-user', JSON.stringify({ username, email, password, role }));
            pfShowPopup('Успешна регистрация!', 'Успех');
            registerForm.reset();
            document.getElementById('show-login').click();
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = loginForm.querySelector('input[type="email"]').value.trim();
            const password = loginForm.querySelector('input[type="password"]').value;
            const user = JSON.parse(localStorage.getItem('pf-user') || '{}');
            if (user.email === email && user.password === password) {
                pfShowPopup('Успешен вход! Добре дошъл, ' + user.username + '!<br>Роля: ' + (user.role === 'worker' ? 'Работник' : 'User'), 'Успех');
                loginForm.reset();
                document.querySelector('#login').classList.remove('active');
            } else {
                pfShowPopup('Грешен имейл или парола!', 'Грешка');
            }
        });
    }
});