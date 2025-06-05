function pfShowPopup(message, title = "Съобщение") {
    document.querySelectorAll('.pfPopupBg').forEach(e => e.remove());
    const bg = document.createElement('div');
    bg.className = 'pfPopupBg';
    bg.innerHTML = `
        <div class="pfPopup">
            <div class="pfPopupTitle">${title}</div>
            <div class="pfPopupMsg">${message}</div>
            <button class="pfPopupBtn">OK</button>
        </div>
    `;
    document.body.appendChild(bg);
    bg.querySelector('.pfPopupBtn').onclick = () => bg.remove();
    bg.onclick = e => { if (e.target === bg) bg.remove(); };
}

document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('regUsername').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const password = document.getElementById('regPassword').value;
            const role = registerForm.querySelector('input[name="role"]:checked')?.value;
            if (!username || !email || !password || !role) {
                pfShowPopup('Попълни всички полета!', 'Грешка');
                return;
            }
            localStorage.setItem('pfUser', JSON.stringify({ username, email, password, role }));
            // Записваме и за settings.js:
            localStorage.setItem('user', JSON.stringify({
                name: username,
                email: email,
                role: role === 'worker' ? 'Работник' : 'Потребител',
                phone: "",
                image: ""
            }));
            pfShowPopup('Успешна регистрация!', 'Успех');
            registerForm.reset();
            document.getElementById('showLogin').click();
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            const user = JSON.parse(localStorage.getItem('pfUser') || '{}');
            if (user.email === email && user.password === password) {
                pfShowPopup('Успешен вход! Добре дошъл, ' + user.username + '!<br>Роля: ' + (user.role === 'worker' ? 'Работник' : 'Потребител'), 'Успех');
                // Записваме и за settings.js:
                localStorage.setItem('user', JSON.stringify({
                    name: user.username,
                    email: user.email,
                    role: user.role === 'worker' ? 'Работник' : 'Потребител',
                    phone: user.phone || "",
                    image: user.image || ""
                }));
                loginForm.reset();
                document.querySelector('#login').classList.remove('active');
            } else {
                pfShowPopup('Грешен имейл или парола!', 'Грешка');
            }
        });
    }

    const forgotForm = document.getElementById('forgotPasswordForm');
    if (forgotForm) {
        forgotForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('forgotEmail').value.trim();
            if (!email) {
                pfShowPopup('Моля, въведи имейл!', 'Грешка');
                return;
            }
            pfShowPopup('Ще получиш линк за възстановяване на паролата.', 'Изпратено');
            forgotForm.reset();
            document.getElementById('backToLogin').click();
        });
    }
});