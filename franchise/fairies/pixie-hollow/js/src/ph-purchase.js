// Tracking Pixiels ----------------------------------------
function purchaseCallback(data) { // function is called when user hits PURCHASE CONGRATS
	  
	// Commission Junction Tracking 
	  if ($.cookie('PHDistributionId') == 'PpPHPixCom00001') {
	 	(new Image()).src = 'https://www.emjcd.com/u?CID=1520128&OID=ph-' + (new Date()).getTime() + '&TYPE=343075&ITEM1=' + data.term + '&AMT1=' + data.price + '&QTY1=1&CURRENCY=USD&METHOD=IMG';
	  }
	
	
	// Playdom tracking for test and target
	var playdomAPP = (PATH.root !== 'http://di' + 'sney.go.com/fairies') ? 'qa_pixie_hollow' : 'pixie_hollow',
		playdomUserID = ($.cookie('SAUSALITO') !== null) ? $.cookie('SWID').replace('"', ''): '-1',	
		playdomTransactionID = $.cookie('PTID'),
		playdomContext = 'purchase_complete',
		playdomAction = fairies.getQueryString('layoutCode'),
		playdomMessage = fairies.getQueryString('forcePaymentChoice'),		
		playdomLink = 'http://weblogger-dynamic-lb.playdom.com/flash_log?app=';
	
		
	playdomUserID = playdomUserID.replace('"', ''); 
	playdomLink = playdomLink+playdomAPP+'&user_id='+playdomUserID+'&network=c&view_network=c&lang=en_US&tag=game_action&context='+playdomContext+'&action='+playdomAction+'&message='+playdomMessage+'&transaction_id='+playdomTransactionID;

	//console.log('PURCHASE SUCCESS start*** ' + playdomLink +' ***PURCHASE SUCCESS end***');
 	(new Image()).src = playdomLink; 
	
	// Yield Manager, Yahoo tracking code -- Advertiser 'Tangible Media',  Conversion tracking 'Disney Faries Conversion Pixel' 
	//(new Image()).src = 'https://ad.yieldmanager.com/pixel?id=915272&t=1'; 

	var purchaseTime =  new Date(); 
	//alert("You have made a purchase at this time: "+purchaseTime.getTime());

	// mboxTrack call	
	/*switch(data.type)
		{
		case 'fairies':
		  mboxTrack('ph_buymem_confirm','orderId=' + mboxFactoryDefault.getPCId().getId() + purchaseTime.getTime() +'&orderTotal=' + data.price +'&productPurchasedId=' + data.promoCode+'&layoutCode=' + data.layoutCode);
		  break;
		case 'PP_PIX_MTX':
		  mboxTrack('ph_buymtx_confirm','orderId=' + mboxFactoryDefault.getPCId().getId() + purchaseTime.getTime() + '&orderTotal=' + data.price +'&productPurchasedId=' + data.promoCode+'&layoutCode=' + data.layoutCode);
		  break; 
	    case null:
		   // do nothing - like in the case of null
		  break; 
		default:
		   // do nothing 
		}	
	*/
	 
}
//----------------------------------------------------------

// Embed SWF -----------------------------------------------
fairies.API.listen('whoAmI', function () {
	// Purchase Flash Vars -------------------------------------
	var variables = {
		bootURL					: 'boot_main_app.xml',
		locale					: 'en_US',
		whoAmI					: PATH.SSLAPI + '/WhoAmIRequest',
		contentSwfUrl			: 'ph_purchasing_skin.swf',
		loaderSwfUrl			: 'fairies_loader.swf',
		stringTableURL			: 'stringtables/en_US/global.json',
		statesURL				: 'states.xml',
		countriesURL			: 'countries.xml',
		regConfig				: 'registration.xml',
		kidsRulesURL			: 'stringtables/en_US/kidsrules.xml',
		memberServiceURL		: 'stringtables/en_US/memberServiceAgreement.html',
		login					: PATH.SSLAPI + '/AccountLoginRequest',
		logout					: PATH.DXD + '/logout',
		newsletterID			: 'WDIGFamilySites',
		accountAttrRequestURL	: PATH.SSLAPI + '/AccountAttrRequest',
		forgotIDURL				: 'https://register.go.com/global/fairies/recoverMemberNames?affiliateName=Disney_Fairies&appRedirect=http%3A%2F%2Fpixiehollow.com',
		forgotPasswordURL		: 'https://register.go.com/global/fairies/recoverPassword?affiliateName=Disney_Fairies&appRedirect=http%3A%2F%2Fpixiehollow.com',
		regWidgetURL			: 'https://disney.go.com/fairies/pixie-hollow/membership/registration.html',
		congratsRedirectURL		: 'http://apps.dxd.go.com/dxd/util/beacon/purchaseEmailRedirect',
		widgetURL				: 'https://disney.go.com/fairies/pixie-hollow/membership/purchase.html',
		giftPurchaseURL			: 'https://register.go.com/premium/gifts/purchase/pixiehollow',
		congratsEmailPath		: 'http://apps.dxd.go.com/dxd/util/beacon/purchaseEmailRedirect',
		purchaseCompleteURL		: 'http://disney.go.com/fairies/#/pixie-central',
		congratsExitURL			: 'http://disney.go.com/fairies/#/pixie-central',
		needParentExitURL		: 'http://disney.go.com/fairies/#/pixie-central',
		ABHome					: 'http://disney.go.com/fairies/AB/index-[AB].html',
		sessionRefresh			: PATH.SSLAPI + '/SessionRefreshRequest',
		purConfirmCallback		: 'purchaseCallback',
		exitURL					: 'http://disney.go.com/fairies/#/pixie-central',
		loginPageURL			: 'https://disney.go.com/fairies/pixie-hollow/login/index.html',
		playPageURL				: 'http://disney.go.com/fairies/pixie-hollow/game/',
		recoveryPasswordURL		: 'https://register.go.com/global/fairies/recoverPassword?affiliateName=Disney_Fairies&appRedirect=http%3A%2F%2Fpixiehollow.com',
		recoveryUsernameURL		: 'https://register.go.com/global/fairies/recoverMemberNames?affiliateName=Disney_Fairies&appRedirect=http%3A%2F%2Fpixiehollow.com',
		termsOfUseURL			: 'http://disney.go.com/corporate/privacy/terms.html?ppLink=pp_wdig',
		privacyPolicyURL		: 'http://disney.go.com/corporate/privacy/pp_wdig.html',
		accountHoldURL			: 'https://apps.dxd.go.com/dxd/guestservices/your_account/account_hold?bannedUsername=',
		trackingManagerConfig	: 'tracker.xml',
		IPDetectPath			: 'https://tredir.go.com/capmon/GetDE',
		linkColor				: '#FFFFFF',
		DOBCookieTO				: '30',
		MTXProduct				: fairies.getQueryString('product'),
		MTXPromoCode			: fairies.getQueryString('promoCode'),
		MTXLayoutCode			: fairies.getQueryString('layoutCode')
	};
	//----------------------------------------------------------

	// Logout --------------------------------------------------
	if (fairies.getQueryString('changingID')) {
		fairies.API.logout();
	}
	//----------------------------------------------------------

	// Force Payment? ------------------------------------------
	if (fairies.getQueryString('forcePaymentChoice'))
		variables.forcePaymentChoice = fairies.getQueryString().forcePaymentChoice;
	//----------------------------------------------------------
	
	// Parameters ----------------------------------------------
	var parameters = {
		wmode					: 'transparent',
		quality					: 'high',
		allowscriptaccess		: 'always',
		base					: '.'
	};
	//----------------------------------------------------------

	// Attributes ----------------------------------------------
	var attributes = {
		id						: 'PixiesPurchase'
	};
	//----------------------------------------------------------

	if(fairies.API.isRampClosed()) {
		$('#purchase').html('<h3>'+ fairies.API.getRampMsg() +'</h3>');
	} else {
		swfobject.embedSWF(PATH.CDN + '/pixie-hollow/ramp/purchase/DVC_OS.swf', 'purchase', '717', '1150', '9.0.124', '', variables, parameters, attributes);
	}
});
//----------------------------------------------------------