
	  var isLoggedIn = false;
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
			swfobject.getObjectById('pixiehollowcontent').height = ("994px");
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
		//document.getElementById('login').style.display='none';
		document.getElementById('logout').style.display='inline';
		//document.getElementById('customName').style.display='inline';
		//updateCustomName(theName);
		showMiniManager();
	 }
	 
	 function alreadyLoggedIn(theName){
		// hide Login - Show Logout
		isLoggedIn = true;
		//document.getElementById('login').style.display='none';
		document.getElementById('logout').style.display='inline';
		//document.getElementById('customName').style.display='inline';
		//updateCustomName(theName);
		usersName = theName;
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
				var midtext = "Welcome Back, "+usersName+"!<br /><span class='wrongUserText'>Not you?<a href='javascript:logoutUser();'>Click here!</a></span>";
			}
			//  Set middle text to new message	
			var x=document.getElementById("pixiePlayText");
			x.innerHTML =  midtext;
		}

	 }
	 


	function showMiniManager(){
		if (swfobject.getObjectById('pixiehollowcontent')) {
			swfobject.getObjectById('pixiehollowcontent').width = ("1200px");
			swfobject.getObjectById('pixiehollowcontent').height = ("994px");
		} 
	 
		if (managerReady) {
			 //  Calls the show mini-manager functino within flash
			if (navigator.appName.indexOf("Microsoft") != -1) {
				window["pixiehollowcontent"].jsShowLogin();
			} else {
				document["pixiehollowcontent"].jsShowLogin();
			}
		} else {
			managerCalled = true;
		}
	 }
	 
	 

	function hideMiniManager(){
		//swfobject.getObjectById('pixiehollowcontent').width = ("1px");
		swfobject.getObjectById('pixiehollowcontent').height = ("1px");
	}
	 
	 
	function gameUnavailable(){
		startBtn = false;
		// Grey out Start Btn	
		document.getElementById('playBtn').src = "publish/images/prospect/btn_play_grey.png";
	}
	 
	 
	function logoutUser() {
		 //  Calls the show mini-manager functino within flash
		 if (navigator.appName.indexOf("Microsoft") != -1) {
			 window["quickLogin"].jsLogout();
         } else {
			 document["quickLogin"].jsLogout();
         }
	}
	
	function logoutSuccess() {
		isLoggedIn = false;
		//document.getElementById('login').style.display='inline';
		document.getElementById('logout').style.display='none';
		//document.getElementById('customName').style.display='none';
		document.location.reload(true); 
		
	}

	function hey(){
		alert("Hey");
	}
	 