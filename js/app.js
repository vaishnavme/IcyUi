// Responsive sidebar
const toggleButton = document.getElementById("toggle-button");
const toggleContent = document.getElementById("sidebar-content");

toggleButton.addEventListener("click", () => {
	document.body.classList.toggle("active");
	toggleContent.classList.toggle("active");
});

// Active section link
let mainNavLinks = document.querySelectorAll("#sidebar-content li a");
let mainSection = document.querySelectorAll("main section")

window.addEventListener("scroll", event => {
	let fromTop = window.scrollY;

	mainNavLinks.forEach(link => {
		let section = document.querySelector(link.hash);

		if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
			link.classList.add("current");
		} else {
			link.classList.remove("current");
		}
	})
})