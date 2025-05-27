const sidebar = document.querySelector(".sidebar");
const sideBarToggler = document.querySelector(".sidebarToggler")

sideBarToggler.addEventListener("click", () => {
    sidebar?.classList.toggle("collapsed");
});