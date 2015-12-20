var secret_sequence = [49, 57, 49, 49];
var keys_pressed = [];


function showContent() {
	document.getElementById('hide-everything').remove();
}

document.addEventListener('keypress', function(e) {

	if (e.keyCode === 13) {
		var is_authorized = secret_sequence.join('|') === keys_pressed.join('|');
		console.log(secret_sequence.join('|'), keys_pressed.join('|'))
		keys_pressed = [];

		console.log(is_authorized)
		if (is_authorized) {
			showContent();
		}
	} else {
		keys_pressed.push(e.keyCode);
	}
});
