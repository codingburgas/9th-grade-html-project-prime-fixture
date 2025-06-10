const sidebar = document.querySelector(".sidebar");
const sideBarToggler = document.querySelector(".sidebarToggler");

    const isCollapsed = localStorage.getItem("sidebar-collapsed") === "true";

    if (isCollapsed) {
        sidebar.classList.add("no-transition");  
        sidebar.classList.add("collapsed");      
    }


    requestAnimationFrame(() => {
        sidebar.classList.remove("no-transition");
    });



sideBarToggler.addEventListener("click", () => {

    sidebar.classList.toggle("collapsed");

    const isNowCollapsed = sidebar.classList.contains("collapsed");
    localStorage.setItem("sidebar-collapsed", isNowCollapsed);
});