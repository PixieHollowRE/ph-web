var mySettings={
	styleBackground:	'000000',
	footerDisplayMode:	'featuredAndLegal',
	footerStyleSet:		'dark'
}

var legalFooterColor = "#FFFFFF";
var footerCustomHeader = "Disney Fairies";
var footerCustomLinks = '<a href="http://pixiehollow.go.com/" class="dolFooterLnk" target="_self" style="font-size:10pt !important;">Create a Fairy</a> | <a href="http://disney.go.com/fairies/sitemap.html" class="dolFooterLnk" style="font-size:10pt !important;">Sitemap</a> | <a href="http://home.disney.go.com/guestservices/disclaimers/redirect?destination=https://signup.cj.com/member/brandedPublisherSignUp.do?air_refmerchantid=3297551" target="_blank" class="dolFooterLnk" style="font-size:10pt !important;">Affiliates</a>';

var footerCustomSytle = "<style>a.dolFooterLnk,a.dolFooterLnk:visited,a.dolFooterLnk:hover,a.dolFooterLnk:active,a.dolFooterSmallLnk,a.dolFooterSmallLnk:visited,a.dolFooterSmallLnk:hover,a.dolFooterSmallLnk:active{color:"+legalFooterColor+" !important;background-color:transparent !important;text-decoration:underline;}a.dolFooterLnkRed,a.dolFooterLnkRed:visited,a.dolFooterLnkRed:hover,a.dolFooterLnkRed:active{color:#FF0000 !important;background-color:transparent !important;text-decoration:underline;}</style>";
var footerCustom = '<div id="legalFooterCustomDiv" style="clear:left;" align="center"><table width="996" cellspacing="0" cellpadding="0" align="center" style="text-align:center; padding:0px; margin:10px 0px; background:transparent none; border:none;"><tbody><tr width="996"><td style="font-family:arial,verdana,helvetica; color:'+legalFooterColor+'; background-color:transparent; text-align:center; font-size:10pt; border:none;" colspan="3"><strong>'+footerCustomHeader+'</strong></td></tr>';
try{if(footerCustomLinks){footerCustom+='<tr width="996"><td style="color:'+legalFooterColor+';">'+footerCustomLinks+'</td></tr>';}}catch(e){}
footerCustom+='</table></div>';
try{if(footerCustomCopyrights){footerCustomCopyrights='<div id="legalFooterCustomCopyrightsDiv" align="center"><table width="996" cellspacing="0" cellpadding="0" align="center" style="text-align:center; padding:0px; margin:10px 0px; background:transparent none; border:none;"><tbody><tr width="100%"><td style="font-family:arial,verdana,helvetica; color:'+legalFooterColor+'; background-color:transparent; text-align:center; font-size:7pt; border:none;" colspan="3">'+footerCustomCopyrights+'</td></tr></table></div>'}}catch(e){};

//Chrome and Footer hacks
var chromeOverride = '<style type="text/css">.gde_chromeExploreButtons {text-align:center;}</style>';
var footerOverride = '<style type="text/css">#gde_footerLegalContainer{text-align:center;}.gde_footerLegalLinks{width:996px !important;margin-left:auto;margin-right:auto;}.gde_footerCopyText{width:996px !important;margin-left:auto;margin-right:auto;}</style>';

// Tracking Function
function embedTrackingPixel(name, src, duration) {
	if (duration && parseInt(duration) > 0) {
		if ($.cookie('ph_pixie_tracking_' + name)) {
			return;
		} else {
			$.cookie('ph_pixie_tracking_' + name, '1', {
				path: '/',
				domain: '.go.com',
				expires: parseInt(duration)
			});
		}
	}

	var image = document.createElement('img');
		image.src = src;
		image.width = 1;
		image.height = 1;
		image.onload = function() { document.body.removeChild(image); };
	document.body.appendChild(image);
}



function loadextfile(f, t){
	if (t=="js"){ //if filename is a external JavaScript file
		var fileref=document.createElement('script')
		fileref.setAttribute("type","text/javascript")
		fileref.setAttribute("src", f)
	} else if (t=="css"){ //if filename is an external CSS file
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", f)
	}
	if (typeof fileref!="undefined"){
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
}
