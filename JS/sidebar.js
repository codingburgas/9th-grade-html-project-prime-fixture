const sidebar = document.querySelector(".sidebar");
const sideBarToggler = document.querySelector(".sidebarToggler")

document.addEventListener("DOMContentLoaded", () => {
    const isCollapsed = localStorage.getItem("sidebar-collapsed") === "true";
    if (isCollapsed) {
        sidebar?.classList.add("collapsed");
    }
});


sideBarToggler.addEventListener("click", () => {
    sidebar?.classList.toggle("collapsed");
    const isNowCollapsed = sidebar?.classList.contains("collapsed");
    localStorage.setItem("sidebar-collapsed", isNowCollapsed);
});