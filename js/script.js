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
			elimination = 'standings__total--champions-league';
		if(i === 5)
			elimination = 'standings__total--europa-league';
		if(i === 6)
			elimination = 'standings__total--europa-league-qual';
		if(i>17 && i<=20)
			elimination = 'standings__total--relegation';

		

		$(`.standings__total--table`).append(`
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

		$(`.standings__home--table`).append(`
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
		

		$(`.standings__away--table`).append(`
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
			

			$(`.top-scorers__table`).append(`
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

		$(`.matches__table`).html(``);


		let utcDate = new Date(response.matches[0].utcDate);

		let day = utcDate.getDate(), month = utcDate.getMonth();
		day = (day <10) ? `0${day}` : day;
		month++;
		month = (month <10) ? `0${month}` : month;
		let date = `${day}.${month}`;
		

		$(`.matches__table`).append(`
			<tr class="matches__table--date">
				<td></td>
				<td></td>
				<td></td>
				<td>${date}</td>
			</tr>
		`);
		
		// set selected option
		$(`.matches__option--${matchday}`).attr('selected', 'selected');

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
				$(`.matches__table`).append(`
					<tr class="matches__table--date">
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
			$(`.matches__table`).append(`
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
$('.standings__button--total').on('click', () => {
	$(".standings__button--total").attr("class", "standings__button--total active");
	$(".standings__button--home").attr("class", "standings__button--home");
	$(".standings__button--away").attr("class", "standings__button--away");


	$('.standings__total').delay(200).fadeIn(500);
	$('.standings__home').fadeOut(200);
	$('.standings__away').fadeOut(200);
});

$('.standings__button--home').on('click', () => {
	$(".standings__button--total").attr("class", "standings__button--total");
	$(".standings__button--home").attr("class", "standings__button--home active");
	$(".standings__button--away").attr("class", "standings__button--away");

	$('.standings__total').fadeOut(200);
	$('.standings__home').delay(200).fadeIn(500);
	$('.standings__away').fadeOut(200);
});

$('.standings__button--away').on('click', () => {
	$(".standings__button--total").attr("class", "standings__button--total");
	$(".standings__button--home").attr("class", "standings__button--home");
	$(".standings__button--away").attr("class", "standings__button--away active");

	$('.standings__total').fadeOut(200);
	$('.standings__home').fadeOut(200);
	$('.standings__away').delay(200).fadeIn(500);
});

$('#matchday-select').on('change', () =>{
	getMatchesByMatchday($('#matchday-select').val());
});

