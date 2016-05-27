var HomeView = function (service) {

	var sessionListView;

	this.initialize = function () {
		// Define a div wrapper for the view (used to attach events)
		this.$el = $('<div/>');
		//this.$el.on('keyup', '.search-key', this.findAll);
		this.$el.on('keydown', '.search-key', this.findAll);
		var a = this.findAll;
		console.log(this.$el);

		sessionListView = new SessionListView();
		this.render();
	};

	this.render = function () {
		this.$el.html(this.template());
		$('.content', this.$el).html(sessionListView.$el);
		return this;
	};

	/*
	 this.render = function () {
	 this.$el.html(this.template(session));
	 return this;
	 };

	 */
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