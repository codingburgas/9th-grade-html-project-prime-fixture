function updateDashboard() {
  const userInfoSection = document.getElementById('userInfoSection');
  const userName = document.getElementById('userName');
  const userEmail = document.getElementById('userEmail');
  const userRole = document.getElementById('userRole');
  const userProfileImage = document.getElementById('userProfileImage');
  const userJson = localStorage.getItem('user');

  if (userInfoSection) userInfoSection.style.display = "flex"; 

  if (userJson) {
    const user = JSON.parse(userJson);
    if (userName) userName.textContent = user.name || "Потребител";
    if (userEmail) userEmail.textContent = user.email || "";
    if (userRole) userRole.textContent = user.role || "";
    if (user.image && userProfileImage) {
      userProfileImage.src = user.image;
    } else if (userProfileImage) {
      userProfileImage.src = "media/default-profile.png";
    }
  } else {
    if (userName) userName.textContent = "";
    if (userEmail) userEmail.textContent = "";
    if (userRole) userRole.textContent = "";
    if (userProfileImage) userProfileImage.src = "media/default-profile.png";
  }
}

document.addEventListener("DOMContentLoaded", updateDashboard);

document.addEventListener('DOMContentLoaded', function () {
  const logoutBtns = document.querySelectorAll('.logoutBtn');
  logoutBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      localStorage.removeItem('user');
      localStorage.removeItem('pfUser');
      updateDashboard();
    });
  });
});

window.updateDashboard = updateDashboard;