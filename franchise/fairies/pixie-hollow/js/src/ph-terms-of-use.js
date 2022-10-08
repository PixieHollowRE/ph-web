/**
 * Construct a new TermsOfUse Class
 * @class A class for a changing your dName
 * @param {object} config Configuration details
 * @return A new DName
 */
var TermsOfUse = function(_config) {

	/**
	 * Private Variables
	 * @ignore
	 */
	var button = $('#terms-of-use-button'),
		checkbox = $('#terms-of-use-checkbox'),
		errors = $('#terms-of-use-errors'),
		ready = false;

	/**
	 * Construct a new ReportBug
	 * @private
	 */
	function Constructor() {
		fairies.API.listen('whoAmI', function () {
			ready = true;
		});
		
		$(button).click(updateTOU);
	}

	function updateTOU(e) {
		e.preventDefault();

		if (!ready) {
			return;
		}

		// Clear Errors:
		errors.html('');

		// Check if they chceked the box
		if (!checkbox.is(':checked')) {
			$.formError.displayInsideElement(errors, 'Please agree to the terms of use');
			return;
		}

		ready = false;
		$.formError.clear();
		$.flashProxy.get(fairies.API.getCall('agreeToTOU') + '?agreedToTOU=true&userId=' + fairies.API.getUserID() + '&siteCode=' + fairies.API.getSiteCode() + '&promotionName=' + fairies.API.getPromotionName(), onResponse);
	}

	function onResponse(data) {
		$.flashProxy.get(fairies.API.getCall('sessionAgreeToTOU'), function(data) {
			location.href = PATH.root + '/#pixie-hollow-world';
		});
	}

	// Call the Constructor
	Constructor.call(self);
};