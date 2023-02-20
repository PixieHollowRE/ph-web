//-----------------------------------------------------------
// Functions called by the site that do not communicate w/ the api/minigame
//-----------------------------------------------------------

/**
	Remove the game swf and div and replace it with an empty element
	@param		gameDivName Name of the html div that contains the game
*/
function removeGame(/**String*/ gameDivName)
{
	var el = document.getElementById(gameDivName);
   
   if(el){
   
	  var div = document.createElement("div");
	  el.parentNode.insertBefore(div, el);
 
	  //Remove the SWF
	  swfobject.removeSWF(gameDivName);
   
	  //Give the new DIV the old element's ID
	  div.setAttribute("id", gameDivName);
	  div.style.display = 'none';  
   }
   
}
/**
	Embed game swf into the specified game div
	@param		url Full path to the game swf
	@param		basePath Full path to the game's base directory
	@param		gameWidth Width of the game, in pixels
	@param		gameHeight Height of the game, in pixels
	@param		apiUrl Full path to the Minigame API swf
	@param		apiConfigUrl Full path to the Minigame API configuration object
	@param		gameConfigUrl Full path to the game's configuration object
	@param		containerSize Size of the container in which the game is played
	@param		gameDivName Name of the html div in which the game will be embedded
*/
function loadGame(/**String*/url, /**String*/basePath, /**String*/gameWidth, /**String*/gameHeight, /**String*/apiUrl, /**String*/apiConfigUrl, /**String*/gameConfigUrl, /**String*/containerSize, /**String*/gameDivName)
{
	if (typeof containerSize == "undefined") {
		containerSize = "none";
	}
	
   //Check for existing SWF
   if(isObject(gameDivName)){
   
	  //replace object/element with a new div
	  removeGame(gameDivName);
	  
   }
   
   // Resize the game to fit the container size, while preserving the aspect ratio
   if (containerSize == "standard" || containerSize == "xlarge")
   {
	   if (containerSize == "standard")
	   {
		   containerWidth = 580;
		   containerHeight = 410;
	   }
	   else if (containerSize == "xlarge")
	   {
		   containerWidth = 750;
		   containerHeight = 500;  
	   }
		   
	   deltaWidth = containerWidth - gameWidth;
	   deltaHeight = containerHeight - gameHeight;
	   
	   // the game is larger than the container in width
   	   if (deltaWidth <= 0 && deltaHeight >= 0)
			scaleFactor = containerWidth/gameWidth;
		// the game is larger than the container in height
		else if (deltaWidth >= 0 && deltaHeight <= 0)
			scaleFactor = containerHeight/gameHeight;
		// the game is smaller in both dimensions
		else if (deltaWidth >= 0 && deltaHeight >= 0)
		{	   
		   if (deltaWidth/containerWidth < deltaHeight/containerHeight)
			  scaleFactor = containerWidth/gameWidth;
		   else
			  scaleFactor = containerHeight/gameHeight;
		}
		// the game is larger in both dimensions
		else
		{
			if (Math.abs(deltaWidth/containerWidth) > Math.abs(deltaHeight/containerHeight))
		  scaleFactor = containerWidth/gameWidth;
	   else
		  scaleFactor = containerHeight/gameHeight;
		}
				
	   gameWidth = gameWidth * scaleFactor;
	   gameHeight = gameHeight * scaleFactor;
   }
			
   // Embed the swf into the specified div
	var flashvars = {};
	flashvars["apiUrl"] = escape(apiUrl);
	flashvars["apiConfigUrl"] = escape(apiConfigUrl);
	flashvars["gameConfigUrl"] = escape(gameConfigUrl);
	var attributes = {
		styleclass: gameDivName,
		wmode: "opaque"
	};
	var params = {
		menu: "false",
		bgcolor: "#000000",
		quality: "high",
		base: basePath,
		allowScriptAccess: "always"
	};

	  swfobject.embedSWF(url, gameDivName, gameWidth, gameHeight, "10.0.0", "expressInstall.swf", flashvars, params, attributes);
	  
	  // re-position the player
	  var gc = document.getElementById(gameDivName);
	  gc.style.left = adjustGCX(gc.style.width) + 'px';
}

/**
	Toggle the visibility of the game
	@param		gameDivName Name of the html div that contains the game
	@param		isVisible Whether or not the game should be visible
*/
function toggleGameVisibility(/**String*/gameDivName, /**Boolean*/isVisible)
{
	var gc = document.getElementById(gameDivName);
	
	if (isVisible == true)
		gc.style.visibility = 'visible';
	else
		gc.style.visibility = 'hidden';
}

/**
	Check to see if target element is an object or embed element
	@param		targetID Name of the object element
	@returns	{Boolean} Whether or not the specified object exists in the DOM
*/
function isObject(/**String*/targetID)
{

   var isFound = false;
   var el = document.getElementById(targetID);
   
   if(el && (el.nodeName === "OBJECT" || el.nodeName === "EMBED")){
   
	  isFound = true;
   
   }
   
   return isFound;
}

//-----------------------------------------------------------
// Functions called by the api/minigame to communicate with the site
//-----------------------------------------------------------

/**
	Notify the site that the game has destroyed and can be removed
	@param		siteDivName Name of the html div that contains the host site
*/
function onDestroy(/**String*/siteDivName)
{
	document[siteDivName].onDestroy();
}

/**
	Notify the site that the game has responded to the setPause() request
	@param		siteDivName Name of the html div that contains the host site
	@param		paused Whether or not the game is paused
*/
function onSetPause(/**String*/siteDivName, /**Boolean*/paused)
{
	document[siteDivName].onSetPause(paused);
}

/**
	Notify the site that the user has changed the in-game volume
	@param		siteDivName Name of the html div that contains the host site
	@param		volume The new volume
*/
function onSetVolume(/**String*/siteDivName, /**Number*/volume)
{
	document[siteDivName].onSetVolume(volume);
}

/**
	Request the site volume level
	@param		siteDivName Name of the html div that contains the host site
	@returns	{Number} The current volume level of the site
*/
function getVolume(/**String*/siteDivName)
{
	return document[siteDivName].getVolume();
}

/**
	Request the username
	@param		siteDivName Name of the html div that contains the host site
	@returns	{String} The player's username (DName)
*/
function getUsername(/**String*/siteDivName)
{
	return document[siteDivName].getUsername();
}

/**
	Request the userId
	@param		siteDivName Name of the html div that contains the host site
	@returns	{String} The player's user ID
*/
function getUserId(/**String*/siteDivName)
{
	return document[siteDivName].getUserId();
}

/**
	Send startGame() metagame message to site
	@param		siteDivName Name of the html div that contains the host site
	@param		message The encrypted metagame message
	@returns	{Boolean} Whether or not the message was successfully sent to the game player
*/
function startGame(/**String*/siteDivName, /**String*/message)
{
	return document[siteDivName].startGame(message);
}

/**
	Send endGame() metagame message to site
	@param		siteDivName Name of the html div that contains the host site
	@param		message The encrypted metagame message
	@returns	{Boolean} Whether or not the message was successfully sent to the game player
*/
function endGame(/**String*/siteDivName, /**String*/message)
{
	return document[siteDivName].endGame(message);
}

/**
	Send startLevel() metagame message to site
	@param		siteDivName Name of the html div that contains the host site
	@param		message The encrypted metagame message
	@returns	{Boolean} Whether or not the message was successfully sent to the game player
*/
function startLevel(/**String*/siteDivName, /**String*/message)
{
	return document[siteDivName].startLevel(message);
}

/**
	Send endLevel() metagame message to site
	@param		siteDivName Name of the html div that contains the host site
	@param		message The encrypted metagame message
	@returns	{Boolean} Whether or not the message was successfully sent to the game player
*/
function endLevel(/**String*/siteDivName, /**String*/message)
{
	return document[siteDivName].endLevel(message);
}

/**
	Send submitGameEvent() metagame message to site
	@param		siteDivName Name of the html div that contains the host site
	@param		message The encrypted metagame message
	@returns	{Boolean} Whether or not the message was successfully sent to the game player
**/
function submitGameEvent(/**String*/siteDivName, /**String*/message)
{
	return document[siteDivName].submitGameEvent(message);
}

/**
	Attempt to save data on the site's server
	@param		siteDivName Name of the html div that contains the host site
	@param		data The save data string
*/
function storeData(/**String*/siteDivName, /**String*/data)
{
	document[siteDivName].storeData(data);
}

/**
	Attempt to retrieve data on the site's server
	@param		siteDivName Name of the html div that contains the host site
*/
function retrieveData(/**String*/siteDivName)
{
	document[siteDivName].retrieveData();
}

/**
	Attempt to delete data on the site's server
	@param		siteDivName Name of the html div that contains the host site
*/
function deleteData(/**String*/siteDivName)
{
	document[siteDivName].deleteData();
}

//-----------------------------------------------------------
// Functions called from the site to communicate info to the api/minigame
//-----------------------------------------------------------

/**
	Notify API that the game needs to destroy
	@param		gameDivName Name of the html div that contains the game
*/
function destroy(/**String*/gameDivName)
{
	document[gameDivName].destroy();
}

/**
	Notify the API that the game needs to change its pause state
	@param		gameDivName Name of the html div that contains the game
	@param		paused Whether or not the game should pause
*/
function setPause(/**String*/gameDivName, /**Boolean*/paused)
{
	document[gameDivName].setPause(paused);
}

/**
	Notify the API that the game needs to change its volume
	@param		gameDivName Name of the html div that contains the game
	@param		volume The new volume level of the game
*/
function setVolume(/**String*/gameDivName, /**Number*/volume)
{
	document[gameDivName].setVolume(volume);
}

/**
	Notify the API of the success or failure of the server save
	@param		gameDivName Name of the html div that contains the game
	@param		saved Whether or not the game was successfully saved on the server
	@param		err	Error message
*/
function onStoreData(/**String*/gameDivName, /**Boolean*/saved, /**String*/err)
{
	document[gameDivName].onStoreData(saved, err);
}

/**
	Notify the API of the success or failure of the server retrieval
	@param		gameDivName Name of the html div that contains the game
	@param		data Saved data string retrieved from the server
	@param		err Error message
*/
function onRetrieveData(/**String*/gameDivName, /**String*/data, /**String*/err)
{
	document[gameDivName].onRetrieveData(data, err);
}

/**
	Notify the API of the success or failure of the server delete
	@param		gameDivName Name of the html div that contains the game
	@param		deleted Whether or not the save data was successfully deleted from the server
	@param		err	Error message
*/
function onDeleteData(/**String*/gameDivName, /**Boolean*/deleted, /**String*/err)
{
	document[gameDivName].onDeleteData(deleted, err);
}
