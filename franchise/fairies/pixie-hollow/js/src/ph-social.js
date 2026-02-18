head.ready('plugin', function () {

	// Do not show on the following pages
	if (location.href.indexOf('registration.html') >= 0 || location.href.indexOf('purchase.html') >= 0 || location.href.indexOf('account-manager.html') >= 0) {
		return;
	}

	var classes = {
			socialContainer : 'social-container',
			buttonContainer : 'social-button-container',
			facebookPanel : 'social-facebook-panel',
			twitterPanel : 'social-twitter-panel',
			facebookButton : 'social-button-facebook',
			facebookLikeButton : 'social-facebook-like',
			facebookPageLikeButton : 'social-facebookpage-like',
			facebookShareButton : 'social-facebook-share',
			facebookLikePopup : 'social-facebook-like-popup',
			facebookLikePopupHeader : 'social-facebook-like-popup-header',
			appStoreLink : 'app-store-link',
			appStorePopup : 'app-store-popup',
			twitterButton : 'social-button-twitter',
			twitterFollowButton : 'social-twitter-follow',
			twitterTweetButton : 'social-twitter-tweet',
			ageGatePopup : 'social-popup-agegate',
			ageGateForm : 'social-agegate-form',
			submitButton : 'social-agegate-submit',
			errorContainer : 'social-agegate-birthdayContainer'
		},
		selectors = {
			content : '#content',
			buttonContainer : '.'+ classes.buttonContainer,
			facebookPanel : '#'+ classes.facebookPanel,
			twitterPanel : '#'+ classes.twitterPanel,
			facebookButton : '#'+ classes.facebookButton,
			facebookLikeButton : '#'+ classes.facebookLikeButton,
			facebookPageLikeButton : '.'+ classes.facebookPageLikeButton,
			facebookShareButton : '#'+ classes.facebookShareButton,
			facebookLikePopup : '#'+ classes.facebookLikePopup,
			facebookLikePopupHeader : '#'+ classes.facebookLikePopupHeader,
			appStoreLink : '.'+ classes.appStoreLink,
			appStorePopup : '#'+ classes.appStorePopup,
			twitterButton : '#'+ classes.twitterButton,
			twitterFollowButton : '#'+ classes.twitterFollowButton,
			twitterTweetButton : '#'+ classes.twitterTweetButton,
			ageGatePopup : '#'+ classes.ageGatePopup,
			ageGateForm : '#'+ classes.ageGateForm,
			submitButton : '#'+ classes.submitButton,
			errorContainer : '.'+ classes.errorContainer,
			month : 'input[name=month]',
			day : 'input[name=day]',
			year : 'input[name=year]'
		},
		htmlTemplates = {
			ageGatePopup : '<div id="'+ classes.ageGatePopup +'" class="popup">'+
					'<h2>Please Enter Your Birthday</h2>'+
					'<div class="popup-content">'+
						'<a href="#" class="popup-close close-button"><span>Close</span></a>'+
						'<form id="'+ classes.ageGateForm +'">'+
							'<table class="'+ classes.errorContainer +'" cellspacing="0" cellpadding="0">'+
								'<tr>'+
									'<td>'+
										'<input type="text" name="month" value="--" maxlength="2" />'+
										'<h3>Month</h3>'+
									'</td>'+
									'<td>'+
										'<input type="text" name="day" value="--" maxlength="2" />'+
										'<h3>Day</h3>'+
									'</td>'+
									'<td>'+
										'<input type="text" name="year" value="----" maxlength="4" />'+
										'<h3>Year</h3>'+
									'</td>'+
								'</tr>'+
							'</table>'+
							'<p class="popup-controls"><a id="'+ classes.submitButton +'" href="#" class="button-blue"><span>Submit</span></a></p>'+
						'</form>'+
					'</div>'+
				'</div>',
			invalidAge : '<h3>Sorry, we cannot redirect you to this site.</h3>',
			buttons : '<div id="'+ classes.socialContainer +'">'+
					'<div class="'+ classes.buttonContainer +'">'+
						'<div id="'+ classes.facebookButton +'"></div>'+
						'<div id="'+ classes.facebookPanel +'">'+
							'<a id="'+ classes.facebookLikeButton +'" href="#" name="lid=facebook_like_' + ((window.cto && window.cto.pageName) ? window.cto.pageName : 'general') + '"><span>Like</span></a>'+
							'<a id="'+ classes.facebookShareButton +'" href="http://www.facebook.com/sharer.php?u='+ encodeURIComponent(window.location) +'" name="lid=facebook_share_' + ((window.cto && window.cto.pageName) ? window.cto.pageName : 'general') + '" target="_blank"><span>Share</span></a> '+
						'</div>'+
					'</div>'+
					'<div class="'+ classes.buttonContainer +'">'+
						'<div id="'+ classes.twitterButton +'"></div>'+
						'<div id="'+ classes.twitterPanel +'">'+
							'<a id="'+ classes.twitterFollowButton +'" href="http://twitter.com/#!/tinker_bell" name="lid=twitter_follow" target="_blank"><span>Follow</span></a> '+
							'<a id="'+ classes.twitterTweetButton +'" href="http://twitter.com/share?url='+ encodeURIComponent(window.location) +'" name="lid=twitter_tweet_' + ((window.cto && window.cto.pageName) ? window.cto.pageName : 'general') + '" target="_blank"><span>Tweet</span></a>'+
						'</div>'+
					'</div>'+
				'</div>',
			facebookLikePopup : '<div id="'+ classes.facebookLikePopup +'" class="popup">'+
					'<div id="'+ classes.facebookLikePopupHeader +'"><a href="#">&nbsp;</a>Like this site?</div>'+
					'<iframe src="/fairies/likebtns/main.html?'+ encodeURIComponent(window.location) +'" frameborder="0"></iframe>'+
				'</div>',
			appStorePopup : '<div id="'+ classes.appStorePopup +'" class="popup">'+
					'<h2>You are about to leave Pixie Hollow</h2>'+
					'<div class="popup-content">'+
						'<a href="#" class="popup-close close-button"><span>Close</span></a>'+
						'<p class="center">' +
						'<img src="http://127.0.0.1/franchise/fairies/pixie-hollow/img/content/headers/dname.jpg">'+
						'</p>'+
						'<p class="center">'+
							'You are about to go to the Apple Store where different terms of use and privacy policy will apply. <br> Remember, you need a parent' + "'"+ 's permission to buy anything online.'+
						'</p>'+
						'<p class="center">'+
						'<a href="{link}" class="button-blue"><span>Proceed</span></a> <a href="#" class="button-orange close-button"><span>Go Back</span></a>'+
						'</p>'+						
					'</div>'+
				'</div>' 
		},
		content = $(selectors.content),
		facebookButton,
		twitterButton,
		ageGatePopup,
		appStorePopup,
		facebookLikePopup,
		submitButton,
		monthInput, dayInput, yearInput, errorContainer,
		onGateUnlock;

	content.append(htmlTemplates.buttons);
	appStoreLink = $(selectors.appStoreLink); 
	appStorePopup = $(selectors.appStorePopup); 
	facebookButton = $(selectors.facebookButton); 
	facebookPanel = $(selectors.facebookPanel);
	facebookLikeButton = $(selectors.facebookLikeButton);
	facebookPageLikeButton = $(selectors.facebookPageLikeButton);
	facebookShareButton = $(selectors.facebookShareButton);
	twitterButton = $(selectors.twitterButton);
	twitterPanel = $(selectors.twitterPanel);
	twitterFollowButton = $(selectors.twitterFollowButton);
	twitterTweetButton = $(selectors.twitterTweetButton);

	// Calculate offsets, used for finding if the options panel should be toggled on or off
	updateButtonOffsets();

	// Bind event listeners
	appStoreLink.click(function (e) {  
		e.preventDefault(); 
		htmlTemplates.appStorePopup = htmlTemplates.appStorePopup.replace('{link}',appStoreLink.attr('href'));
		content.append(htmlTemplates.appStorePopup);
		appStorePopup = $(selectors.appStorePopup);
		fairies.popup.toggle(appStorePopup, 'show'); 	
		 
	});
	
	facebookButton.mouseenter(showFacebookPanel);
	facebookButton.mouseleave(onFacebookButtonLeave);
	facebookPanel.mouseleave(onFacebookPanelLeave);
	facebookLikeButton.click(function (e) {  
		showAgeGate(e, function () {
			if(facebookLikePopup === undefined) {
				appendFacebookLikePopup();
			}
			fairies.popup.toggle(facebookLikePopup, 'show'); 			
		});
	});
	
	facebookPageLikeButton.click(function (e) {  
		showAgeGate(e, function () {
			if (facebookPageLikeButton.attr('title')) {
				window.open(facebookPageLikeButton.attr('title'),'_self');
			} 	
		});
	});
	
	facebookShareButton.click(function (e) {
		showAgeGate(e);
	});
	$(selectors.facebookLikePopupHeader + ' a').live('click', function(e) {
		e.preventDefault();
		fairies.popup.toggle(facebookLikePopup, 'hide');
	});

	twitterButton.mouseenter(showTwitterPanel);
	twitterButton.mouseleave(onTwitterButtonLeave);
	twitterPanel.mouseleave(onTwitterPanelLeave);
	twitterFollowButton.click(function (e) {
		showAgeGate(e);
	});
	twitterTweetButton.click(function (e) {
		showAgeGate(e);
	});

	$(window).resize(updateButtonOffsets);

	function showAgeGate(clickEvent, customOnPass) {
		var permission = $.cookie('ph-social-gate');

		switch(permission) {
			case null:
				clickEvent.preventDefault();

				if(ageGatePopup === undefined) {
					appendAgeGatePopup();
				}

				onGateUnlock = (typeof customOnPass == 'function') ? customOnPass : function () {
					window.open($(clickEvent.target).attr('href'), 'phsocial');
				};

				fairies.popup.toggle(ageGatePopup, 'show', function () {
					monthInput.focus();
				});
				break;
			
			case 'passed':
				if(typeof customOnPass === 'function') {
					clickEvent.preventDefault();
					customOnPass();
				}
				break;

			case 'failed':
				clickEvent.preventDefault();
				showAgeGateFail();
				break;
		}

	}

	function appendAgeGatePopup() {
		content.append(htmlTemplates.ageGatePopup);
		ageGatePopup = $(selectors.ageGatePopup);
		submitButton = $(selectors.submitButton);
		monthInput = $(selectors.month);
		dayInput = $(selectors.day);
		yearInput = $(selectors.year);
		errorContainer = $(selectors.errorContainer);
		submitButton.click(onAgeSubmit);
		dayInput.focus(clearDefaultValue);
		monthInput.focus(clearDefaultValue);
		yearInput.focus(clearDefaultValue);
	}

	function appendFacebookLikePopup() {
		content.append(htmlTemplates.facebookLikePopup);
		facebookLikePopup = $(selectors.facebookLikePopup);
	}	

	function showAgeGateFail() {
		$(selectors.ageGateForm).html(htmlTemplates.invalidAge);
		fairies.popup.toggle(ageGatePopup, 'show');
	}

	function showFacebookPanel() {
		facebookPanel.css('display', 'block').stop(true).animate({width: '150px'}, 300, 'swing');
	}

	function hideFacebookPanel() {
		facebookPanel.stop(true).animate({width: '0px'}, 300, 'swing', function () {$(this).css('display', 'none')});
	}

	function showTwitterPanel() {
		twitterPanel.css('display', 'block').stop(true).animate({width: '150px'}, 300, 'swing');
	}

	function hideTwitterPanel() {
		twitterPanel.stop(true).animate({width: '0px'}, 300, 'swing', function () {$(this).css('display', 'none')});
	}

	function clearDefaultValue() {
		var input = $(this);
		if(input.val() === '--' || input.val() === '----') {
			input.val('');
		}
	}

	function updateButtonOffsets() {
		facebookButton.offsets = {
			left : facebookButton.offset().left
		};

		twitterButton.offsets = {
			left : twitterButton.offset().left
		};
	}

	function onFacebookButtonLeave(e) {
		if(facebookButton.offsets.left < e.pageX) {
			hideFacebookPanel();
		}
	}

	function onFacebookPanelLeave(e) {
		if(facebookButton.offsets.left > e.pageX) {
			hideFacebookPanel();
		}
	}

	function onTwitterButtonLeave(e) {
		if(twitterButton.offsets.left < e.pageX) {
			hideTwitterPanel();
		}
	}

	function onTwitterPanelLeave(e) {
		if(twitterButton.offsets.left > e.pageX) {
			hideTwitterPanel();
		}
	}

	function onAgeSubmit(e) {
		var month = parseInt(monthInput.val()),
			day = parseInt(dayInput.val()),
			year = parseInt(yearInput.val()),
			now = new Date();

		e.preventDefault();
		e.stopPropagation();

		$.formError.clear();

		// invalid input
		if(isNaN(month) || isNaN(day) || isNaN(year) || month < 1 || month > 12 || day < 1 || day > 31 || year < 1900 || year > now.getFullYear()) {
			$.formError.displayUnderElement(errorContainer, 'Invalid Birthday');
			return;
		}

		// under 13
		if(new Date(year, month - 1, day).getTime() > new Date(now.getFullYear() - 13, now.getMonth(), now.getDate()).getTime()) {
			$.cookie('ph-social-gate', 'failed', {expires : 1/48});
			showAgeGateFail();
			return;
		}

		// over 13
		$.cookie('ph-social-gate', 'passed');
		fairies.popup.toggle(ageGatePopup, 'hide', function() {
			onGateUnlock();
		});		
	}
})(jQuery);