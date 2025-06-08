document.addEventListener("DOMContentLoaded", function() {
  const userInfoSection = document.getElementById('userInfoSection');
  const userName = document.getElementById('userName');
  const userEmail = document.getElementById('userEmail');
  const userRole = document.getElementById('userRole');
  const userProfileImage = document.getElementById('userProfileImage');
  const userJson = localStorage.getItem('user');
  if (userJson) {
    const user = JSON.parse(userJson);
    userName.textContent = user.name || "Потребител";
    userEmail.textContent = user.email || "";
    userRole.textContent = user.role || "";
    if (user.image) {
      userProfileImage.src = user.image;
    }
    userInfoSection.style.display = "flex";
  }
});