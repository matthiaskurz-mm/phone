// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {



	/* ---------------------------------- Local Variables ---------------------------------- */
	HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
	SessionListView.prototype.template = Handlebars.compile($("#session-list-tpl").html());
	SessionView.prototype.template = Handlebars.compile($("#session-tpl").html());
	ImagesView.prototype.template = Handlebars.compile($("#images-tpl").html());
	MapView.prototype.template = Handlebars.compile($("#map-tpl").html());

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

		router.addRoute('images/:id', function (id) {
			console.log('details');
			service.findById(parseInt(id)).done(function (session) {
				slider.slidePage(new ImagesView(session).render().$el);
			});
		});

		router.addRoute('map/:id', function (id) {
			console.log('details');
			service.findById(parseInt(id)).done(function (session) {
				slider.slidePage(new MapView(session).render().$el);
			});
		});


		router.start();
	});

	/* --------------------------------- Event Registration -------------------------------- */
	document.addEventListener("deviceready", onDeviceReady, false);

	/* ---------------------------------- Local Functions ---------------------------------- */


// Cordova is ready
	//
	function onDeviceReady() {
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
		var map = new GoogleMap();
		map.initialize(position);
	}

	// onSuccess Geolocation
	//
	function onSuccess(position) {
		var element = document.getElementById('geolocation');
		element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
			'Longitude: ' + position.coords.longitude + '<br />' +
			'Altitude: ' + position.coords.altitude + '<br />'

	}

	// onError Callback receives a [PositionError](PositionError/positionError.html) object
	//
	function onError(error) {
		alert('code: ' + error.code + '\n' +
			'message: ' + error.message + '\n');
	}





}());


