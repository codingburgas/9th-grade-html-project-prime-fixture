window.addEventListener('DOMContentLoaded', function() {
    // Зареждане на данните на потребителя от localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('profileName').value = user.name || "";
        document.getElementById('profileEmail').value = user.email || "";
        document.getElementById('profileRole').value = user.role || "";
        document.getElementById('profilePhone').value = user.phone || "";
        if (user.image) {
            document.getElementById('profileImagePreview').src = user.image;
        } else {
            document.getElementById('profileImagePreview').src = "../media/default-profile.png";
        }
    } else {
        // Ако няма user, показвай default снимка
        document.getElementById('profileImagePreview').src = "../media/default-profile.png";
    }

    // Качване и визуализация на профилна снимка + запис в localStorage
    document.getElementById('profileImage').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;
        if (file.size > 1024 * 1024) { 
            alert('Снимката трябва да е под 1MB!');
            return;
        }
        const reader = new FileReader();
        reader.onload = function(ev) {
            document.getElementById('profileImagePreview').src = ev.target.result;
            let user = JSON.parse(localStorage.getItem('user')) || {};
            user.image = ev.target.result;
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch (e) {
                alert('Снимката е твърде голяма или localStorage е пълен!');
            }
        };
        reader.readAsDataURL(file);
    });

    // Запазване на имейл и телефон при натискане на бутона
    document.querySelector('.profile-settings').addEventListener('submit', function(e) {
        e.preventDefault();
        let user = JSON.parse(localStorage.getItem('user')) || {};
        user.email = document.getElementById('profileEmail').value;
        user.phone = document.getElementById('profilePhone').value;
        localStorage.setItem('user', JSON.stringify(user));
        alert('Промените са запазени!');
    });

    // Пренасочване към login (index.html) при клик на "Акаунт"
    const goToAccount = document.getElementById('goToAccount');
    if (goToAccount) {
        goToAccount.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('user');
            localStorage.removeItem('pfUser');
            window.location.href = "../index.html";
        });
    }
});