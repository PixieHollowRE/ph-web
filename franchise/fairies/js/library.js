/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Goes back in history                                      */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function goBackHistory() {
	history.back();
}




/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Opens the 'Download Screensaver' window                   */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function downloadScreenSaver( file ) {
	var iWidth  = 600;
	var iHeight = 550;
	var iPosX   = Math.round( (screen.availWidth / 2) - (iWidth / 2) );
	var iPosY   = Math.round( (screen.availHeight / 2) - (iHeight / 2) );
	
	var oWindow = window.open(
								  file,
								  "downloadScreensaver",
								  "left=" + iPosX + 
								  ",top=" + iPosY + 
								  ",width=" + iWidth + 
								  ",height=" + iHeight + 
								  ",location=no,statusbar=no,toolbar=no,scrollbars=yes,resizable=no"
							  );
	oWindow.focus();
}




/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Opens the 'Download Wallpaper' window                     */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function downloadWallpaper( file, width, height ) {
	var hPadding = 20;
	var vPadding = 160;
	var iWidth  = width + hPadding;
	var iHeight = height + vPadding;
	var iPosX   = Math.round( (screen.availWidth / 2) - (iWidth / 2) );
	var iPosY   = Math.round( (screen.availHeight / 2) - (iHeight / 2) );
	
	var oWindow = window.open(
								  file,
								  "downloadWallpaper" + width,
								  "left=" + iPosX + 
								  ",top=" + iPosY + 
								  ",width=" + iWidth + 
								  ",height=" + iHeight + 
								  ",location=no,statusbar=no,toolbar=no,scrollbars=yes,resizable=no"
							  );
	oWindow.focus();
}




/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Opens the 'Download Buddy Icon' window                    */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function downloadBuddyIcon( file ) {
	var iWidth  = 600;
	var iHeight = 250;
	var iPosX   = Math.round( (screen.availWidth / 2) - (iWidth / 2) );
	var iPosY   = Math.round( (screen.availHeight / 2) - (iHeight / 2) );
	
	var oWindow = window.open(
								  file,
								  "downloadBuddyIcon",
								  "left=" + iPosX + 
								  ",top=" + iPosY + 
								  ",width=" + iWidth + 
								  ",height=" + iHeight + 
								  ",location=no,statusbar=no,toolbar=no,scrollbars=no,resizable=no"
							  );
	oWindow.focus();
}




/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* Opens the 'Download Signature' window                     */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
function downloadSignature( file ) {
	var iWidth  = 600;
	var iHeight = 330;
	var iPosX   = Math.round( (screen.availWidth / 2) - (iWidth / 2) );
	var iPosY   = Math.round( (screen.availHeight / 2) - (iHeight / 2) );
	
	var oWindow = window.open(
								  file,
								  "downloadSignature",
								  "left=" + iPosX + 
								  ",top=" + iPosY + 
								  ",width=" + iWidth + 
								  ",height=" + iHeight + 
								  ",location=no,statusbar=no,toolbar=no,scrollbars=no,resizable=no"
							  );
	oWindow.focus();
}




//
function createPixieTourLayer () {
	if ( document.getElementById ) {
		var ePixie;
		if ( ePixie = document.getElementById("pixie_object") ) {
			ePixie.innerHTML = '<object data="../media/swf/games/game_pixietour.swf" type="application/x-shockwave-flash" width="550" height="400"><param name="movie" value="../media/swf/games/game_pixietour.swf" /></object>';
		}
	}
}






var oGET = new Object();
function createGetObject () {
	var uri    = window.location.href;
	var getStr = "";
	var aItems = new Array();
	var aData  = new Array();
	
	if ( uri.indexOf("?") != -1 ) {
		getStr = uri.substring(uri.indexOf("?") + 1);
		aItems = getStr.split("&");
		
		for ( var cItems = 0; cItems < aItems.length; cItems++ ) {
			aData = aItems[cItems].split("=");
			oGET[aData[0]] = aData[1];
		}
	}
}