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
		subsections: ['Italian Religious Broadsides', 'Polyglots: The Bible in Multiple Tongues', "Merlo's Map: The Religious Geography of Venice" , 'The Bible in Print', 'The Luther Controversy', 'Writing the Voices of the Americas'],
		subshort: ['broadsides','polyglots', 'venice', 'bible', 'luther', 'americas'],
	},
	broadsides: {
		iframe: './broadsides/index.html',
		hash: '#broadsides',
		subsections: ['Italian Religious Broadsides', 'An Introduction to Italian Religious Broadsides', 'Guide to Broadsides Research', 'Digitized Religious Broadsides', 'Religious Broadsides Bibliography', 'About This Site'],
		subshort: ['BroadIndex','BroadIntro', 'BroadResearch', 'BroadImages', 'BroadBiblio', 'BroadAbout'],
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
		subsections: ["Merlo's Map: The Religious Geography of Venice"],
		subshort: ['VeniceIndex'],
	},
	bible: {
		iframe: './bible-in-print/index.html',
		hash: '#bible',
		subsections: ["The Bible in Print"],
		subshort: ['BibleIndex'],
	},
	luther: {
		iframe: './luther-controversy/index.html',
		hash: '#luther',
		subsections: ["An Introduction to the Luther Controversy", "Luther Controversy Storymap"],
		subshort: ['LutherIndex', 'LutherMap'],
	},
	americas: {
		iframe: './americas/index.html',
		hash: '#americas',
		subsections: ["Writing the Voices of the Americas"],
		subshort: ['AmericasIndex'],
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
	},
	'BroadIndex': {
		iframe: './broadsides/index.html',
		hash: '#broadsides',
	},
	'BroadIntro': {
		iframe: './broadsides/Broadsides-Introduction.html',
		hash: '#broadsides',
	},
	'BroadResearch': {
		iframe: './broadsides/Broadsides-Guide-to-Research.html',
		hash: '#broadsides',
	},
	'BroadImages': {
		iframe: './broadsides/Broadsides-ImageViewer.html',
		hash: '#broadsides',
	},
	'BroadBiblio': {
		iframe: './broadsides/Broadsides-Bibliography.html',
		hash: '#broadsides',
	},
	'BroadAbout': {
		iframe: './broadsides/Broadsides-About-This-Site.html',
		hash: '#broadsides',
	},
	'VeniceIndex': {
		iframe: './venice/index.html',
		hash: '#venice',
	},
	'LutherIndex': {
		iframe: './luther-controversy/index.html',
		hash: '#luther',
	},
	'LutherMap': {
		iframe: './luther-controversy/index-map.html',
		hash: '#luther',
	},
	'BibleIndex': {
		iframe: './bible-in-print/index.html',
		hash: '#bible',
	},
	'AmericasIndex': {
		iframe: './americas/index.html',
		hash: '#americas',
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
    (index<trackTitles.length)? $("#musicTitle2").append(trackTitles[index].title) : $("#musicTitle2").append(trackTitles[0].title) ;

});


$('#titleTop').on('change', function(){
	var choice = $('#titleTop')[0].value;

	if (choice === 'home'){
		//index area to be in-filled here
		$('#mainFrame').attr("class", "coreExhibit coreHidden");
		$('#pageIndex').attr("class", "coreExhibit");

		$('#menuChoices').empty();

		// let options = navChoices[choice].subsections;
		// let keys = navChoices[choice].subshort;

		// options.map((option, i)=>{
		// 	$('#menuChoices').append(`<li><span value=${keys[i]} class="menuElements" tabindex="-1" id=${keys[i]}><span class="menuElements" >${option}</span></span><a class="expand" title="Explore ${option}" tabindex="-1"><span class="menuIcon rightArrowIcon pull-right"></span></a></li>`);
		// 	$('#'+keys[i]).on('click', function(){
		// 				$('#mainFrame').attr("src", navChoices[keys[i]].iframe); //switch out main iframe
		// 				$('#mainFrame').attr("class", "coreExhibit");
		// 				$('#pageIndex').attr("class", "coreExhibit coreHidden");

		// 		});

		// });


	} else if (navChoices[choice].iframe){
		$('#mainFrame').attr("src", navChoices[choice].iframe); //switch out main iframe
		$('#mainFrame').attr("class", "coreExhibit");
		$('#pageIndex').attr("class", "coreExhibit coreHidden");
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

$('.indexItem').on('click', function(event){
	var choice = event.currentTarget.attributes.value.nodeValue;

	if (navChoices[choice].iframe){
		$('#mainFrame').attr("src", navChoices[choice].iframe); //switch out main iframe
		$('#mainFrame').attr("class", "coreExhibit");
		$('#pageIndex').attr("class", "coreExhibit coreHidden");
		$('#menuChoices').empty();

		$("#titleTop").val(choice);

		let options = navChoices[choice].subsections;
		let keys = navChoices[choice].subshort;

		options.map((option, i)=>{
			$('#menuChoices').append(`<li><span value=${keys[i]} class="menuElements" tabindex="-1" id=${keys[i]}><span class="menuElements" >${option}</span></span><a class="expand" title="Explore ${option}" tabindex="-1"><span class="menuIcon rightArrowIcon pull-right"></span></a></li>`);
			$('#'+keys[i]).on('click', function(){
						$('#mainFrame').attr("src", navChoices[keys[i]].iframe); //switch out main iframe

				});

		});


	}

})

$('#musicLine').on('click', function(event){
	console.log($('.modalMusic'));
	$('.modalMusic')[0].style.display = "block";
})

$('.closeMusic').on('click', function(event){
	$('.modalMusic')[0].style.display = "none";
})

$(window).on('click', function(event){
    if (event.target == $('.modalMusic')[0]) {
        $('.modalMusic')[0].style.display = "none";
    }
})

