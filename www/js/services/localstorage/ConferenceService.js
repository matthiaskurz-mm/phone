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
					"pic": "ray.jpg",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "test.mp3",
					"lat": "50.005406",
					"lon": "8.270459"
				},

				{
					"id": 2,
					"title": "Museum für Antike Schifffahrt",
					"subtitle": "Antike Wasserfahrzeuge und mehr",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "49.994111",
					"lon": "8.280026"
				},

				{
					"id": 3,
					"title": "Landesmuseum, antike Glas- und Gefäßsammlung/RGZM",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "50.003871",
					"lon": "8.268014"
				},

				{
					"id": 4,
					"title": "Weinbehörde am Gericht",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "50.006119",
					"lon": "8.267563"
				},

				{
					"id": 5,
					"title": "Brunnenmaske am Kupferberg",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "49.997459",
					"lon": "8.262371"
				},

				{
					"id": 6,
					"title": "Kupferbergterrasse",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "49.997611",
					"lon": "8.262950"
				},

				{
					"id": 7,
					"title": "Sektkellerei Goldhand",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "49.997652",
					"lon": "8.265976"
				},

				{
					"id": 8,
					"title": "Weinkeller Markus Landenberger in der Adam-Karrillon-Straße",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "50.004338",
					"lon": "8.261604"
				},

				{
					"id": 9,
					"title": "Weinlager am Zollhafen",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "50.014026",
					"lon": "8.262723"
				},

				{
					"id": 10,
					"title": "Weinhändler-Schicksale in der Zeit des Nationalsozialismus",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "",
					"lon": ""
				},

				{
					"id": 11,
					"title": "Weinstuben: Beichtstuhl, Wilhelmi, Hottum, Lösch u.a. mehr",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "49.995502",
					"lon": "8.278691"
				},

				{
					"id": 12,
					"title": "Marktbrunnen",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "49.999463",
					"lon": "8.274112"
				},

				{
					"id": 13,
					"title": "Haus des Deutschen Weines",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "49.999004",
					"lon": "8.270757"
				},

				{
					"id": 14,
					"title": "Vinotheken: Villa Vinum, Weinraumwohnung, Weinkontor Kessler, Gaumenschnaus",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "50.002530",
					"lon": "8.267149"
				},

				{
					"id": 15,
					"title": "Nagelsäule",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "49.999253",
					"lon": "8.274817"
				},

				{
					"id": 16,
					"title": "Erbacher Hof",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "49.998310",
					"lon": "8.276010"
				},

				{
					"id": 17,
					"title": "Osteiner Hof",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "49.997568",
					"lon": "8.268648"
				},

				{
					"id": 18,
					"title": "Algesheimer Hof/Gutenberg",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "50.001790",
					"lon": "8.272453"
				},

				{
					"id": 19,
					"title": "Weinprobierkeller im Rathaus und in der Staatskanzlei",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "50.000933",
					"lon": "8.277008"
				},

				{
					"id": 20,
					"title": "Weinpresse an der Peter-Altmeier-Allee",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "50.004666",
					"lon": "8.272779"
				},

				{
					"id": 21,
					"title": "Isis-Tempel",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "50.001426",
					"lon": "8.267919"
				},

				{
					"id": 22,
					"title": "Weintrinker Schoppenstecher",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "49.998798",
					"lon": "8.266806"
				},

				{
					"id": 23,
					"title": "Weinmadonna Puttenengel in Mainzer Kirchen",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "",
					"lon": ""
				},

				{
					"id": 24,
					"title": "Weinberg an der Zitadelle",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "49.993807",
					"lon": "8.275455"
				},

				{
					"id": 25,
					"title": "Weinberge an der Stadteinfahrt Pariser Straße",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "49.984835",
					"lon": "8.264696"
				},

				{
					"id": 26,
					"title": "GWC Wegweiser",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "50.001714",
					"lon": "8.276960"
				},

				{
					"id": 26,
					"title": "Stadtteile Ebersheim, Hechtsheim,Laubenheim",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "",
					"lon": ""
				},

				{
					"id": 27,
					"title": "Stadtteile Kostheim, Kastel",
					"subtitle": "",
					"pic": "",
					"description": "Lore ipsum.",
					"teaser": "das ist der teaser",
					"audiofile": "",
					"lat": "",
					"lon": ""
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