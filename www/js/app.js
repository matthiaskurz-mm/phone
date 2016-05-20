// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {


	function renderHomeView() {
		var html =
			"<h1>Die Konferenz</h1>" +
			"<input class='search-key' type='search' placeholder='Enter name'/>" +
			"<ul class='session-list'></ul>";
		$('body').html(html);
		$('.search-key').on('keyup', findByName);
	}



	/* ---------------------------------- Local Variables ---------------------------------- */
	var service = new ConferenceService();
	service.initialize().done(function () {
		renderHomeView();
	});

	/* --------------------------------- Event Registration -------------------------------- */

	document.addEventListener('deviceready', function () {
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
		;
		FastClick.attach(document.body);
	}, false);


	/* ---------------------------------- Local Functions ---------------------------------- */
	function findByName() {
		service.findByName($('.search-key').val()).done(function (sessions) {
			var l = sessions.length;
			var e;
			$('.session-list').empty();
			for (var i = 0; i < l; i++) {
				e = sessions[i];
				$('.session-list').append('<li><a href="#sessions/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
			}
		});
	}

}());