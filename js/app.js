const toggleButton = document.querySelector("#sidebarCollapse")
const customMenu = document.querySelector(".custom-menu")

const sidebar = document.querySelector("#sidebar");

function toggleSideBar() {
    sidebar.classList.toggle("active")
    customMenu.classList.toggle("right-move")
}

toggleButton.addEventListener("click", toggleSideBar)


