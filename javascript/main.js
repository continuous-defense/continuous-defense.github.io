
function hideContent() {
	document.getElementsByTagName('html')[0].className = "under-construction"
}

if (!localStorage) {
	hideContent();
} else {

	if (location.search === '?demo=true') {
		localStorage.demo_timestamp = new Date().getTime();
	} else if (location.search === '?demo=false') {
		localStorage.demo_timestamp = 0;
	}

	var timestamp = localStorage.demo_timestamp;
	var now = new Date().getTime();
	var difference = now - timestamp;
	var one_hour = 60000 * 60;

	if (!timestamp || difference > one_hour) {
		hideContent();
	}

}
