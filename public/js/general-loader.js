var trackTitles = [ //adjust for actual files
	{
		id: 0,
		title: 'A Forest',
		src: './audio/00.mp3',
		place: 'Berlin?',
		date: '2015',
		author: 'Christian Loeffler',
		performance: 'symphony/players',
		directed: 'conductor',
		performDate: 'recorded on ...',
		description: 'notes on cultural use, circulation, etc.',
	},
	{
		id: 1,
		title: 'Pale Skin',
		src: './audio/01.mp3',
		place: 'Berlin?',
		date: '2015',
		author: 'Christian Loeffler',
		performance: 'symphony/players',
		directed: 'conductor',
		performDate: 'recorded on ...',
		description: 'notes on cultural use, circulation, etc.',
	},
	{
		id: 2,
		title: 'Eleven, featuring Mohna',
		src: './audio/02.mp3',
		place: 'Berlin?',
		date: '2015',
		author: 'Christian Loeffler',
		performance: 'symphony/players',
		directed: 'conductor',
		performDate: 'recorded on ...',
		description: 'notes on cultural use, circulation, etc.',
	},
	{
		id: 3,
		title: 'Ash & Snow',
		src: './audio/03.mp3',
		place: 'Berlin?',
		date: '2015',
		author: 'Christian Loeffler',
		performance: 'symphony/players',
		directed: 'conductor',
		performDate: 'recorded on ...',
		description: 'notes on cultural use, circulation, etc.',
	},
];

var navChoices = {
	home: {
		iframe: null,
		hash: null,
	},
	broadsides: {
		iframe: './broadsides/index.html',
		hash: '#broadsides',
	},
	polyglots: {
		iframe: './polyglot/index.html',
		hash: '#polyglot',
		subsections: ['Polyglots, The Bible in Multiple Tongues', 'Cathedrals of Print', 'Complutensian (1517)', 'Antwerp (1571)', 'London (1657)', 'Polyglots, Bibliography' ],
		subshort: ['PolyglotsIntro', 'Cathedrals', 'Complutensian', 'Antwerp', 'London', 'PolyBiblio' ],
	},
	venice: {
		iframe: './venice/index.html',
		hash: '#venice',
	},
	bible: {
		iframe: './bible-in-print/index.html',
		hash: '#bible',
	},
	luther: {
		iframe: './luther-controversy/index.html',
		hash: '#luther',
	},
	americas: {
		iframe: './americas/index.html',
		hash: '#americas',
	},
	'PolyglotsIntro': {
		iframe: './polyglot/index.html',
		hash: '#polyglot',
	},
	'Cathedrals': {
		iframe: './polyglot/index.html#introPoly',
		hash: '#polyglot',
	},
	'Complutensian': {
		iframe: './polyglot/index.html#inter-Comp',
		hash: '#polyglot',
	},
	'Antwerp': {
		iframe: './polyglot/index.html#inter-Antwerp',
		hash: '#polyglot',
	},
	'London': {
		iframe: './polyglot/index.html#inter-London',
		hash: '#polyglot',
	},
	'PolyBiblio': {
		iframe: './polyglot/index.html#biblio',
		hash: '#polyglot',
	}


};


$('audio').on('ended', function(){
    var current = $("#player").attr("value");

    $("#musicTitle").empty()

    var index = +current;
    index ++;

    (index<trackTitles.length)? $("#player").attr("src", trackTitles[index].src) : $("#player").attr("src", trackTitles[0].src) ;
    (index<trackTitles.length)? $("#player").attr("value", index) : $("#player").attr("value", 0) ;
    (index<trackTitles.length)? $("#musicTitle").append(trackTitles[index].title) : $("#musicTitle").append(trackTitles[0].title) ;

});


$('#titleTop').on('change', function(){
	var choice = $('#titleTop')[0].value;

	if (choice === 'home'){
		//index area to be in-filled here

	} else if (navChoices[choice].iframe){
		$('#mainFrame').attr("src", navChoices[choice].iframe); //switch out main iframe
		$('#menuChoices').empty();

		let options = navChoices[choice].subsections;
		let keys = navChoices[choice].subshort;

		options.map((option, i)=>{
			$('#menuChoices').append(`<li><span value=${keys[i]} class="menuElements" tabindex="-1" id=${keys[i]}><span class="menuElements" >${option}</span></span><a class="expand" title="Explore ${option}" tabindex="-1"><span class="menuIcon rightArrowIcon pull-right"></span></a></li>`);
			$('#'+keys[i]).on('click', function(){
						$('#mainFrame').attr("src", navChoices[keys[i]].iframe); //switch out main iframe

				});

		});


	}


});


