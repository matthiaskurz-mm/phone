function GoogleMap(position) {

	this.initialize = function (position) {
		var map = showMap(position);
	}

	var showMap = function (position) {
		var mapOptions = {
			zoom: 4,
			center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

		return map;
	}
}