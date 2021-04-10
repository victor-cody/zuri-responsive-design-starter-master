(function () {
	// body
	document.querySelectorAll(".nav-links a").forEach(link => {
			link.addEventListener("click", (e) => {
				e.preventDefault()
				if (!link.dataset.scrollTo) return ;
				const element = link.dataset.scrollTo ;
				document.querySelector(element).scrollIntoView(true);
			})
	})

	function stickItem(element, className, limit) {
		let Y = document.documentElement.scrollTop || document.body.scrollTop
		if (Y > limit) {
			document.querySelector(element).classList.add(className);
		} else {
			document.querySelector(element).classList.remove(className)
		}
	}

	document.addEventListener('scroll', (e) => {
		e.preventDefault();
		stickItem('div.nav-bar', 'sticky', 400)

	});

	const nav_sections = document.querySelectorAll('.section');
	const nav = document.querySelector('.nav-bar');
	let nav_height = nav.scrollTop;

})();
