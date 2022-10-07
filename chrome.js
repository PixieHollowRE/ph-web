var _gdeChrome = new function() {
	this['oldOnClick'] = document.onclick;
	this['oldOnFocus'] = window.onfocus;
	this['sessionData'] = new Object();
	this['loginStatus'] = false;
	this['displayName'] = '';
	this['docTypeTransitional'] = false;
	this['searchUpdatetimer'];
	this['searchIndex'] = 0;
	this['totalSuggestions'] = 0;
	this['maxSuggestionChars'] = 22;
	this['searchSuggestionsActive'] = false;
	this['searchValue'];
	this['searchValueOld'];
	this['searchValueGuest'];
	this['arrowKey'];
	this['searchSuggestionData'] = new Object();
	this['oldKeyUp'];
	this['searchInput'];
	this['searchSuggestion'];
	this['usedSearchSuggestion'] = false;
	this['inputCursorIndex'] = 0;
	this['oldInputCursorIndex'] = 0;
	this['regExternalScripts'];
	this['regExternalScriptsLoaded'];
	this['regJS'];
	this['regHTML'];
	this.setupVars = function() {
		this['runStateFlag'] = 0;
		this['chromeButtons'] = new Object();
		this['chromePlayButtons'] = new Array();
		this['chromeExploreButtons'] = new Array();
		this['settignsObject'] = window[this.getQuery('settings')];
		this['highlightedChromeButton'];
		var protocol = window.location.protocol.toString();
		if (protocol == 'https:') {
			this['secure'] = true;
		} else {
			this['secure'] = false;
		};
		this['isIE6'] = false;
		var JSCO = new Object();
		JSCO.chAppVersion = navigator.appVersion.split('MSIE');
		JSCO.chBrwsrVer = parseFloat(JSCO.chAppVersion[1]);
		if ((JSCO.chBrwsrVer >= 5.5 && JSCO.chBrwsrVer < 7) && (document.body.filters)) {
			this['isIE6'] = true;
		};
	};
	this.getQuery = function(var_name) {
		var s = document.documentElement.getElementsByTagName('script');
		var scriptIndex;
		for (var i = 1; i < s.length + 1; i++) {
			if (s[s.length - i].getAttribute('src', 0) != null && s[s.length - i].getAttribute('src', 0).indexOf('/globalelements/chrome.js') != -1) {
				scriptIndex = i;
			};
		};
		var queryString = s[s.length - scriptIndex].getAttribute('src', 0);
		m = (new RegExp('[?&;]' + var_name + '=([^&;#]*)')).exec(queryString);
		return m ? unescape(m[1]) : null;
	};
	this.setupSettings = function() {
		this.checkVariable('target');
		this.checkVariable('cds');
		this.checkVariable('customClickFunction');
		this.checkVariable('customRegEventHandler');
		this.checkVariable('highlightedChromeItem');
		this.checkVariable('homeButtonActive');
		this.checkVariable('chromeVisible');
		this.checkVariable('chromeStyle', '');
		this.checkVariable('regEnabled');
		this.checkVariable('searchSuggestions', 'true');
		this.checkVariable('sequenceTypeLogIn', 'login');
		this.checkVariable('sequenceTypeSignUp', 'reg');
		this.checkVariable('regSiteConfig', 'GlobalReg_Chrome_SiteConfig');
		this.checkVariable('regHandshakeXML', 'http://a.dolimg.com/diamond/DCOM_GlobalReg_Common/Small_512x384_Black/data/handshake.xml');
		this.checkVariable('styleText');
		this.checkVariable('styleTextHover');
		this.checkVariable('styleTextSelected');
		this.checkVariable('styleBackground');
		this.checkVariable('styleHover');
		this.checkVariable('styleSelected');
		this.checkVariable('styleMiddleLine');
	};
	this.isNotBlank = function(v) {
		r = true;
		if (v == null || v == '' || v == undefined || v == 'null' || v == 'undefined') {
			r = false;
		};
		return r;
	};
	this.checkVariable = function(varName, defaultValue) {
		if (this.isNotBlank(this.settignsObject) && this.isNotBlank(this.settignsObject[varName])) {
			this[varName] = this.settignsObject[varName];
		} else {
			this[varName] = this.getQuery(varName);
			if (this[varName] == null && defaultValue != null && defaultValue != undefined) {
				this[varName] = defaultValue;
			};
		};
	};
	this.buildData = function() {
		this['homeButtonTitle'] = "Disney.com";
		this['homeButtonURL'] = "http://disney.go.com/index";
		this['searchTitle'] = "Search Disney.com";
		this['searchText'] = "Search Disney.com";
		this['searchBaseURL'] = "http://disney.go.com/search/?q=";
		this['searchURL'] = "http://disney.go.com/search";
		this.addChromeButton("explore", "Movies", "movies", "http://disney.go.com/movies/index", "", "", "_self");
		this.addChromeButton("explore", "TV", "tv", "http://tv.disney.go.com/tv/", "", "", "--");
		this.addChromeButton("explore", "Music", "music", "http://disney.go.com/music/index", "", "", "_self");
		this.addChromeButton("explore", "Live Events", "live_events", "http://disney.go.com/live-events/index", "", "", "_self");
		this.addChromeButton("explore", "Books", "books", "http://disney.go.com/books/index", "", "", "--");
		this.addChromeButton("explore", "Parks & Travel", "parks", "http://disneyparks.disney.go.com/", "", "", "--");
		this.addChromeButton("explore", "Store", "store", "http://www.disneystore.com/transfer/280559/?CMP=OTL-Dcom:ChromShpIcon", "iconStore", "", "_self");
		this.addChromeButton("play", "Characters & Stars", "characters", "http://disney.go.com/characters/#/characters/", "iconCharacters", "153608", "--");
		this.addChromeButton("play", "Games", "games", "http://disney.go.com/games/#/games/", "iconGames", "153603", "_self");
		this.addChromeButton("play", "Videos", "videos", "http://disney.go.com/videos/#/videos/", "iconVideos", "153585", "_self");
		this.addChromeButton("play", "Create", "create", "http://disney.go.com/create/", "iconCreate", "307445", "_self");
		this.addChromeButton("play", "My Disney", "my_disney", "http://disney.go.com/mydisney/", "iconMyDisney", "1835388", "--");
	};
	this.analyticsTrackLink = function(lid, lpos, type, auto) {
		try {
			cto.linkId = lid;
			cto.linkPosition = lpos;
			cto.linkType = type;
			cto.searchAutocomplete = auto;
			cto.trackLink();
			cto.linkId = '';
			cto.linkPosition = '';
			cto.searchAutocomplete = '';
			cto.linkType = '';
		} catch (e) {};
	};
	this.addChromeButton = function(type, name, id, url, image, panelID, targetWindow) {
		var chromeButtonObject = new Object();
		chromeButtonObject.name = name;
		chromeButtonObject.id = id;
		chromeButtonObject.url = url;
		chromeButtonObject.image = image;
		chromeButtonObject.panelID = panelID;
		chromeButtonObject.targetWindow = targetWindow;
		chromeButtonObject.type = type;
		if (type == 'play') {
			this.chromePlayButtons.push(chromeButtonObject);
		} else if (type == 'explore') {
			this.chromeExploreButtons.push(chromeButtonObject);
		};
		this.chromeButtons[id] = chromeButtonObject;
	};
	this.buildChromeExplore = function() {
		var chromeExploreContents = "<table class='gde_chromeExploreButtons' id='gde_chromeExploreButtons' cellpadding='0' cellspacing='0'>";
		chromeExploreContents += '<tr>';
		var contentLength = this.chromeExploreButtons.length;
		for (var i = 0; i < contentLength; i++) {
			chromeExploreContents += "<td class='gde_chromeButtonTD'>" + this.buildChromeExploreButton(i) + "</td>";
		};
		chromeExploreContents += '</tr>';
		chromeExploreContents += '</table>';
		return chromeExploreContents;
	};
	this.buildChromePlay = function() {
		var chromePlayContents = "<table class='gde_chromePlayButtons' id='gde_chromePlayButtons' cellpadding='0' cellspacing='0'>";
		chromePlayContents += '<tr>';
		var contentLength = this.chromePlayButtons.length;
		for (var i = 0; i < contentLength; i++) {
			chromePlayContents += "<td class='gde_chromeButtonTD'>" + this.buildChromePlayButton(i) + "</td>";
		};
		chromePlayContents += '</tr>';
		chromePlayContents += '</table>';
		return chromePlayContents;
	};
	this.buildChromeContents = function() {
		var chromeContents = "<div id='gde_chromeContainer' style='visibility:hidden;'><div id='gde_chromeContents'>";
		chromeContents += "<div id='gde_chromeHomeButton'><span class='gde_homeLink'></span></div>";
		chromeContents += "<div id='gde_chromeButtons'>";
		chromeContents += this.buildChromeExplore();
		chromeContents += this.buildChromePlay();
		chromeContents += '</div>';
		chromeContents += "<div class='gde_chromeSearchContainer' id='gde_chromeSearchContainer' onClick='_gdeChrome.searchContainerClick();'>";
		chromeContents += "<a id='gde_chromeSearchButton' onClick='_gdeChrome.performSearch();return false;' hr" + "ef='" + _gdeChrome.searchURL + "' title='" + _gdeChrome.searchTitle + "'></a>";
		chromeContents += "<input id='gde_searchInput' class='gde_searchBox' type='text' title='" + _gdeChrome.searchTitle + "' autocomplete='off' onFocus='_gdeChrome.searchFocus();' onBlur='_gdeChrome.searchBlur();'>";
		chromeContents += "<input id='gde_searchSuggestion' class='gde_searchBox' type='text' disabled='' autocomplete='off' value='" + _gdeChrome.searchText + "'>";
		chromeContents += "</div>";
		chromeContents += '</div></div>';
		return chromeContents;
	};
	this.urlencode = function(str) {
		return escape(str).replace(/\+/g, '%2B').replace(/%20/g, '+').replace(/\*/g, '%2A').replace(/\//g, '%2F').replace(/@/g, '%40');
	};
	this.buildHomeButton = function() {
		this.addChromeButton('home', _gdeChrome.homeButtonTitle, 'home', _gdeChrome.homeButtonURL, '', '', '');
		this.homeLinkActive(true);
	};
	this.buildChromeExploreButton = function(i) {
		var chromeButtonData = new Object(this.chromeExploreButtons[i]);
		var image = '';
		if (chromeButtonData.image) {
			image = "<span id='gde_" + chromeButtonData.image + "' class='gde_chromeButtonImage' /></span>";
		};
		var link = "<span class='gde_chromeButtonContents'><a name='&lid=chrome_" + chromeButtonData.id + "_na' id='gde_" + chromeButtonData.id.toLowerCase() + "' class='gde_chromeExploreButton' onClick='_gdeChrome.chromeClick(\"" + chromeButtonData.id + "\");return false;' hr" + "ef='" + chromeButtonData.url + "' title='" + chromeButtonData.name + "'>";
		return link + image + chromeButtonData.name.toUpperCase() + '</a></span>';
	};
	this.buildChromePlayButton = function(i) {
		var chromeButtonData = new Object(this.chromePlayButtons[i]);
		var image = '';
		if (chromeButtonData.image) {
			image = "<span id='gde_" + chromeButtonData.image + "' class='gde_chromeButtonImage' /></span>";
		};
		var link = "<span class='gde_chromeButtonContents'><a name='&lid=chrome_" + chromeButtonData.id + "_na' id='gde_" + chromeButtonData.id.toLowerCase() + "' class='gde_chromePlayButton' onClick='_gdeChrome.chromeClick(\"" + chromeButtonData.id + "\");return false;' hr" + "ef='" + chromeButtonData.url + "' title='" + chromeButtonData.name + "'>";
		return link + image + chromeButtonData.name.toUpperCase() + '</a></span>';
	};
	this.highlightChromeButton = function(id) {
		if (this.isNotBlank(this.highlightedChromeButton)) {
			if (document.getElementById('gde_' + this.highlightedChromeButton.toLowerCase()).className == 'gde_chromePlayButtonSelected') {
				document.getElementById('gde_' + this.highlightedChromeButton.toLowerCase()).className = 'gde_chromePlayButton';
			} else if (document.getElementById('gde_' + this.highlightedChromeButton.toLowerCase()).className == 'gde_chromeExploreButtonSelected') {
				document.getElementById('gde_' + this.highlightedChromeButton.toLowerCase()).className = 'gde_chromeExploreButton';
			};
		};
		if (this.isNotBlank(id) && this.chromeButtons[id]) {
			if (document.getElementById('gde_' + id.toLowerCase()).className == 'gde_chromePlayButton') {
				document.getElementById('gde_' + id.toLowerCase()).className = 'gde_chromePlayButtonSelected';
			} else if (document.getElementById('gde_' + id.toLowerCase()).className == 'gde_chromeExploreButton') {
				document.getElementById('gde_' + id.toLowerCase()).className = 'gde_chromeExploreButtonSelected';
			}
			this.highlightedChromeButton = id;
		} else {
			this.highlightedChromeButton = '';
		};
	};
	this.setCDS = function(state) {
		if (state) {
			this.cds = 'true';
			document.getElementById('gde_chromeExploreButtons').style['visibility'] = 'hidden';
			document.getElementById('gde_chromePlayButtons').style['visibility'] = 'hidden';
			document.getElementById('gde_chromeSearchContainer').style['visibility'] = 'hidden';
			if (this.homeButtonActive == 'true') {
				this.homeLinkActive(true);
			} else {
				this.homeLinkActive(false);
			};
		} else {
			this.cds = 'false';
			document.getElementById('gde_chromeExploreButtons').style['visibility'] = 'inherit';
			document.getElementById('gde_chromePlayButtons').style['visibility'] = 'inherit';
			document.getElementById('gde_chromeSearchContainer').style['visibility'] = 'inherit';
			this.homeLinkActive(true);
		};
	};
	this.homeLinkActive = function(state) {
		var homeButtonName = '';
		if (this.cds == 'true') {
			homeButtonName = '&lid=chrome_home_cds';
		} else {
			homeButtonName = '&lid=chrome_home';
		};
		if (state) {
			document.getElementById('gde_chromeHomeButton').innerHTML = "<a name='" + homeButtonName + "' id='gde_home' class='gde_homeLink' onClick='_gdeChrome.chromeClick(\"home\");return false;' hr" + "ef='" + _gdeChrome.homeButtonURL + "' title='" + _gdeChrome.homeButtonTitle + "'>";
		} else {
			document.getElementById('gde_chromeHomeButton').innerHTML = "<span class='gde_homeLink'></span>";
		};
	};
	this.chromeClick = function(id) {
		if (id != this.highlightedChromeButton) {
			this.highlightChromeButton(id);
		};
		if (this.isNotBlank(this.customClickFunction)) {
			window[this.customClickFunction](this.chromeButtons[id]);
		} else {
			this.chromeLinkAction(this.chromeButtons[id]);
		};
	};
	this.chromeLinkAction = function(chromeButtonData) {
		this.chromeDefaultLinkAction(chromeButtonData);
	};
	this.chromeDefaultLinkAction = function(chromeButtonData) {
		window.location.href = chromeButtonData.url;
	};
	this.showChrome = function() {
		document.getElementById('gde_chromeContainer').style['visibility'] = 'visible';
	};
	this.hideChrome = function() {
		document.getElementById('gde_chromeContainer').style['visibility'] = 'hidden';
	};
	this.loadStyle = function(styleName) {
		var url = '';
		if (_gdeChrome.secure) {
			url = 'https://home.disney.go.com/globalelements/chrome/style.txt?styleName=' + styleName;
		} else {
			url = 'http://cdn.home.disney.go.com/globalelements/chrome/style.txt?styleName=' + styleName;
		};
		var js = document.createElement('script');
		js.setAttribute('src', url);
		js.setAttribute('type', 'text/javascript');
		document.body.appendChild(js);
	};
	this.applyLoadedStyle = function(data) {
		_gdeChrome.setStyle('backgroundColor', data.backgroundColor);
		_gdeChrome.setStyle('textColor', data.textColor);
		_gdeChrome.setStyle('textHoverColor', data.textHoverColor);
		_gdeChrome.setStyle('textSelectedColor', data.textSelectedColor);
		_gdeChrome.setStyle('buttonHoverColor', data.buttonHoverColor);
		_gdeChrome.setStyle('buttonSelectedColor', data.buttonSelectedColor);
		_gdeChrome.setStyle('horizontalLineColor', data.horizontalLineColor);
		var mediaPath = '';
		if (_gdeChrome.secure) {
			mediaPath = 'https://s.dolimg.com/en-US/dcom/media/chrome/sprites/';
		} else {
			mediaPath = 'http://a.dolimg.com/en-US/dcom/media/chrome/sprites/';
		};
		if (_gdeChrome.isIE6) {
			_gdeChrome.setCSS('.gde_homeLink', 'background-image', 'url(' + mediaPath + data.spriteImageGIF + ')');
			_gdeChrome.setCSS('#gde_chromeSearchButton', 'background-image', 'url(' + mediaPath + data.spriteImageGIF + ')');
			_gdeChrome.setCSS('.gde_chromeButtonImage', 'background-image', 'url(' + mediaPath + data.spriteImageGIF + ')');
		} else {
			_gdeChrome.setCSS('.gde_homeLink', 'background-image', 'url(' + mediaPath + data.spriteImagePNG + ')');
			_gdeChrome.setCSS('#gde_chromeSearchButton', 'background-image', 'url(' + mediaPath + data.spriteImagePNG + ')');
			_gdeChrome.setCSS('.gde_chromeButtonImage', 'background-image', 'url(' + mediaPath + data.spriteImagePNG + ')');
		};
	};
	this.setCSS = function(theClass, element, value) {
		var cssRules;
		for (var S = 0; S < document.styleSheets.length; S++) {
			if (document.styleSheets[S]['rules']) {
				cssRules = 'rules';
			} else if (document.styleSheets[S]['cssRules']) {
				cssRules = 'cssRules';
			} else {};
			if (document.styleSheets[S].insertRule) {
				document.styleSheets[S].insertRule(theClass + '{' + element + ':' + value + ';}', document.styleSheets[S][cssRules].length);
			} else if (document.styleSheets[S].addRule) {
				document.styleSheets[S].addRule(theClass, element + ': ' + value + ';');
			};
		};
	};
	this.setStyle = function(style, color) {
		color = '#' + color;
		switch (style) {
			case 'backgroundColor':
				_gdeChrome.setCSS('#gde_chromeContents', 'background-color', color);
				break;
			case 'textColor':
				_gdeChrome.setCSS('a.gde_chromePlayButton', 'color', color);
				_gdeChrome.setCSS('a.gde_chromePlayButton:link', 'color', color);
				_gdeChrome.setCSS('a.gde_chromePlayButton:visited', 'color', color);
				_gdeChrome.setCSS('a.gde_chromeExploreButton', 'color', color);
				_gdeChrome.setCSS('a.gde_chromeExploreButton:link', 'color', color);
				_gdeChrome.setCSS('a.gde_chromeExploreButton:visited', 'color', color);
				break;
			case 'textHoverColor':
				_gdeChrome.setCSS('a.gde_chromePlayButton:hover', 'color', color);
				_gdeChrome.setCSS('a.gde_chromeExploreButton:hover', 'color', color);
				break;
			case 'textSelectedColor':
				_gdeChrome.setCSS('a.gde_chromePlayButtonSelected', 'color', color);
				_gdeChrome.setCSS('a.gde_chromePlayButtonSelected:link', 'color', color);
				_gdeChrome.setCSS('a.gde_chromePlayButtonSelected:visited', 'color', color);
				_gdeChrome.setCSS('a.gde_chromeExploreButtonSelected', 'color', color);
				_gdeChrome.setCSS('a.gde_chromeExploreButtonSelected:link', 'color', color);
				_gdeChrome.setCSS('a.gde_chromeExploreButtonSelected:visited', 'color', color);
				break;
			case 'buttonHoverColor':
				_gdeChrome.setCSS('a.gde_chromePlayButton:hover', 'background-color', color);
				_gdeChrome.setCSS('a.gde_chromeExploreButton:hover', 'background-color', color);
				_gdeChrome.setCSS('a.gde_homeLink:hover', 'background-color', color);
				break;
			case 'buttonSelectedColor':
				_gdeChrome.setCSS('a.gde_chromePlayButtonSelected', 'background-color', color);
				_gdeChrome.setCSS('a.gde_chromePlayButtonSelected:link', 'background-color', color);
				_gdeChrome.setCSS('a.gde_chromePlayButtonSelected:visited', 'background-color', color);
				_gdeChrome.setCSS('a.gde_chromeExploreButtonSelected', 'background-color', color);
				_gdeChrome.setCSS('a.gde_chromeExploreButtonSelected:link', 'background-color', color);
				_gdeChrome.setCSS('a.gde_chromeExploreButtonSelected:visited', 'background-color', color);
				break;
			case 'horizontalLineColor':
				_gdeChrome.setCSS('.gde_chromeExploreButtons', 'border-bottom', 'solid 1px ' + color);
				break;
		};
	};
	this.registrationEvent = function(event) {
		if (_gdeChrome.checkRegistrationStatus()) {
			switch (event.eventType) {
				case 'closeRegistration':
					_gdeChrome.closeRegistration();
					break;
				case 'registrationSuccess':
					_gdeChrome.loginStatus = true;
					if (event.firstName) {
						_gdeChrome.loggedIn(event.firstName);
					} else {
						_gdeChrome.loggedIn('Guest');
					};
					break;
				case 'loginSuccess':
					_gdeChrome.loginStatus = true;
					if (event.firstName) {
						_gdeChrome.loggedIn(event.firstName);
					} else {
						_gdeChrome.loggedIn('Guest');
					};
					break;
			};
		};
		if (this.isNotBlank(this.customRegEventHandler)) {
			try {
				window[this.customRegEventHandler](event);
			} catch (e) {};
		} else {
			this.regEventHandler(event);
		};
	};
	this.regEventHandler = function(event) {};
	this.removeChildrenFromNode = function(node) {
		if (node != null && node != undefined) {
			var len = node.childNodes.length;
			while (node.hasChildNodes()) {
				node.removeChild(node.firstChild);
			};
		};
	};
	this.deleteCookie = function(name) {
		document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; domain=.go.com; path=/';
	};
	this.logIn = function() {
		_gdeChrome.openRegistration({
			'location': 'http://home.disney.go.com/globalelements/chrome/regJSON',
			'sequenceType': this.sequenceTypeLogIn,
			'configUrl': this.regHandshakeXML,
			'siteConfig': this.regSiteConfig
		});
	};
	this.logOut = function() {
		_gdeChrome.loginStatus = false;
		_gdeChrome.deleteCookie('SWID');
		_gdeChrome.deleteCookie('SAUSALITO');
		_gdeChrome.deleteCookie('RED');
		_gdeChrome.deleteCookie('BLUE');
		_gdeChrome.deleteCookie('GREEN');
		_gdeChrome.removeRegNav();
		_gdeChrome.addRegNav();
		this.registrationEvent({
			'eventType': 'logoutSuccess'
		});
	};
	this.signUp = function() {
		_gdeChrome.openRegistration({
			'location': 'http://home.disney.go.com/globalelements/chrome/regJSON',
			'sequenceType': this.sequenceTypeSignUp,
			'configUrl': this.regHandshakeXML,
			'siteConfig': this.regSiteConfig
		});
	};
	this.loggedIn = function(firstName) {
		_gdeChrome.displayName = 'Hi, ' + firstName;
		_gdeChrome.removeRegNav();
		_gdeChrome.addRegNav();
		this.checkNameWidth();
	};
	this.openRegistration = function(regSettings) {
		this.registrationEvent({
			'eventType': 'openRegistration'
		});
		if (document.getElementById('gde_registrationContainer')) {
			var gde_registrationContainer = document.getElementById('gde_registrationContainer');
			_gdeChrome.removeChildrenFromNode(gde_registrationContainer);
		} else {
			var gde_registrationContainer = document.createElement('div');
			gde_registrationContainer.className = 'gde_registrationContainer';
			gde_registrationContainer.id = 'gde_registrationContainer';
			document.body.appendChild(gde_registrationContainer);
		};
		var gde_registrationOuter = document.createElement('div');
		gde_registrationOuter.className = 'gde_registrationOuter';
		gde_registrationOuter.id = 'gde_registrationOuter';
		gde_registrationContainer.appendChild(gde_registrationOuter);
		var gde_registrationInnerContainer = document.createElement('div');
		gde_registrationInnerContainer.className = 'gde_registrationInnerContainer';
		gde_registrationInnerContainer.id = 'gde_registrationInnerContainer';
		gde_registrationContainer.appendChild(gde_registrationInnerContainer);
		var gde_registrationInner = document.createElement('div');
		var chromeTop = document.getElementById('gde_chromeContainer').offsetTop;
		gde_registrationInner.className = 'gde_registrationInner';
		gde_registrationInner.id = 'gde_registrationInner';
		gde_registrationInnerContainer.appendChild(gde_registrationInner);
		var registrationIframe = document.createElement('div');
		registrationIframe.className = 'gde_dropShadow gde_registrationFrame';
		registrationIframe.id = 'gde_regContents';
		gde_registrationInner.appendChild(registrationIframe);
		var location;
		var sequenceType;
		var configUrl;
		var siteConfig;
		if (this.isNotBlank(regSettings.location)) {
			location = regSettings.location;
		} else {
			location = 'http://home.disney.go.com/globalelements/chrome/regJSON';
		};
		if (this.isNotBlank(regSettings.sequenceType)) {
			sequenceType = regSettings.sequenceType;
		} else {
			sequenceType = this.sequenceTypeSignUp;
		};
		if (this.isNotBlank(regSettings.configUrl)) {
			configUrl = regSettings.configUrl;
		} else {
			configUrl = this.regHandshakeXML;
		};
		if (this.isNotBlank(regSettings.siteConfig)) {
			siteConfig = regSettings.siteConfig;
		} else {
			siteConfig = this.regSiteConfig;
		};
		var url = location + '?returnFunction=_gdeChrome.addRegContents&sequenceType=' + sequenceType + '&configUrl=' + configUrl + '&siteConfig=' + siteConfig;
		var js = document.createElement('script');
		js.setAttribute('src', url);
		js.setAttribute('type', 'text/javascript');
		gde_registrationContainer.appendChild(js);
	};
	this.loadScript = function(url, callback) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		if (script.readyState) {
			script.onreadystatechange = function() {
				if (script.readyState == 'loaded' || script.readyState == 'complete') {
					script.onreadystatechange = null;
					callback();
				};
			};
		} else {
			script.onload = function() {
				callback();
			};
		};
		script.src = url;
		document.getElementById('gde_registrationContainer').appendChild(script);
	};
	this.addRegContents = function(data) {
		this.regExternalScriptsLoaded = 0;
		this.regExternalScripts = data.jsInclude.length;
		this.regJS = data.jsInline;
		this.regHTML = data.html;
		for (var i = 0; i < data.jsInclude.length; i++) {
			this.loadScript(data.jsInclude[i], this.checkRegLoadState);
		};
	};
	this.checkRegLoadState = function() {
		_gdeChrome.regExternalScriptsLoaded++;
		if (_gdeChrome.regExternalScriptsLoaded == _gdeChrome.regExternalScripts) {
			document.getElementById('gde_regContents').innerHTML = _gdeChrome.regHTML;
			var js = document.createElement('script');
			js.text = _gdeChrome.regJS;
			js.setAttribute('type', 'text/javascript');
			document.getElementById('gde_registrationContainer').appendChild(js);
		};
	};
	this.closeRegistration = function() {
		var gde_registrationContainer = document.getElementById('gde_registrationContainer');
		_gdeChrome.removeChildrenFromNode(gde_registrationContainer);
	};
	this.openRegistrationMenu = function() {
		if (document.getElementById('gde_registrationMenuContainer')) {
			var gde_registrationMenuContainer = document.getElementById('gde_registrationMenuContainer');
			_gdeChrome.removeChildrenFromNode(gde_registrationMenuContainer);
		} else {
			var gde_registrationMenuContainer = document.createElement('div');
			gde_registrationMenuContainer.className = 'gde_registrationMenuContainer';
			gde_registrationMenuContainer.id = 'gde_registrationMenuContainer';
			document.getElementById('gde_chromeContainer').appendChild(gde_registrationMenuContainer);
		};
		var gde_registrationMenuInner = document.createElement('div');
		gde_registrationMenuInner.className = 'gde_dropShadow gde_registrationMenuInner';
		gde_registrationMenuInner.id = 'gde_registrationMenuInner';
		gde_registrationMenuContainer.appendChild(gde_registrationMenuInner);
		var registrationMenuList = document.createElement('ul');
		gde_registrationMenuInner.appendChild(registrationMenuList);
		var registrationMenuItems = new Array(['Manage Account', 'http://disney.go.com/youraccount/accountmanager.html?channel=17143', '_blank', 'manage_account']);
		for (var i = 0; i < registrationMenuItems.length; i++) {
			var registrationMenuListItem = document.createElement('li');
			var text = document.createTextNode(registrationMenuItems[i][0]);
			var link = document.createElement('a');
			link.setAttribute('href', registrationMenuItems[i][1]);
			link.setAttribute('title', registrationMenuItems[i][0]);
			link.setAttribute('target', registrationMenuItems[i][2]);
			link.setAttribute('name', '&lid=chrome_dropdown/' + i + '/' + registrationMenuItems[i][3]);
			link.appendChild(text);
			registrationMenuListItem.appendChild(link);
			registrationMenuList.appendChild(registrationMenuListItem);
		};
		document.onclick = _gdeChrome.registrationMenuClick;
	};
	this.closeRegistrationMenu = function() {
		var gde_registrationMenuContainer = document.getElementById('gde_registrationMenuContainer');
		_gdeChrome.removeChildrenFromNode(gde_registrationMenuContainer);
		if (typeof _gdeChrome.oldOnClick == 'function') {
			document.onclick = _gdeChrome.oldOnClick;
		};
	};
	this.registrationMenuClick = function(e) {
		_gdeChrome.closeRegistrationMenu();
	};
	this.addRegNav = function() {
		if (!document.getElementById('gde_regNavContainer') && _gdeChrome.checkRegistrationStatus()) {
			var chromeContents = document.getElementById('gde_chromeContents');
			var gde_regNavContainer = document.createElement('div');
			gde_regNavContainer.className = 'gde_regNavContainer';
			gde_regNavContainer.id = 'gde_regNavContainer';
			chromeContents.appendChild(gde_regNavContainer);
			var gde_regNavTextContainer = document.createElement('span');
			gde_regNavTextContainer.className = 'gde_regNavTextContainer';
			gde_regNavTextContainer.id = 'gde_regNavTextContainer';
			gde_regNavContainer.appendChild(gde_regNavTextContainer);
			var spaceChar = '\xa0';
			if (_gdeChrome.loginStatus) {
				var regUserText = document.createTextNode(_gdeChrome.displayName);
				var regUserLink = document.createElement('a');
				regUserLink.setAttribute('href', 'http://disney.go.com/youraccount/accountmanager.html?channel=17143');
				regUserLink.setAttribute('target', '_blank');
				regUserLink.setAttribute('title', 'Manage Your Account');
				regUserLink.setAttribute('name', '&lid=chrome_manage_account');
				gde_regNavTextContainer.appendChild(regUserLink);
				regUserLink.appendChild(regUserText);
				var regDivider = document.createTextNode(spaceChar + ' | ' + spaceChar);
				gde_regNavTextContainer.appendChild(regDivider);
				var regLogoutLink = document.createElement('a');
				regLogoutLink.setAttribute('href', 'javascript:_gdeChrome.logOut();');
				regLogoutLink.setAttribute('title', 'Log Out');
				regLogoutLink.setAttribute('name', '&lid=chrome_log_out');
				gde_regNavTextContainer.appendChild(regLogoutLink);
				var regLogOutText = document.createTextNode('Log Out');
				regLogoutLink.appendChild(regLogOutText);
				var arrowButton = document.createElement('a');
				arrowButton.setAttribute('href', 'javascript:_gdeChrome.openRegistrationMenu();');
				arrowButton.setAttribute('title', 'Account Options');
				arrowButton.className = 'gde_chromeArrowButton';
				arrowButton.id = 'gde_chromeArrowButton';
				gde_regNavContainer.appendChild(arrowButton);
			} else {
				var regLogInLink = document.createElement('a');
				regLogInLink.setAttribute('href', 'javascript:_gdeChrome.logIn();');
				regLogInLink.setAttribute('title', 'Log In');
				regLogInLink.setAttribute('name', '&lid=chrome_log_in');
				gde_regNavTextContainer.appendChild(regLogInLink);
				var regLogInText = document.createTextNode('Log In');
				regLogInLink.appendChild(regLogInText);
				var regDivider = document.createTextNode(spaceChar + spaceChar + ' | ' + spaceChar + spaceChar);
				gde_regNavTextContainer.appendChild(regDivider);
				var regSignUpLink = document.createElement('a');
				regSignUpLink.setAttribute('href', 'javascript:_gdeChrome.signUp();');
				regSignUpLink.setAttribute('title', 'Sign Up');
				regSignUpLink.setAttribute('name', '&lid=chrome_sign_up');
				gde_regNavTextContainer.appendChild(regSignUpLink);
				var regSignUpText = document.createTextNode('Sign Up');
				regSignUpLink.appendChild(regSignUpText);
			};
			document.getElementById('gde_chromeSearchContainer').style.marginTop = '4px';
		};
	};
	this.checkNameWidth = function() {
		if (document.getElementById('gde_regNavTextContainer').offsetWidth > 145) {
			_gdeChrome.displayName = _gdeChrome.sessionData.firstname;
			_gdeChrome.removeRegNav();
			_gdeChrome.addRegNav();
		};
		for (var i = 0; i < 30; i++) {
			if (document.getElementById('gde_regNavTextContainer').offsetWidth > 145) {
				_gdeChrome.displayName = _gdeChrome.sessionData.firstname.substring(0, _gdeChrome.sessionData.firstname.length - i) + '...';
				_gdeChrome.removeRegNav();
				_gdeChrome.addRegNav();
			} else {
				;
				break;
			};
		};
	};
	this.removeRegNav = function() {
		if (document.getElementById('gde_regNavContainer') && _gdeChrome.checkRegistrationStatus()) {
			var chromeContents = document.getElementById('gde_chromeContents');
			var gde_regNavContainer = document.getElementById('gde_regNavContainer');
			chromeContents.removeChild(gde_regNavContainer);
			document.getElementById('gde_chromeSearchContainer').style.marginTop = '15px';
		};
	};
	this.loadSessionData = function() {
		var url = '';
		if (_gdeChrome.secure) {
			url = 'https://globalregsession.go.com/globalregsession/session?as=_gdeChrome.parseUserSessionData';
		} else {
			url = 'https://globalregsession.go.com/globalregsession/session?as=_gdeChrome.parseUserSessionData';
		};
		var js = document.createElement('script');
		js.setAttribute('src', url);
		js.setAttribute('type', 'text/javascript');
		document.body.appendChild(js);
	};
	this.parseUserSessionData = function(data) {
		if (data.firstname != null && data.firstname != 'null') {
			_gdeChrome.loginStatus = true;
			_gdeChrome.sessionData = data;
			_gdeChrome.displayName = 'Hi, ' + _gdeChrome.sessionData.firstname;
			this.removeRegNav();
			this.addRegNav();
			this.checkNameWidth();
		} else {
			_gdeChrome.loginStatus = false;
			this.removeRegNav();
			this.addRegNav();
		};
	};
	this.checkRegistrationStatus = function() {
		if (this.regEnabled == 'true') {
			return true;
		} else {
			return false;
		};
	};
	this.searchContainerClick = function() {
		if (document.selection) {
			_gdeChrome.getCursorIndex();
			if (_gdeChrome.inputCursorIndex == 0) {
				_gdeChrome.searchInput.focus();
				var sel = document.selection.createRange();
				sel.moveStart('character', _gdeChrome.searchInput.value.length);
				sel.moveEnd('character', 0);
				sel.select();
			};
		};
	};
	this.searchFocus = function() {
		if (this.searchSuggestions == 'true') {
			_gdeChrome.oldKeyUp = document.onkeyup;
			document.onkeyup = this.searchKey;
			clearTimeout(_gdeChrome.searchUpdatetimer);
			this.searchUpdater();
		} else {
			_gdeChrome.searchSuggestion.value = '';
		};
	};
	this.searchBlur = function() {
		if (_gdeChrome.searchInput.value.length < 1) {
			_gdeChrome.searchSuggestion.value = _gdeChrome.searchText;
		} else {
			_gdeChrome.searchSuggestion.value = '';
		};
		if (this.searchSuggestions == 'true') {
			if (typeof _gdeChrome.oldKeyUp == 'function') {
				document.onkeyup = _gdeChrome.oldKeyUp;
			} else {
				document.onkeyup = '';
			};
			clearTimeout(_gdeChrome.searchUpdatetimer);
			var searchSuggestionsCloseDelay = setTimeout('_gdeChrome.removeSearchSuggestions()', 500);
		};
	};
	this.searchUpdater = function() {
		_gdeChrome.searchValue = _gdeChrome.searchInput.value;
		if (_gdeChrome.searchValue.length < 1) {
			_gdeChrome.searchSuggestion.value = '';
			_gdeChrome.removeSearchSuggestions();
		} else if (_gdeChrome.searchValue != _gdeChrome.searchValueOld && !_gdeChrome.arrowKey) {
			_gdeChrome.requestSearchSuggestions();
		};
		_gdeChrome.searchValueOld = _gdeChrome.searchValue;
		_gdeChrome.searchUpdatetimer = setTimeout('_gdeChrome.searchUpdater()', 100);
	};
	this.requestSearchSuggestions = function() {
		if (_gdeChrome.searchSuggestion.value.substring(0, _gdeChrome.searchValue.length).toLowerCase() != _gdeChrome.searchValue.toLowerCase()) {
			_gdeChrome.searchSuggestion.value = '';
		};
		_gdeChrome.searchIndex = 0;
		_gdeChrome.totalSuggestions = 0;
		var urlPrefix = 'http://';
		if (_gdeChrome.secure) {
			urlPrefix = 'https://';
		};
		var url = urlPrefix + 'disney.go.com/search/typeAheadProxySearch?q=' + escape(_gdeChrome.searchValue) + '&c=_gdeChrome.searchSuggestionReturn';
		var js = document.createElement('script');
		js.setAttribute('src', url);
		js.setAttribute('type', 'text/javascript');
		document.body.appendChild(js);
	};
	this.getCursorIndex = function() {
		if (document.selection) {
			_gdeChrome.searchInput.focus();
			var Sel = document.selection.createRange();
			var SelLength = document.selection.createRange().text.length;
			Sel.moveStart('character', -_gdeChrome.searchInput.value.length);
			_gdeChrome.inputCursorIndex = Sel.text.length - SelLength;
		} else if (_gdeChrome.searchInput.selectionStart) {
			_gdeChrome.inputCursorIndex = _gdeChrome.searchInput.selectionStart;
		};
	};
	this.searchKey = function(e) {
		_gdeChrome.getCursorIndex();
		var keyID = (window.event) ? event.keyCode : e.keyCode;
		_gdeChrome.arrowKey = false;
		switch (keyID) {
			case 38:
				_gdeChrome.searchIndex--;
				_gdeChrome.arrowKey = true;
				break;
			case 40:
				_gdeChrome.searchIndex++;
				_gdeChrome.arrowKey = true;
				break;
			case 39:
				if (_gdeChrome.searchIndex == 0) {
					if (_gdeChrome.inputCursorIndex == _gdeChrome.searchInput.value.length && _gdeChrome.inputCursorIndex == _gdeChrome.oldInputCursorIndex) {
						_gdeChrome.searchIndex = 1;
					};
				};
				_gdeChrome.arrowKey = true;
				break;
			case 13:
				if (_gdeChrome.searchIndex != 0 && _gdeChrome.searchSuggestionsActive) {
					_gdeChrome.selectSearchIndex('gde_searchResult' + _gdeChrome.searchIndex);
				} else {
					_gdeChrome.performSearch();
				};
				break;
			case 27:
				_gdeChrome.searchInput.blur();
				_gdeChrome.removeSearchSuggestions();
				break;
			default:
				_gdeChrome.usedSearchSuggestion = false;
		};
		if (_gdeChrome.searchInput.value.length < 1) {
			_gdeChrome.arrowKey = false;
		};
		if (_gdeChrome.arrowKey && _gdeChrome.searchSuggestionsActive) {
			if (_gdeChrome.searchIndex < 0) {
				_gdeChrome.searchIndex = _gdeChrome.totalSuggestions;
			} else if (_gdeChrome.searchIndex > _gdeChrome.totalSuggestions) {
				_gdeChrome.searchIndex = 0;
			};
			_gdeChrome.highlightSearchIndex('gde_searchResult' + _gdeChrome.searchIndex);
			if (_gdeChrome.searchIndex == 0) {
				if (_gdeChrome.searchInput.value != _gdeChrome.searchValueGuest) {
					_gdeChrome.searchInput.value = _gdeChrome.searchValueGuest;
				};
				_gdeChrome.searchSuggestion.value = '';
				_gdeChrome.usedSearchSuggestion = false;
			} else {
				_gdeChrome.searchInput.value = _gdeChrome.searchSuggestionData['gde_searchResult' + _gdeChrome.searchIndex].value;
				_gdeChrome.searchSuggestion.value = '';
				_gdeChrome.usedSearchSuggestion = true;
			};
		} else {
			_gdeChrome.searchValueGuest = _gdeChrome.searchValue;
		};
		_gdeChrome.oldInputCursorIndex = _gdeChrome.inputCursorIndex;
	};
	this.highlightSearchIndex = function(indexID) {
		for (var i = 1; i < _gdeChrome.totalSuggestions + 1; i++) {
			var item = document.getElementById('gde_searchResult' + i);
			if (i == 1) {
				item.className = 'gde_searchSuggestion first';
			} else if (i == _gdeChrome.totalSuggestions) {
				item.className = 'gde_searchSuggestion last';
			} else {
				item.className = 'gde_searchSuggestion';
			};
		};
		if (indexID != 'gde_searchResult0' && indexID != null) {
			document.getElementById(indexID).className += ' active';
			_gdeChrome.searchIndex = _gdeChrome.searchSuggestionData[indexID].index;
		} else {
			_gdeChrome.searchIndex = 0;
		};
	};
	this.selectSearchIndex = function(indexID) {
		_gdeChrome.usedSearchSuggestion = true;
		_gdeChrome.searchInput.focus();
		_gdeChrome.searchInput.value = _gdeChrome.searchSuggestionData[indexID].value;
		_gdeChrome.searchSuggestion.value = '';
		_gdeChrome.searchValueOld = _gdeChrome.searchSuggestionData[indexID].value;
		this.removeSearchSuggestions();
		this.performSearch();
	};
	this.performSearch = function() {
		var q = _gdeChrome.searchInput.value;
		if (q != this.searchText && q != null && q.length > 0) {
			if (this.usedSearchSuggestion) {
				this.analyticsTrackLink('chrome_search_na', '', '', 'search_autocomplete_chrome');
			} else {
				this.analyticsTrackLink('chrome_search_na', '', '', 'search_noautocomplete_chrome');
			};
			window.location.href = _gdeChrome.searchBaseURL + this.urlencode(q);
		} else {
			this.analyticsTrackLink('chrome_search_na', '', '', 'search_noautocomplete_chrome');
			window.location.href = _gdeChrome.searchURL;
		}
		return false;
	};
	this.searchSuggestionReturn = function(data) {
		_gdeChrome.totalSuggestions = data.length;
		if (_gdeChrome.totalSuggestions > 0) {
			_gdeChrome.addSearchSuggestions(data);
			_gdeChrome.searchValue = _gdeChrome.searchInput.value;
			var s = _gdeChrome.searchSuggestionData['gde_searchResult1'].value.replace(/<.*?>/g, '');
			if (s.substring(0, _gdeChrome.searchValue.length).toLowerCase() == _gdeChrome.searchValue.toLowerCase() && _gdeChrome.searchValue.length < _gdeChrome.maxSuggestionChars && _gdeChrome.totalSuggestions > 0) {
				_gdeChrome.searchSuggestion.value = _gdeChrome.searchValue + s.substring(_gdeChrome.searchValue.length, s.length);
			} else {
				_gdeChrome.searchSuggestion.value = '';
			};
		} else {
			_gdeChrome.removeSearchSuggestions();
			_gdeChrome.searchSuggestion.value = '';
		};
	};
	this.addSearchSuggestions = function(data) {
		_gdeChrome.searchSuggestionsActive = true;
		if (document.getElementById('gde_searchSuggestionContainer')) {
			var searchSuggestionContainer = document.getElementById('gde_searchSuggestionContainer');
			_gdeChrome.removeChildrenFromNode(searchSuggestionContainer);
		} else {
			var searchSuggestionContainer = document.createElement('div');
			searchSuggestionContainer.className = 'gde_searchSuggestionContainer gde_dropShadow';
			searchSuggestionContainer.id = 'gde_searchSuggestionContainer';
			document.getElementById('gde_chromeSearchContainer').appendChild(searchSuggestionContainer);
		};
		var suggestionsDiv = document.createElement('div');
		var hasImages = false;
		for (var i = 1; i < _gdeChrome.totalSuggestions + 1; i++) {
			var textTarget;
			var suggestionDiv = document.createElement('div');
			if (i == 1) {
				suggestionDiv.className = 'gde_searchSuggestion first';
			} else if (i == _gdeChrome.totalSuggestions) {
				suggestionDiv.className = 'gde_searchSuggestion last';
			} else {
				suggestionDiv.className = 'gde_searchSuggestion';
			};
			suggestionDiv.id = 'gde_searchResult' + i;
			suggestionDiv.title = data[i - 1].displayterm;
			suggestionDiv.onclick = function() {
				_gdeChrome.selectSearchIndex(this.id);
			};
			suggestionDiv.onmouseover = function() {
				_gdeChrome.highlightSearchIndex(this.id);
			};
			suggestionDiv.onmouseout = function() {
				_gdeChrome.highlightSearchIndex();
			};
			if (data[i - 1].thumbnail) {
				hasImages = true;
				var thumb = document.createElement('img');
				thumb.src = data[i - 1].thumbnail;
				thumb.title = data[i - 1].displayterm;
				var suggestionTable = document.createElement('table');
				var suggestionTableBody = document.createElement('tbody');
				var suggestionTableRow = document.createElement('tr');
				var suggestionTableLeftCell = document.createElement('td');
				var suggestionTableRightCell = document.createElement('td');
				suggestionTableLeftCell.style.width = '0';
				suggestionTableRightCell.style.width = '100%';
				suggestionTable.appendChild(suggestionTableBody);
				suggestionTableBody.appendChild(suggestionTableRow);
				suggestionTableRow.appendChild(suggestionTableLeftCell);
				suggestionTableRow.appendChild(suggestionTableRightCell);
				suggestionTableLeftCell.appendChild(thumb);
				suggestionDiv.appendChild(suggestionTable);
				textTarget = suggestionTableRightCell;
			} else {
				textTarget = suggestionDiv;
			};
			var t = data[i - 1].displayterm;
			var termIndex = -1;
			if (t.toLowerCase().substr(0, _gdeChrome.searchValue.length) === _gdeChrome.searchValue.toLowerCase()) {
				termIndex = 0;
			} else {
				termIndex = t.toLowerCase().indexOf(' ' + _gdeChrome.searchValue.toLowerCase());
				if (termIndex != -1) termIndex++;
			};
			var termLength = _gdeChrome.searchValue.length;
			textTarget.appendChild(document.createTextNode(t.substring(0, termIndex)));
			var termSpan = document.createElement('span');
			termSpan.className = 'h';
			termSpan.appendChild(document.createTextNode(t.substring(termIndex, termIndex + termLength)));
			textTarget.appendChild(termSpan);
			textTarget.appendChild(document.createTextNode(t.substring(termIndex + termLength, t.length)));
			suggestionsDiv.appendChild(suggestionDiv);
			var searchItem = new Object();
			searchItem.index = i;
			searchItem.id = 'gde_searchResult' + i;
			searchItem.value = data[i - 1].displayterm;
			_gdeChrome.searchSuggestionData[searchItem.id] = searchItem;
		};
		if (hasImages) {
			suggestionsDiv.className = 'gde_searchsuggestions image';
			searchSuggestionContainer.className = 'gde_searchSuggestionContainer image gde_dropShadow';
			document.getElementById('gde_searchSuggestionContainer').style.marginLeft = '-73px';
		} else {
			suggestionsDiv.className = 'gde_searchsuggestions';
			searchSuggestionContainer.className = 'gde_searchSuggestionContainer gde_dropShadow';
			document.getElementById('gde_searchSuggestionContainer').style.marginLeft = '-23px';
		};
		suggestionsDiv.id = 'gde_searchsuggestions';
		document.getElementById('gde_searchSuggestionContainer').appendChild(suggestionsDiv);
		if (this.docTypeTransitional) {
			document.getElementById('gde_searchSuggestionContainer').style.marginTop = '20px';
		};
	};
	this.removeSearchSuggestions = function() {
		_gdeChrome.searchSuggestionsActive = false;
		var suggestionContainer = document.getElementById('gde_searchSuggestionContainer');
		if (suggestionContainer != null) {
			suggestionContainer.className = '';
			_gdeChrome.removeChildrenFromNode(suggestionContainer);
		};
	};
	this.buildChromeStyle = function() {
		var JSCO = new Object();
		JSCO.chIsIE6 = false;
		JSCO.chAppVersion = navigator.appVersion.split('MSIE');
		JSCO.chBrwsrVer = parseFloat(JSCO.chAppVersion[1]);
		JSCO.chBrwsrAgnt = navigator.userAgent;
		if ((JSCO.chBrwsrVer >= 5.5 && JSCO.chBrwsrVer < 7) && (document.body.filters)) {
			JSCO.chIsIE6 = true;
		};
		if (this.chromeStyle.toLowerCase() == 'none') {} else if (this.chromeStyle.substring(this.chromeStyle.length - 4, this.chromeStyle.length).toLowerCase() == '.css') {
			var css = document.createElement('link');
			css.setAttribute('rel', 'stylesheet');
			css.setAttribute('type', 'text/css');
			css.setAttribute('href', this.chromeStyle);
			css.setAttribute('media', 'screen');
			document.getElementsByTagName('head')[0].appendChild(css);
		} else {
			var protocol = window.location.protocol.toString();
			var secure = '';
			var cssPath = '';
			if (protocol == 'https:') {
				secure = 'true';
				cssPath = 'https://home.disney.go.com/globalelements/chrome.css';
			} else {
				secure = 'false';
				cssPath = 'http://cdn2.home.disney.go.com/globalelements/chrome.css';
			};
			var queryString = '?secure=' + secure + '&IE6=' + JSCO.chIsIE6 + '&styleSet=' + this.chromeStyle + '&styleText=' + this.styleText + '&styleTextHover=' + this.styleTextHover + '&styleTextSelected=' + this.styleTextSelected + '&styleBackground=' + this.styleBackground + '&styleHover=' + this.styleHover + '&styleMiddleLine=' + this.styleMiddleLine + '&styleSelected=' + this.styleSelected;
			var css = document.createElement('link');
			css.setAttribute('rel', 'stylesheet');
			css.setAttribute('type', 'text/css');
			css.setAttribute('href', cssPath + queryString);
			css.setAttribute('media', 'screen');
			document.getElementsByTagName('head')[0].appendChild(css);
		};
	};
	this.buildChrome = function() {
		this.setupVars();
		this.buildData();
		this.setupSettings();
		this.buildChromeStyle();
		if (this.target) {
			document.getElementById(this.target).innerHTML = this.buildChromeContents();
			this.documentLoaded();
		} else {
			document.write(this.buildChromeContents());
			this.checkDOMLoadState();
		};
	};
	this.checkDOMLoadState = function() {
		if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', function() {
				_gdeChrome.runStateFlag = 1;
				_gdeChrome.documentLoaded()
			}, false);
		} else if (document.all && !window.opera) {
			var proto = "src='javascript:void(0)'";
			if (location.protocol == 'https:') proto = 'src=//:';
			document.write('<scr' + 'ipt id=loadTagChrome defer ' + proto + '><\/scr' + 'ipt>');
			var loadTagChrome = document.getElementById('loadTagChrome');
			loadTagChrome.onreadystatechange = function() {
				if (this.readyState == 'complete') {
					_gdeChrome.runStateFlag = 1;
					_gdeChrome.documentLoaded();
				};
			};
		};
		var oldOnload = window.onload;
		window.onload = function() {
			if (typeof oldOnload == 'function') {
				oldOnload();
			};
			setTimeout('if (!_gdeChrome.runStateFlag) _gdeChrome.documentLoaded()', 0);
		}
	};
	this.documentFocus = function() {
		_gdeChrome.loadSessionData();
		if (typeof _gdeChrome.oldOnFocus == 'function') {
			_gdeChrome.oldOnFocus();
		};
	};
	this.documentLoaded = function() {
		this.buildHomeButton();
		if (this.cds == 'true') {
			this.setCDS(true);
		};
		if (this.isNotBlank(this.highlightedChromeItem)) {
			this.highlightChromeButton(this.highlightedChromeItem);
		};
		if (this.chromeVisible != 'false') {
			this.showChrome();
		};
		_gdeChrome.searchInput = document.getElementById('gde_searchInput');
		_gdeChrome.searchSuggestion = document.getElementById('gde_searchSuggestion');
		if (this.searchInput.offsetWidth > 150) {
			this.searchInput.style.width = '144px';
			this.searchSuggestion.style.width = '144px';
			this.docTypeTransitional = true;
		};
		if (_gdeChrome.checkRegistrationStatus()) {
			window.onfocus = _gdeChrome.documentFocus;
			_gdeChrome.loadSessionData();
		};
	};
};
_gdeChrome.buildChrome();