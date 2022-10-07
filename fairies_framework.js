// Temp Fix SWID -------------------------------------------
(function () {
	var cookie = function(name) {
		if (arguments[1] != undefined) {
			var value	= arguments[1] || '';
			var options = arguments[2] || {};
			var expires = '';
			var path	= (options.path)	? '; path=' + options.path : '';
			var domain	= (options.domain)	? '; domain=' + options.domain : '';
			var secure	= (options.secure)	? '; secure' : '';

			if (options.expires && typeof options.expires == 'number') {
				var date = new Date();
				date.setTime(date.getTime() + (options.expires * 86400000));
				expires = '; expires=' + date.toUTCString();
			}
			document.cookie = name + '=' + (value) + expires + path + domain + secure;
		} else {
			if (document.cookie) {
				var cookies = document.cookie.split(';');

				for (var i = 0; i < cookies.length; i++) {
					var cookie = cookies[i].replace(/^\s+|\s+$/g, '');

					if (cookie.substring(0, name.length + 1) == (name + '=')) {
						return decodeURIComponent(cookie.substring(name.length + 1));
					}
				}
			}
			return null;
		}
	};

	if (cookie('SWID')) {
		cookie('SWID', cookie('SWID').replace('"', ''), {
			expires: 60,
			path: '/',
			domain: '.go.com',
			secure: false
		});
	}
})();
//----------------------------------------------------------

function getCurrentUrl() {
	return location.href;
}


function resizePH(w, h) {
	getSWF('pixiehollowcontent').style.height = (h.toString()+"px");
}

function getSWF (movieName) {
	return swfobject.getObjectById(movieName)
}

function exitClient(){
	top.close();
}

function panic(msg, url) {
	if (url != "") {
		window.location.href = url;
	}
	alert(msg);
}

function getTopHref()
{
	return top.location.href;
}

function getNumOfFrames()
{
	return top.length;
}

function openFullscreenWindow(url) {
	/*
		Opens a fullscreen window.
	*/
	if (navigator.appName.indexOf("Micro") != -1) {
		if (navigator.appVersion.indexOf("MSNbDIS1") != -1) {
			platform = "msndis";
		} else if (navigator.appVersion.indexOf("MSNbMSNI") != -1) {
			platform = "msn";
		} else if (navigator.platform.toLowerCase().indexOf("mac") != -1) {
			platform = "macie";
		} else {
			platform = "ie";
		}
	} else {
		platform = "netscape";
	}
	
	var params;
	var win;
	if (platform == "netscape" || platform == "macie") {
		params= "width=" + screen.width + ",height=" + screen.height + ",top=0,left=0,scrollbars=no";
	} else if (platform == "ie") {
		if (cookieVal("blast_isp") == "aol") { 
			params = "fullscreen=yes, scrollbars=yes";
		} else {
			params = "fullscreen=yes, scrollbars=no, resizable=1";
		}
	} else if (platform == "msndis" || platform == "msn") {
		// start msn screen values
		msnw=screen.availWidth+40;
		msnh=screen.availHeight+40; // -40
		params = "width=" + msnw + ",height=" + msnh +",left=0,top=0,channelmode=0,dependent=0,directories=0,fullscreen=0,location=0,menubar=0,resizable=0,scrollbars=no,status=0,toolbar=0";
	} else {
			params = "width=" + screen.width + ",height=" + screen.height + ",top=0,left=0,scrollbars=no";
		}	
	win = window.open(url+"?popblocker=true", "FairiesOnline", params);
	win.focus()
}



function scrollToTop() {
	window.scrollTo(0,0);
}

function updateBGImage(bgImage){
	if(document.body && bgImage!=""){
		var links = document.getElementsByTagName('link');
		for ( var i=0 ; i<links.length ; i++ ) {
			if(links[i].getAttribute("rel").indexOf("style") != -1 && links[i].getAttribute("title")) {
			      links[i].disabled = true;
		      	if(bgImage.indexOf(links[i].getAttribute("title")) != -1) {
					links[i].disabled = false;
				}
			}
		}
	}
}

var gmyWin = null;

function openPopup(url, title, height, width){
	var params;
	params = "width=" + width + ",height=" + height + ",menubar=no,toolbar=no,resizeable=no,status=no,directories=no,location=no";
	gmyWin = myOpenWindow(url, title, params, gmyWin);
	if(self.focus){
		gmyWin.focus();
	}
}

function myOpenWindow(winURL, winName, winFeatures, winObj){
	// first check to see if the window already exists
	if (winObj != null)	{
		// if so, then reopen it. Otherwise make it the active window.
		// the window has already been created, but did the user close it?
		if (!winObj.closed) {
			return winObj;
		}
		// otherwise fall through to the code below to re-open the window
	}	
	// if we get here, then the window hasn't been created yet, or it
	// was closed by the user.
	var theWin; // this will hold our opened window
	theWin = window.open(winURL, winName, winFeatures);
	return theWin;
}

function thisContent(contentName) {
	//do not use this method. It's the swfObject 1.5 way of getting a handle to the swf
	//use getSWF() function instead (swfObject 2.0)
	if(navigator.appName.indexOf("Microsoft") != -1) {
		return window[contentName];
	} else {
		return document[contentName];
	}
}

function handleUnload() {
	var flashContent = getSWF("pixiehollowcontent");
	if(flashContent != undefined) {
		flashContent.unloadContent();
	}
}

//hide id
function hideId(id){
    document.getElementById(id).style.display='none';
}