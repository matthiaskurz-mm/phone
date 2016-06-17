function GoogleMap() {

	this.initialize = function () {
		var map = showMap();
	}

	var showMap = function () {
		var mapOptions = {
			zoom: 16,
			center: new google.maps.LatLng(50.005406, 8.270459),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

		return map;
	}
}