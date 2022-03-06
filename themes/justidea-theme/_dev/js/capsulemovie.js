// staywarm movie poup
jQuery(document).on('ready', function () {
	jQuery('.staywarm-movie__btn').on('click', function (e) {
		e.preventDefault();
		jQuery('.staywarm-movie__pop').addClass('staywarm-movie__pop--open');
		jQuery('.staywarm-movie__overlay').addClass('staywarm-movie__overlay--open');
	});

	jQuery('.staywarm-movie__overlay').on('click', function (e) {
		e.preventDefault();
		jQuery('.staywarm-movie__pop').removeClass('staywarm-movie__pop--open');
		jQuery('.staywarm-movie__overlay').removeClass('staywarm-movie__overlay--open');
	});
});

// YouTube asynchronous embeded wideo
jQuery(document).on('ready', function () {
	let youtube = document.querySelector(".youtube-preview");
	let iframeContainer = document.querySelector(".youtube-container");
	
	if (youtube && iframeContainer) {
		youtube.addEventListener("click", function () {
			console.log('gone2');
			const iframe = document.createElement("iframe");
			iframe.className = 'embed-responsive-item'
			iframe.setAttribute("frameborder", "0");
			iframe.setAttribute("allowfullscreen", "");
			iframe.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
			iframe.setAttribute("width", "100%")
			iframe.setAttribute(
				"src",
				`https://www.youtube.com/embed/Rl9_1d63kv8?playlist=Rl9_1d63kv8&amp;rel=0&amp;controls=1&amp;showinfo=0&amp;showsearch=0&amp;autoplay=0&amp;mute=0&amp;loop=1&amp;modestbranding=1&amp;vq=hd1080`
			);
			iframeContainer.innerHTML = '';
			iframeContainer.classList.add = '';
			iframeContainer.appendChild(iframe);
	
			youtube.remove();
			})
		}
	});