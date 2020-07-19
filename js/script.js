//2014 - La Liga
//2021 - BPL
//2002 - Bundesliga
//2019 - Serie A
//2017 - Portugal
//ta

let currentMatchday;

fetch('https://api.football-data.org/v2/competitions/2019/standings',{
	headers: { 'X-Auth-Token': 'ab0d13d51e7c463d9e12ca8e1036e567' }
}).then(response => response.json())

.then( response => {
	let results = response;
	let name, elimination = "";
	currentMatchday = results.season.currentMatchday;
	for(let i=1; i<=20; i++){
		name = results.standings[0].table[i - 1].team.name;
		//delete tail " FC"
		if(name.slice(name.length-3, name.length) === " FC")
			name = name.slice(0, name.length - 3);

		elimination = "";
		// PREMIER LEAGUE
		if(i<5)	
			elimination = 'champions-league';
		if(i === 5)
			elimination = 'europa-league';
		if(i === 6)
			elimination = 'europa-league-qual';
		if(i>17 && i<=20)
			elimination = 'relegation';

		$(`.total-standing`).append(`
			<tr>
				<td class="${elimination}">${results.standings[0].table[i-1].position}</td>
				<td><img height=56 src="${results.standings[0].table[i - 1].team.crestUrl}"></td>
				<td>${name}</td>
				<td>${results.standings[0].table[i - 1].playedGames}</td>
				<td>${results.standings[0].table[i - 1].won}</td>
				<td>${results.standings[0].table[i - 1].draw}</td>
				<td>${results.standings[0].table[i - 1].lost}</td>
				<td>${results.standings[0].table[i - 1].goalsFor}:${results.standings[0].table[i - 1].goalsAgainst}</td>
				<td>${results.standings[0].table[i - 1].points}</td>
			</tr>
		`);

		name = results.standings[1].table[i - 1].team.name;
		if (name.slice(name.length - 3, name.length) === " FC")
			name = name.slice(0, name.length - 3);

		$(`.home-standing`).append(`
			<tr>
				<td>${results.standings[1].table[i - 1].position}</td>
				<td><img height=56 src="${results.standings[1].table[i - 1].team.crestUrl}"></td>
				<td>${name}</td>
				<td>${results.standings[1].table[i - 1].playedGames}</td>
				<td>${results.standings[1].table[i - 1].won}</td>
				<td>${results.standings[1].table[i - 1].draw}</td>
				<td>${results.standings[1].table[i - 1].lost}</td>
				<td>${results.standings[1].table[i - 1].goalsFor}:${results.standings[0].table[i - 1].goalsAgainst}</td>
				<td>${results.standings[1].table[i - 1].points}</td>
			</tr>
		`);

		name = results.standings[2].table[i - 1].team.name;
		if (name.slice(name.length - 3, name.length) === " FC")
			name = name.slice(0, name.length - 3);

		$(`.away-standing`).append(`
			<tr>
				<td>${results.standings[2].table[i - 1].position}</td>
				<td><img height=56 src="${results.standings[2].table[i - 1].team.crestUrl}"></td>
				<td>${name}</td>
				<td>${results.standings[2].table[i - 1].playedGames}</td>
				<td>${results.standings[2].table[i - 1].won}</td>
				<td>${results.standings[2].table[i - 1].draw}</td>
				<td>${results.standings[2].table[i - 1].lost}</td>
				<td>${results.standings[2].table[i - 1].goalsFor}:${results.standings[0].table[i - 1].goalsAgainst}</td>
				<td>${results.standings[2].table[i - 1].points}</td>
			</tr>
		`);
	}

	$(`.standings`).show(500);
	getMatchesByMatchday(currentMatchday);

	// console.log(response);
}); 





fetch('https://api.football-data.org/v2/competitions/2019/scorers?limit=10',{
	headers: { 'X-Auth-Token': 'ab0d13d51e7c463d9e12ca8e1036e567' }
}).then(response => response.json())

.then(response => {
	
	let name;
	// console.log(response);
	for(let i = 0; i<response.scorers.length; i++){

		name = response.scorers[i].team.name;
		if (name.slice(name.length - 3, name.length) === " FC")
			name = name.slice(0, name.length - 3);

		$(`.top-scorers-table`).append(`
			<tr>
				<td>${i+1}</td>
				<td>${response.scorers[i].player.name}</td>
				<td>${name}</td>
				<td>${response.scorers[i].numberOfGoals}</td>
			</tr>
		`);
	}

	$(`.top-scorers`).show(500);
}); 
 

let getMatchesByMatchday = (matchday) => {
	fetch(`https://api.football-data.org//v2/competitions/2019/matches?matchday=${matchday}`, {
		headers: { 'X-Auth-Token': 'ab0d13d51e7c463d9e12ca8e1036e567' }
	}).then(response => response.json())
	
	.then(response => {
		console.log(response);

		let score = '-';
		let nameHome, nameAway;

		$(`.matches-table`).html(``);

		//get date
		let date = `${response.matches[0].utcDate.slice(8, 10)}.${response.matches[0].utcDate.slice(5, 7)}`;
		$(`.matches-table`).append(`
			<tr class="match-date">
				<td></td>
				<td></td>
				<td></td>
				<td>${date}</td>
			</tr>
		`);
		
		// set selected option
		$(`#id${matchday}`).attr('selected', 'selected');

		for (let i = 0; i < response.count; i++) {
			
			score = '-';
			//get names
			nameHome = response.matches[i].homeTeam.name;
			nameAway = response.matches[i].awayTeam.name;

			//delete tail " FC"
			if (nameHome.slice(nameHome.length - 3, nameHome.length) === " FC")
				nameHome = nameHome.slice(0, nameHome.length - 3);
			//delete tail " FC"
			if (nameAway.slice(nameAway.length - 3, nameAway.length) === " FC")
				nameAway = nameAway.slice(0, nameAway.length - 3);

			//if finished get score
			if (response.matches[i].status === "FINISHED")
				score = `${response.matches[i].score.fullTime.homeTeam} - ${response.matches[i].score.fullTime.awayTeam}`;


			//append date
			if (date !== `${response.matches[i].utcDate.slice(8, 10)}.${response.matches[i].utcDate.slice(5, 7)}`){
				date = `${response.matches[i].utcDate.slice(8, 10)}.${response.matches[i].utcDate.slice(5, 7)}`;
				$(`.matches-table`).append(`
					<tr class="match-date">
						<td></td>
						<td></td>
						<td></td>
						<td>${date}</td>
					</tr>
				`);
			}
				
			//append match
			$(`.matches-table`).append(`
				<tr>
					<td>${response.matches[i].utcDate.slice(11, 16)}</td>
					<td class="ta-right">${nameHome}</td>
					<td class="pr-10 pl-10">${score}</td>
					<td class="ta-left">${nameAway}</td>
				</tr>
			`);
		}
	});
}


//Listeners
$('#on-total').on('click', () => {
	$("#on-total").attr("class", "active");
	$("#on-home").attr("class", "");
	$("#on-away").attr("class", "");

	$('.container-total').delay(200).fadeIn(500);
	$('.container-home').fadeOut(200);
	$('.container-away').fadeOut(200);
});

$('#on-home').on('click', () => {
	$("#on-total").attr("class", "");
	$("#on-home").attr("class", "active");
	$("#on-away").attr("class", "");

	$('.container-total').fadeOut(200);
	$('.container-home').delay(200).fadeIn(500);
	$('.container-away').fadeOut(200);
});

$('#on-away').on('click', () => {
	$("#on-total").attr("class", "");
	$("#on-home").attr("class", "");
	$("#on-away").attr("class", "active");

	$('.container-total').fadeOut(200);
	$('.container-home').fadeOut(200);
	$('.container-away').delay(200).fadeIn(500);
});

$('#matchday-select').on('change', () =>{
	getMatchesByMatchday($('#matchday-select').val());
})
