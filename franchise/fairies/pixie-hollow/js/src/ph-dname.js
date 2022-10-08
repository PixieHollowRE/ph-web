/**
 * Construct a new DName Class
 * @class A class for a changing your dName
 * @param {object} config Configuration details
 * @return A new DName
 */
var DName = function(_config) {

	/**
	 * Private Variables
	 * @ignore
	 */
	var button = $('#dname-submit'),
		form = $('#dname-form'),
		input = $('#dName'),
		successPopup = $('.popup-dname-success'),
		loadingSWF = PATH.CDN + '/pixie-hollow/swf/loader.swf',
		loader = 'd-name-loading-swf',
		loaderContainer = '.dname .loading-container',
		formReady = false;
		dnameSubmitted = false;

	/**
	 * Construct a new ReportBug
	 * @private
	 */
	function Constructor() {
		fairies.API.listen('whoAmI', function () {
			formReady = true;
		});
		
		$('.more-info').click(function(e) {
			e.preventDefault();
			e.stopPropagation();
			fairies.popup.toggle('.popup-more-info', 'show');
		});
		
		$(form).submit(onDnameSubmit);
		$(button).click(submitForm);

		fairies.API.listen('whoAmI', function () {
			formReady = true;
		});

		// Preload Loader
		setTimeout(function() {
			swfobject.embedSWF(loadingSWF, loader, '68', '68', '10', null, {}, { wmode: 'transparent' }, { });
		}, 3000);
	}
	
		
	function IsSpecialChar(strString) 
	{
		var strInvalidChars = "()*"; // <>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=
		var strChar;
		var blnResult = true; 	
		for (i = 0; i < strString.length; i++) {
		   for (j = 0; j < strInvalidChars.length; j++) {
			   if (strString.charAt(i) == strInvalidChars.charAt(j)){
				blnResult = false;
			   }
			} 
		}  
		return blnResult;
	}
 
	function onDnameSubmit(e) {
		e.preventDefault();

		if (!formReady) {
			return;
		} 
				
		// Check if they have already submitted one
		if ( ($('dname_submitted', fairies.API.XMLs.whoAmI).text() == 'true' || dnameSubmitted) && $('dname_approved', fairies.API.XMLs.whoAmI).text() == 'false') {		
			$.formError.displayUnderElement(input, 'Your D-Name is pending approval.');
			return;
		} else if ( $('dname_submitted', fairies.API.XMLs.whoAmI).text() == 'true' || dnameSubmitted || $('dname_approved', fairies.API.XMLs.whoAmI).text() == 'true') {
			$.formError.displayUnderElement(input, 'You already have a d-name!');
			return;
		}
		
		// Restrict submissions of dname that are greater than 16 characters or  have asterisks 
		if (input.val().length > 16){
			$.formError.clear();
			$.formError.displayUnderElement(input, 'D-names are restricted to a length of 16 characters.');
			return;
		} else if (!IsSpecialChar(input.val())) {
			$.formError.clear();
			$.formError.displayUnderElement(input, 'D-names may not contain special characters.');
			return;
		}  
		

		// Show Loading
		showLoading();

		formReady = false;
		$.formError.clear();
		$.flashProxy.post(fairies.API.getCall('changeDName'), { 
			dname: input.val(),
			userId: fairies.API.getUserID(),
			siteCode: fairies.API.getSiteCode(),
			promotionName: fairies.API.getPromotionName()
		}, onDnameChangeResponse);
	}

	function onDnameChangeResponse(xml) {

		xml = $.parseXML(xml);
		
		var errorCode,
			error,
			errorCodeMap = {
				defaultMessage : 'Internal Error',
				ERROR_MISSING_PARMS : 'The D-Name you entered is either invalid or already taken',
				BAD_DNAME : 'The D-Name you entered is either invalid or taken already',
				USER_NOT_LOGGED_IN : forceLogin,
				DNAME_TAKEN : 'The D-Name you entered is either invalid or taken already',
				USER_FLOW_ERROR : 'You already have a d-name!'
			};

		function forceLogin() {
			fairies.API.simpleLogin(function () {
				fairies.API.closeMiniManager(submitForm);
			});
		}

		// Hide Loading
		hideLoading();

		formReady = true;

		if($('success', xml).text().toLowerCase() !== 'true') {
			errorCode = $(xml).find('error').attr('code');

			if(typeof errorCodeMap[errorCode] === 'function') {
				errorCodeMap[errorCode]();
			} else  {
				$.formError.displayUnderElement(input, errorCodeMap[errorCode] !== undefined ? errorCodeMap[errorCode] : errorCodeMap.defaultMessage);
			}
		} else {
			dnameSubmitted = true;
			fairies.popup.toggle(successPopup, 'show');
			input.val('');
		}
	}

	function submitForm(e) {
		if(typeof e === 'object') {
			e.preventDefault();
			e.stopPropagation();
		}

		form.trigger('submit');
	}

	/**
	 * Shows the Loading Info
	 * @private
	 */
	function showLoading() {

		// Change Button
		button.addClass('button-disabled');
		button.data('text', $(button).find('span').html());
		button.find('span').html('Loading');

		// Show Loading Animation
		$(loaderContainer).show();
	}

	/**
	 * Hides the Loading Info
	 * @private
	 */
	function hideLoading() {

		// Change Button
		button.removeClass('button-disabled');
		$(button).find('span').html(button.data('text'));

		// Hide Loading Animation
		$(loaderContainer).hide();
	}

	// Call the Constructor
	Constructor.call(self);
};