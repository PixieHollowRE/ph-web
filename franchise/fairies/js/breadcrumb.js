var mySettings={
	styleBackground:	'040C1F',
	footerDisplayMode:	'featuredAndLegal',
	footerStyleSet:		'dark'
}

var legalFooterColor = "#7E97D6";
var footerCustomHeader = "Disney Fairies";
var footerCustomLinks = '<a href="http://transfer.go.com/cgi/transfer.dll?srvc=dis&goto=http://pixiehollow.go.com/" class="dolFooterLnk" target="_self" style="font-family:arial,verdana,helvetica;font-size:10pt !important;">Create a Fairy</a>  |  <a href="http://disney.go.com/fairies/sitemap.html" class="dolFooterLnk" target="_self" style="font-family:arial,verdana,helvetica;font-size:10pt !important;">Disney Fairies Site Map</a>';

var footerCustomSytle = "<style>a.dolFooterLnk,a.dolFooterLnk:visited,a.dolFooterLnk:hover,a.dolFooterLnk:active,a.dolFooterSmallLnk,a.dolFooterSmallLnk:visited,a.dolFooterSmallLnk:hover,a.dolFooterSmallLnk:active{color:"+legalFooterColor+" !important;background-color:transparent !important;text-decoration:underline;}a.dolFooterLnkRed,a.dolFooterLnkRed:visited,a.dolFooterLnkRed:hover,a.dolFooterLnkRed:active{color:#FF0000 !important;background-color:transparent !important;text-decoration:underline;}</style>";
var footerCustom = '<div id="legalFooterCustomDiv" align="center"><table width="996" cellspacing="0" cellpadding="0" align="center" style="text-align:center; padding:0px; margin:10px 0px; background:transparent none; border:none;"><tbody><tr width="996"><td style="font-family:arial,verdana,helvetica; color:'+legalFooterColor+'; background-color:transparent; text-align:center; font-size:10pt; border:none;" colspan="3"><strong>'+footerCustomHeader+'</strong></td></tr>';
try{if(footerCustomLinks){footerCustom+='<tr width="996"><td style="color:'+legalFooterColor+';">'+footerCustomLinks+'</td></tr>';}}catch(e){}
footerCustom+='</table></div>';
try{if(footerCustomCopyrights){footerCustomCopyrights='<div id="legalFooterCustomCopyrightsDiv" align="center"><table width="996" cellspacing="0" cellpadding="0" align="center" style="text-align:center; padding:0px; margin:10px 0px; background:transparent none; border:none;"><tbody><tr width="100%"><td style="font-family:arial,verdana,helvetica,; color:'+legalFooterColor+'; background-color:transparent; text-align:center; font-size:7pt; border:none;" colspan="3">'+footerCustomCopyrights+'</td></tr></table></div>'}}catch(e){};

//Chrome and Footer hacks
var chromeOverride = '<style type="text/css">.gde_chromeExploreButtons {text-align:center;}a.gde_chromeExploreButton:hover, a.gde_chromeExploreButtons:hover, a.gde_chromePlayButton:hover, a.gde_chromePlayButtons:hover{text-decoration:none;border: none;}</style>';
var footerOverride = '<style type="text/css">#gde_footerContainer { margin-bottom: -20px; }#gde_footerFeaturedContainer{height:auto;}#gde_footerLegalContainer{text-align:center;}.gde_footerLegalLinks{width:996px !important;margin-left:auto;margin-right:auto;}.gde_footerCopyText{width:996px !important;margin-left:auto;margin-right:auto;}</style>';

var bCrumbLevel_1 = "Entertainment";
var bCrumbLevel_2_text = "Disney Fairies";
var bCrumbLevel_2_url = "http://disney.go.com/fairies/index.html";
var bCrumbLevel_3_text = null;
var bCrumbLevel_3_url = null;
