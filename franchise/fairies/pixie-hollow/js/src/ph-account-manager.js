// Embed SWF -----------------------------------------------
fairies.API.listen('whoAmI', function () {

	// Account Manager Flash Vars ------------------------------
	var variables = {
		bootURL				: 'boot_main_app.xml',
		locale				: 'en_US',
		skinPath			: 'ph_f_gui_reg_accountManager.swf',
		loadingAnimationURL		: 'fairies_loader.swf',
		stringtable			: 'stringtables/en_US/global.json',
		statesURL			: 'states.xml',
		countriesURL			: 'countries.xml',
		regConfig			: 'registration.xml',
		login				: PATH.SSLAPI + '/AccountLoginRequest',
		logout				: PATH.DXD + '/logout',
		parentGuide			: 'http://home.disney.go.com/guestservices/parentsguide',
		purchaseURL			: 'https://disney.go.com/fairies/pixie-hollow/membership/purchase.html',
		widgetURL			: 'https://disney.go.com/fairies/pixie-hollow/membership/account-manager.html',
		playURL				: 'http://disney.go.com/fairies/pixie-hollow/game/',
		cancelCompleteOkURL		: 'http://disney.go.com/fairies/#pixie-central',
		membershipCardURL		: 'https://disney.go.com/fairies/pixie-hollow/membership/purchase.html?forcePaymentChoice=GameCard',
		regWidgetURL			: 'https://disney.go.com/fairies/pixie-hollow/membership/registration.html',
		forgotPasswordURL		: 'https://register.go.com/global/fairies/recoverPassword?affiliateName=Disney_Fairies&appRedirect=http%3A%2F%2Fpixiehollow.com',
		forgotIDURL			: 'https://register.go.com/global/fairies/recoverMemberNames?affiliateName=Disney_Fairies&appRedirect=http%3A%2F%2Fpixiehollow.com',
		trackingManagerConfig		: 'tracker.xml',
		IPDetectPath			: 'http://tredir.go.com/capmon/GetDE',
		heightUsedByLoginDialog		: '820',
		width				: '717',
		height				: '820'
	};
	//----------------------------------------------------------

	// Cancel Flow ---------------------------------------------
	if (fairies.getQueryString().beginCancelFlow)
		variables.beginCancelFlow = fairies.getQueryString().beginCancelFlow;
	//----------------------------------------------------------

	// Parameters ----------------------------------------------
	var parameters = {
		wmode				: 'transparent',
		quality				: 'high',
		allowscriptaccess		: 'always',
		base				: '.'
	};
	//----------------------------------------------------------

	// Attributes ----------------------------------------------
	var attributes = {
		id				: 'PixiesAccountManager'
	};
	//----------------------------------------------------------

	if(fairies.API.isRampClosed()) {
		$('#account-manager').html('<h3>'+ fairies.API.getRampMsg() +'</h3>');
	} else {
		swfobject.embedSWF(PATH.CDN + '/pixie-hollow/ramp/accountmanagement/DVC_OS.swf', 'account-manager', '717', '820', '9.0.124', '', variables, parameters, attributes);
	}
});
//----------------------------------------------------------