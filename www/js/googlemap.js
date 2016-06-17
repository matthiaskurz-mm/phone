function GoogleMap() {

	this.initialize = function (lat, lon) {
		var map = showMap(lat, lon);
	}

	var showMap = function (lat, lon) {
		var mapOptions = {
			zoom: 16,
			center: new google.maps.LatLng(lat, lon),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

		return map;
	}
}