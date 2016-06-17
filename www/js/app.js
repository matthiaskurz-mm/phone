// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

	navigator.geolocation.getCurrentPosition(onSuccess, onError);

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


// onSuccess Geolocation

	function onSuccess(position) {
		var element = document.getElementById('geolocation');
		//element.innerHTML = '<p>Latitude: ' + position.coords.latitude + '<br />' +	'Longitude: ' + position.coords.longitude
		element.innerHTML = 'pos geändert'
	}

// onError Callback receives a PositionError object
//
	function onError(error) {
		alert('code: ' + error.code + '\n' +
			'message: ' + error.message + '\n');
	}


	function onDeviceReady() {

		alert("navigator hinter");
		/*
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
		 } */
		var map = new GoogleMap();
		map.initialize();
	}


	var calculateDistance = function (myLongitude, myLatitude, long1, lat1) {
		erdRadius = 6371;

		myLongitude = myLongitude * (Math.PI / 180);
		myLatitude = myLatitude * (Math.PI / 180);
		long1 = long1 * (Math.PI / 180);
		lat1 = lat1 * (Math.PI / 180);

		x0 = myLongitude * erdRadius * Math.cos(myLatitude);
		y0 = myLatitude * erdRadius;

		x1 = long1 * erdRadius * Math.cos(lat1);
		y1 = lat1 * erdRadius;

		dx = x0 - x1;
		dy = y0 - y1;

		d = Math.sqrt((dx * dx) + (dy * dy));

		if (d < 1) {
			return Math.round(d * 1000) + " m";
		} else {
			return Math.round(d * 10) / 10 + " km";
		}
	};



}());


