function GoogleMap() {

	this.initialize = function () {
		var map = showMap(position);
	}

	var showMap = function () {
		var mapOptions = {
			zoom: 14,
			center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

		return map;
	}
}