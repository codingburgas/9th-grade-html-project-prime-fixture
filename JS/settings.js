window.addEventListener('DOMContentLoaded', function() {
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
        document.getElementById('profileImagePreview').src = "../media/default-profile.png";
    }

    document.getElementById('profileImage').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;
        if (file.size > 1024 * 1024) { 
            if (typeof pfShowPopup === "function") {
                pfShowPopup('Снимката трябва да е под 1MB!', 'Грешка');
            } else {
                alert('Снимката трябва да е под 1MB!');
            }
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
                if (typeof pfShowPopup === "function") {
                    pfShowPopup('Снимката е твърде голяма или localStorage е пълен!', 'Грешка');
                } else {
                    alert('Снимката е твърде голяма или localStorage е пълен!');
                }
            }
        };
        reader.readAsDataURL(file);
    });

    document.querySelector('.profile-settings').addEventListener('submit', function(e) {
        e.preventDefault();
        let user = JSON.parse(localStorage.getItem('user')) || {};
        user.email = document.getElementById('profileEmail').value;
        user.phone = document.getElementById('profilePhone').value;
        localStorage.setItem('user', JSON.stringify(user));
        if (typeof pfShowPopup === "function") {
            pfShowPopup('Промените са запазени!', 'Успех');
        } else {
            alert('Промените са запазени!');
        }
    });

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