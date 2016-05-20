// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {


	function renderHomeView() {
		$('body').html(homeTpl());
		$('.search-key').on('keyup', findByName);
	}



	/* ---------------------------------- Local Variables ---------------------------------- */
	var homeTpl = Handlebars.compile($("#home-tpl").html());
	var sessionListTpl = Handlebars.compile($("#session-list-tpl").html());

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
			$('.content').html(sessionListTpl(sessions));
		});
	}

}());