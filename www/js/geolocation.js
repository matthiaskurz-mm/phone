
function onDeviceReady() {
	alert('333');
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}


$(function () {
	document.addEventListener("deviceready", onDeviceReady, true);
})


// onSuccess Geolocation

function onSuccess(position) {
	var element = document.getElementById('geolocation');
	element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
		'Longitude: ' + position.coords.longitude + '<br />'

}

// onError Callback receives a PositionError object
//
function onError(error) {
	alert('code: ' + error.code + '\n' +
		'message: ' + error.message + '\n');
}
