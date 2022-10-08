
	  var isLoggedIn = true;
	  var startBtn = true;
	  var swfObjectsInit = false;
	  var managerReady = false;
	  var managerCalled = false;
	  var usersName = "";


	function playBtnClicked(){
		if (startBtn){
			showMiniManager();
		}
	}

	function swfObjectsInitialized() {
		if (managerCalled) {
			// Now we know objects are initialized before they get called
			swfobject.getObjectById('pixiehollowcontent').width = ("1200px");
			swfobject.getObjectById('pixiehollowcontent').height = ("825px");
		}
	}

	function managerIsReady() {
			managerReady = true;
			if (managerCalled) {
				 //  Calls the show mini-manager functino within flash
				if (navigator.appName.indexOf("Microsoft") != -1) {
					window["pixiehollowcontent"].jsShowLogin();
				} else {
					document["pixiehollowcontent"].jsShowLogin();
				}
			}
	}

	 function loginSuccess(theName){
		// to get to this function the user must be logged in in the flash widget
		isLoggedIn = true;
		displayLoggedInElements(1);
		updateCustomName( (theName.length > 12) ? (theName.substring(0, 9) + '...') : theName );
		showMiniManager();
	 }

	 function alreadyLoggedIn(theName){
		theName = (theName.length > 12) ? (theName.substring(0, 9) + '...') : theName;
		isLoggedIn = true;
		displayLoggedInElements(1);
		updateCustomName(theName);
		usersName = theName;
	 }



	 function displayLoggedInElements(show) {
		// value of show should be 1 or 0

		// check for new enough browser
		if (document.getElementById){
			if (show) {
				// hide login, and show logout, display custon name field
				document.getElementById('login').style.display='none';
				document.getElementById('logout').style.display='inline';
				document.getElementById('customName').style.display='inline';
			} else {
				// hide logout and custom name, show login
				document.getElementById('login').style.display='inline';
				document.getElementById('logout').style.display='none';
				document.getElementById('customName').style.display='none';
			}
		}
	 }




	 function updateCustomName(theName){
		if (document.getElementById) {
			var x=document.getElementById("customNameLink");
			x.innerHTML = theName;
			usersName = theName;
			// Call MiniManager Widget to get Fairies
			if (navigator.appName.indexOf("Microsoft") != -1) {
				window["quickLogin"].jsGetFairyInfo();
			} else {
				document["quickLogin"].jsGetFairyInfo();
			}
		}
	 }



	 function updateHasFairies(theCount) {
		if (document.getElementById) {
			//  if user has fairies created then display appropriate message
			if (theCount == 0) {
				var midtext = "Welcome Back, "+usersName+"!<br />Click Play to create a Fairy<br /><span class='wrongUserText'>Not you?<a href='javascript:logoutUser();'>Click here!</a></span>";
			} else {
				var midtext = "Welcome Back, "+usersName+"!<br /><span class='wrongUserText'>Not you? <a href='javascript:logoutUser();'>Click here!</a></span>";
			}
			//  Set middle text to new message
			var x=document.getElementById("pixiePlayText");
			x.innerHTML =  midtext;
		}

	 }








	function showMiniManager(which){

		// if the object exists and is ready, make it full size
		if (swfobject.getObjectById('pixiehollowcontent')) {
			swfobject.getObjectById('pixiehollowcontent').width = ("1200px");
			swfobject.getObjectById('pixiehollowcontent').height = ("825px");
		}

		if (managerReady) {

			if (which == "pixiepage"){
				// pixiepage minimanager
				//  Calls the show pixie page mini-manager function within flash
				if (navigator.appName.indexOf("Microsoft") != -1) {
					window["pixiehollowcontent"].jsShowPixiePageLogin();
				} else {
					document["pixiehollowcontent"].jsShowPixiePageLogin();
				}
			} else {
				// regular game minimanager
				//  Calls the show main game mini-manager function within flash
				if (navigator.appName.indexOf("Microsoft") != -1) {
					window["pixiehollowcontent"].jsShowLogin();
				} else {
					document["pixiehollowcontent"].jsShowLogin();
				}
			}

		} else {
			// manager not ready yet, set flag
			managerCalled = true;
		}
	 }


	function hideMiniManager(){
		//swfobject.getObjectById('pixiehollowcontent').width = ("1px");
		swfobject.getObjectById('pixiehollowcontent').height = ("1px");
	}

	function gameUnavailable(){
		//alert("Game Unavailable");
		startBtn = false;

		var newHTML  = "<img id='playBtn' src='" + baseSwfPath + "publish/images/prospect/btn_play_grey." + theExt + "' alt='Play' width='214' height='107' border='0' />";

		document.getElementById('pixiePlayBtnDiv').innerHTML = newHTML;


		// Grey out Start Btn
		//document.getElementById('playBtn').src = "publish/images/prospect/btn_play_grey.png";
	}


	function logoutUser() {
		 //  Calls the show mini-manager function within flash
		 if (navigator.appName.indexOf("Microsoft") != -1) {
			 //window["quickLogin"].jsLogout();
			 window["quickLogin"].jsLogout();
         } else {
			 //document["quickLogin"].jsLogout();
			 document["quickLogin"].jsLogout();
         }
	}

	function logoutSuccess() {
		isLoggedIn = false;

		// Hide custom elements, show login
		displayLoggedInElements(0);

		var midtext = "Create a Fairy and fly!";
		var x=document.getElementById("pixiePlayText");
		x.innerHTML =  midtext;

		//Delete_Cookie('userid','','');
		document.location.reload(true);
	}

	function hey(){
		alert("Hey");
	}

	function logthis(thevar){
		alert(thevar);
	}







