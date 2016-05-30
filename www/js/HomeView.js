var HomeView = function (service) {

	var sessionListView;

	this.initialize = function () {

		// Define a div wrapper for the view (used to attach events)
		this.$el = $('<div/>');
		//this.$el.on('keyup', '.search-key', this.findByTitle);
		sessionListView = new SessionListView();
		this.findAll();


		this.render();

	};

	this.render = function () {
		this.$el.html(this.template());
		$('.content', this.$el).html(sessionListView.$el);
		return this;
	};


	this.findByTitle = function () {
		service.findByTitle($('.search-key').val()).done(function (sessions) {
			sessionListView.setSessions(sessions);
		});
	};

	this.findAll = function () {
		service.findAll().done(function (sessions) {
			sessionListView.setSessions(sessions);
		});
	};


	this.initialize();

}