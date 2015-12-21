
function hideContent() {
	document.getElementsByTagName('html')[0].className = "under-construction"
}


if (location.search !== '?demo=true') {
	hideContent();
}
