
function hideContent() {
	document.getElementsByTagName('html')[0].style.display = 'none';
}


if (location.search !== '?demo=true') {
	hideContent();
}
