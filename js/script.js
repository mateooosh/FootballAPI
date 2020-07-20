//2014 - La Liga
//2021 - BPL
//2002 - Bundesliga
//2019 - Serie A
//2017 - Portugal
//ta


let clubLogo = [];

fetch('https://api.football-data.org/v2/competitions/2021/standings',{
	headers: { 'X-Auth-Token': 'ab0d13d51e7c463d9e12ca8e1036e567' }
}).then(response => response.json())

.then( response => {
	let name, elimination = "";
	// clubLogo = [];
	let currentMatchday = response.season.currentMatchday;
	for(let i=1; i<=20; i++){

		name = response.standings[0].table[i - 1].team.name;
		//delete tail " FC"
		name = deleteFC(name);

		elimination = "";
		// PREMIER LEAGUE, SERIE A
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
				<td class="${elimination} place">${response.standings[0].table[i-1].position}</td>
				<td><img height=56 src="${response.standings[0].table[i - 1].team.crestUrl}"></td>
				<td>${name}</td>
				<td>${response.standings[0].table[i - 1].playedGames}</td>
				<td>${response.standings[0].table[i - 1].won}</td>
				<td>${response.standings[0].table[i - 1].draw}</td>
				<td>${response.standings[0].table[i - 1].lost}</td>
				<td>${response.standings[0].table[i - 1].goalsFor}:${response.standings[0].table[i - 1].goalsAgainst}</td>
				<td>${response.standings[0].table[i - 1].points}</td>
			</tr>
		`);

		name = response.standings[1].table[i - 1].team.name;
		//delete tail " FC"
		name = deleteFC(name);

		$(`.home-standing`).append(`
			<tr>
				<td class="place">${response.standings[1].table[i - 1].position}</td>
				<td><img height=56 src="${response.standings[1].table[i - 1].team.crestUrl}"></td>
				<td>${name}</td>
				<td>${response.standings[1].table[i - 1].playedGames}</td>
				<td>${response.standings[1].table[i - 1].won}</td>
				<td>${response.standings[1].table[i - 1].draw}</td>
				<td>${response.standings[1].table[i - 1].lost}</td>
				<td>${response.standings[1].table[i - 1].goalsFor}:${response.standings[0].table[i - 1].goalsAgainst}</td>
				<td>${response.standings[1].table[i - 1].points}</td>
			</tr>
		`);

		name = response.standings[2].table[i - 1].team.name;
		//delete tail " FC"
		name = deleteFC(name);
		

		$(`.away-standing`).append(`
			<tr>
				<td class="place">${response.standings[2].table[i - 1].position}</td>
				<td><img height=56 src="${response.standings[2].table[i - 1].team.crestUrl}"></td>
				<td>${name}</td>
				<td>${response.standings[2].table[i - 1].playedGames}</td>
				<td>${response.standings[2].table[i - 1].won}</td>
				<td>${response.standings[2].table[i - 1].draw}</td>
				<td>${response.standings[2].table[i - 1].lost}</td>
				<td>${response.standings[2].table[i - 1].goalsFor}:${response.standings[0].table[i - 1].goalsAgainst}</td>
				<td>${response.standings[2].table[i - 1].points}</td>
			</tr>
		`);


		clubLogo.push([name, response.standings[2].table[i - 1].team.crestUrl]);
	}

	$(`.standings`).show(500);
	getMatchesByMatchday(currentMatchday);


}).then(() =>{
	fetch('https://api.football-data.org/v2/competitions/2021/scorers?limit=10', {
		headers: { 'X-Auth-Token': 'ab0d13d51e7c463d9e12ca8e1036e567' }
	}).then(response => response.json())

	.then(response => {
		let name, logoUrl;

		for (let i = 0; i < response.scorers.length; i++) {

			name = response.scorers[i].team.name;
			name = deleteFC(name);

			for(let j=0; j<clubLogo.length; j++){
				if(name === clubLogo[j][0])
					logoUrl = clubLogo[j][1];
			}
			

			$(`.top-scorers-table`).append(`
				<tr>
					<td>${i + 1}</td>
					<td>${response.scorers[i].player.name}</td>
					<td><img height=56 src="${logoUrl}"></td>
					<td class="ta-left">${name}</td>
					<td>${response.scorers[i].numberOfGoals}</td>
				</tr>
			`);
		}
		// console.log(response);
		$(`.top-scorers`).show(500);
	}); 
}); 







let getMatchesByMatchday = (matchday) => {
	fetch(`https://api.football-data.org//v2/competitions/2021/matches?matchday=${matchday}`, {
		headers: { 'X-Auth-Token': 'ab0d13d51e7c463d9e12ca8e1036e567' }
	}).then(response => response.json())
	
	.then(response => {
		console.log(response);

		let score = '-';
		let nameHome, nameAway;

		$(`.matches-table`).html(``);


		let utcDate = new Date(response.matches[0].utcDate);

		let day = utcDate.getDate(), month = utcDate.getMonth();
		day = (day <10) ? `0${day}` : day;
		month++;
		month = (month <10) ? `0${month}` : month;
		let date = `${day}.${month}`;


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

			//delete tails " FC"
			nameHome = deleteFC(nameHome);
			nameAway = deleteFC(nameAway);

			//if finished get score
			if (response.matches[i].status === "FINISHED")
				score = `${response.matches[i].score.fullTime.homeTeam} - ${response.matches[i].score.fullTime.awayTeam}`;

			utcDate = new Date(response.matches[i].utcDate);
			let day = utcDate.getDate(), month = utcDate.getMonth();
			day = (day < 10) ? `0${day}` : day;
			month++;
			month = (month < 10) ? `0${month}` : month;

			//append date
			if (date !== `${day}.${month}`){
				date = `${day}.${month}`;
				$(`.matches-table`).append(`
					<tr class="match-date">
						<td></td>
						<td></td>
						<td></td>
						<td>${date}</td>
					</tr>
				`);
			}
			
			
			let minutes = utcDate.getMinutes();
			minutes = (minutes == 0)? '00' : minutes;
			let start = `${utcDate.getHours()}:${minutes}`;
			
			//append match
			$(`.matches-table`).append(`
				<tr>
					<td>${start}</td>
					<td class="ta-right">${nameHome}</td>
					<td class="pr-10 pl-10">${score}</td>
					<td class="ta-left">${nameAway}</td>
				</tr>
			`);
		}
	});
}

let deleteFC = (value) => {
	if (value.slice(value.length - 3, value.length) === " FC")
		return value.slice(0, value.length - 3);
	return value;
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
});

