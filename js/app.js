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
console.log(mainSection)

let lastId;

window.addEventListener("scroll", event => {
	let fromTop = window.scrollY;

	mainNavLinks.forEach(link => {
		let section = document.querySelector(link.hash);
		console.log(link);
		if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
			link.classList.add("current");
		} else {
			link.classList.remove("current");
		}
	})
})