/*

 $(document).ready(function () {

	$(".control-item").click(function () {
		$(".table-view-cell").hide();
		$("#" + $(this).data("toggle")).show();
		$(".control-item").removeClass("active");
		$(this).addClass("active");
		var mapcontainer = document.getElementById('mapcontainer');
		mapcontainer.innerHTML = '<img src="http://maps.googleapis.com/maps/api/staticmap?center=' + $(this).data("lat") + ',' + $(this).data("lon") + '&zoom=16&size=300x300">';
		console.log(mapcontainer);
	});

});
 */
var router = (function () {

	"use strict";

	var routes = [];

	function addRoute(route, handler) {
		routes.push({parts: route.split('/'), handler: handler});
	}

	function load(route) {
		window.location.hash = route;
	}

	function start() {

		var path = window.location.hash.substr(1),
			parts = path.split('/'),
			partsLength = parts.length;

		for (var i = 0; i < routes.length; i++) {
			var route = routes[i];
			if (route.parts.length === partsLength) {
				var params = [];
				for (var j = 0; j < partsLength; j++) {
					if (route.parts[j].substr(0, 1) === ':') {
						params.push(parts[j]);
					} else if (route.parts[j] !== parts[j]) {
						break;
					}
				}
				if (j === partsLength) {
					route.handler.apply(undefined, params);
					return;
				}
			}
		}
	}

	$(window).on('hashchange', start);

	return {
		addRoute: addRoute,
		load: load,
		start: start
	};

}());