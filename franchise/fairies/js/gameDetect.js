$(document).ready(function() {
	var gamesList = new Array();
	gamesList['fai_spl_rac_fawnsleapfrograce'] = "width=740,height=490,menu=false,location=true,resizable=false";
	gamesList['fai_spl_arc_tinksworkshopcleanup'] = "width=740,height=490,menu=false,location=true,resizable=false";
	gamesList['fai_spl_mem_iridessasfireflyfun'] = "width=740,height=490,menu=false,location=true,resizable=false";
	gamesList['minigames/fairy-fortunes'] = "width=750,height=500,menu=false,location=true,resizable=false";
	gamesList['minigames/pixie-puzzle'] = "width=605,height=475,menu=false,location=true,resizable=false";
	gamesList['minigames/lost-treasure'] = "width=580,height=410,menu=false,location=true,resizable=false";
	gamesList['minigames/sundown'] = "width=994,height=710,menu=false,location=true,resizable=false";
	gamesList['minigames/games/hopefuls-quest'] = "width=600,height=400,menu=false,location=true,resizable=false";

	var section = '';
	var game = '';
	var currentURL = document.location.href;
	var subpage = currentURL.substr(currentURL.indexOf("#") + 2);
	var urlBreak = subpage.indexOf("/");
	if(urlBreak != -1){
		section = subpage.substring(0, urlBreak);
	}
	if(section == "games"){
		game = subpage.substr(subpage.indexOf("/") + 1);
		if(game.indexOf("/") != -1){
			gameURL = "http://disney.go.com/fairies/games/" + game + ".html";
		} else {
			gameURL = "http://cdn.dolimg.com/franchise/fairies/games/" + game + "/" + game + ".html";
		}
		gameOptions = gamesList[game];
		window.open(gameURL, "popup", gameOptions);
	}
});