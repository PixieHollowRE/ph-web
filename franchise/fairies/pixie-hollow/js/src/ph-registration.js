function regComplete() {
	$.cookie('ph-regCongrats', '1', {domain: '.go.com',  path: '/'});

	$.getScript("https://tredir.go.com/capmon/GetDE/?set=j&param=connection&param=metrocode&param=domain&param=countryisocode", function() {
		if (countryisocode == "can"){
			fairies.API.listen('whoAmI', redirectCongrats);
			fairies.API.loadWhoAmI();
			setTimeout(redirectCongrats, 2000);
		} else {
			redirectCongrats();
		}
	});
}

function redirectCongrats(){
	if ($.cookie('SOURCE') == 'PpPHPixMnc00003') {
		location.href = PATH.root + '/pixie-hollow/miniclip/congratulation.html';
	} else {
		top.location.href = PATH.root + '/pixie-hollow/membership/congratulation.html';
	}
}

function exitMod() {
	top.location.href = PATH.root + '/pixie-hollow/membership/';
}

// Embed SWF -----------------------------------------------
fairies.API.listen('whoAmI', function () {

	$.getScript("https://tredir.go.com/capmon/GetDE/?set=j&param=connection&param=metrocode&param=domain&param=countryisocode", function() {
		var regXML = (countryisocode == "can") ? 'registrationAB.xml' : 'registration.xml';

		// Registration Flash Vars ------------------------------
		var variables = {
			bootURL					: 'boot_main_app.xml',
			locale					: 'en_US',
			contentSwfUrl			: 'gui/ph_f_gui_reg_registration.swf',
			stringTableUrl			: 'stringtables/en_US/global.json',
			loaderSwfUrl			: 'fairies_loader.swf',
			purchaseURL				: 'https://disney.go.com/fairies/pixie-hollow/membership/purchase.html',
			regConfig				: regXML,
			login					: PATH.API + '/AccountLoginRequest',
			logout					: PATH.API + '/logout',
			whoAmI					: PATH.API + '/WhoAmIRequest',
			newsletterID			: 'WDIGFamilySites',
			recoveryPasswordURL		: 'https://register.go.com/global/fairies/recoverPassword?affiliateName=Disney_Fairies&appRedirect=http%3A%2F%2Fpixiehollow.com',
			recoveryUsernameURL		: 'https://register.go.com/global/fairies/recoverMemberNames?affiliateName=Disney_Fairies&appRedirect=http%3A%2F%2Fpixiehollow.com',
			termsOfUseURL			: 'http://disney.go.com/corporate/privacy/terms.html?ppLink=pp_wdig',
			privacyPolicyURL		: 'http://disney.go.com/corporate/privacy/pp_wdig.html',
			DOBCookieTO				: '30',
			linkColor				: '#ffffff',
			trackingManagerConfig	: 'tracker.xml',
			IPDetectPath			: 'http://tredir.go.com/capmon/GetDE',
			width					: '717',
			height					: '650'
		};
		//----------------------------------------------------------

		// Parameters ----------------------------------------------
		var parameters = {
			wmode				: 'transparent',
			quality				: 'high',
			allowscriptaccess	: 'always',
			base				: '.'
		};
		//----------------------------------------------------------

		// Attributes ----------------------------------------------
		var attributes = {
			id	: 'PixiesRegistration'
		};
		//----------------------------------------------------------

		if(fairies.API.isRampClosed()) {
			$('#registration').html('<h3>'+ fairies.API.getRampMsg() +'</h3>');
		} else {
			swfobject.embedSWF(PATH.CDN + '/pixie-hollow/ramp/registration/DVC_OS.swf', 'registration', '717', '650', '9.0.124', '', variables, parameters, attributes);
		}
	});
});
//----------------------------------------------------------