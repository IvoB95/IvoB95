const mediaQuery = window.matchMedia('(min-width: 600px)');

var menuOpen = false;

function openCloseMenu() {
	const openCloseButton = document.getElementById('openCloseButton');
	const nav = document.getElementsByTagName('nav')[0];

	if (menuOpen) {
		nav.classList.remove("open");

	} else {
		nav.classList.add("open");
	}

	menuOpen = !menuOpen;
}

function onSectionButtonClick() {
	if (!mediaQuery.matches) {
		openCloseMenu()
	}
}

mediaQuery
	.onchange = (e) => {
		const nav = document.getElementsByTagName('nav')[0];
		console.log(e)

		if (e.matches || menuOpen) {
			nav.style.display = 'block';
		} else {
			nav.style.display = 'none';
		}
	}