var MapView = function (session) {
	//console.log(session);

	this.initialize = function () {
		this.$el = $('<div/>');
	};

	this.render = function () {
		this.$el.html(this.template(session));
		return this;
	};

	this.initialize();
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
	// onSuccess Geolocation
	//
	function onSuccess(position) {
		var element = document.getElementById('geolocation');
		element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
			'Longitude: ' + position.coords.longitude + '<br />';
	}

	// onError Callback receives a [PositionError](PositionError/positionError.html) object
	//
	function onError(error) {
		alert('code: ' + error.code + '\n' +
			'message: ' + error.message + '\n');
	}

	var map = new GoogleMap();
	map.initialize();


}