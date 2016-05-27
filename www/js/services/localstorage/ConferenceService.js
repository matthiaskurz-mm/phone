var ConferenceService = function () {

	this.initialize = function () {
		var deferred = $.Deferred();
		// Store sample data in Local Storage
		window.localStorage.setItem("sessions", JSON.stringify(
			[
				{
					"id": 0,
					"title": "Weintor",
					"subtitle": "Teil der Stadtmauer in Mittelalter und Neuzeit",
					"pic": "timkim.jpeg",
					"description": "Das Weintor besteht aus rotem Sandstein und ist von schlichten Renaissance-Formen geprägt. Im Gegensatz zu den weiter nördlich gelegenen Toren der Anlage wurde bei diesen Anlagen auf die auffällige Diamantquaderung verzichtet. Es verfügte von Anfang an über Fahr- und Fußgängerdurchlässe und eine zu beiden Seiten gespiegelt gleiche Fassade.Diese Öffnungen im Weintor konnten im Kriegsfall mit schweren Stahlblechtüren verschlossen werden.Die umgebende Rheinkehlmauer war 1,30 Meter hoch, trug darüber jedoch eine zwei Meter hohe schmiedeeiserne Palisade.Nach dem Ersten Weltkrieg wurde die gesamte Rheinkehlmauer niedergelegt, die Tore blieben jedoch erhalten.2009 konnte das Weintor schließlich umfassend restauriert werden und wird darüber hinaus heute zur Abendstunde durch eine Lichtinstallation zusätzlich in Szene gesetzt.",
					"teaser": "das ist der teaser",
					"audiofile": "test.mp3",
					"lat": "49.998922",
					"lon": "8.279616"
				},
				{
					"id": 1,
					"title": "Jupitersäule",
					"subtitle": "Römisches Monument 3. Jahrhundert",
					"pic": "timkim.jpeg",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "test.mp3",
					"lat": "50.005406",
					"lon": "8.270459"
				}


			]));

		deferred.resolve();
		return deferred.promise();
	}

	this.findById = function (id) {

		var deferred = $.Deferred(),
			sessions = JSON.parse(window.localStorage.getItem("sessions")),
			session = null,
			l = sessions.length;

		for (var i = 0; i < l; i++) {
			if (sessions[i].id === id) {
				session = sessions[i];
				break;
			}
		}

		deferred.resolve(session);
		return deferred.promise();
	}

	this.findByTitle = function (searchKey) {
		var deferred = $.Deferred(),
			sessions = JSON.parse(window.localStorage.getItem("sessions")),
			results = sessions.filter(function (element) {
				var title = element.title;
				return title.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
			});
		deferred.resolve(results);
		return deferred.promise();
		//return sessions;
	}

	this.findAll = function () {
		var deferred = $.Deferred(),
			sessions = JSON.parse(window.localStorage.getItem("sessions"));
		deferred.resolve(sessions);
		return deferred.promise();
	}


}