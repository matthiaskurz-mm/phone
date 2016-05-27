// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {


	/* ---------------------------------- Local Variables ---------------------------------- */
	HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
	SessionListView.prototype.template = Handlebars.compile($("#session-list-tpl").html());
	SessionView.prototype.template = Handlebars.compile($("#session-tpl").html());

	var service = new ConferenceService();
	var slider = new PageSlider($('body'));

	service.initialize().done(function () {
		router.addRoute('', function () {
			console.log('empty');
			slider.slidePage(new HomeView(service).render().$el);
		});

		router.addRoute('sessions/:id', function (id) {
			console.log('details');
			service.findById(parseInt(id)).done(function (session) {
				slider.slidePage(new SessionView(session).render().$el);
			});
		});

		router.start();
	});

	/* --------------------------------- Event Registration -------------------------------- */
	document.addEventListener('deviceready', function () {
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
		FastClick.attach(document.body);
		if (navigator.notification) { // Override default HTML alert with native dialog
			window.alert = function (message) {
				navigator.notification.alert(
					message,    // message
					null,       // callback
					"Workshop", // title
					'OK'        // buttonName
				);
			};
		}

	}, false);

	/* ---------------------------------- Local Functions ---------------------------------- */


// onSuccess Geolocation

	function onSuccess(position) {
		var element = document.getElementById('geolocation');
		element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
			'Longitude: ' + position.coords.longitude + '<br />' +
			'<img src="http://maps.googleapis.com/maps/api/staticmap?center=' + position.coords.latitude + ',' + position.coords.longitude + '&zoom=16&size=500x500">'

	}

// onError Callback receives a PositionError object
//
	function onError(error) {
		alert('code: ' + error.code + '\n' +
			'message: ' + error.message + '\n');
	}

}());

