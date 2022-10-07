/****************************************************************/
/*  Disney.com Global Flash Detection Light					
/*  Updated 10/22/2008
/*  DO NOT EDIT OR MODIFY WITHOUT QA ENGINEERING APPROVAL
/*  CONTACT QA ENGINEERING FOR ISSUES
/*
/*  USAGE:  Include the script from its location on your page.
/*  Call the DetectFlash method passing it the version you want detected as a string value
/*
/*  Example:
/* 	<script src="http://disney.go.com/detect/scripts/master_flash_light.js" type="text/javascript"></script>
/*	<script type="text/javascript">DetectFlash("9.0.124.0");</script>
/****************************************************************/
var flDetectDomain = window.location.host, flDetectGotFlash = false, flVerString = "", defaultLP = "http://disney.go.com/home/html/index.html", flashVersion="0,0,0,0";
if(!(flDetectDomain.indexOf("disney.go.com")!=-1||flDetectDomain.indexOf("family.go.com")!=-1)){defaultLP = defaultLP.replace("//disney.","//global.");}
if (!document.getElementById) top.location.replace(defaultLP);
function getNAxFlash(){var na_flash="0.0.0.0", regX=new RegExp(/shockwave flash /gi); if(navigator.plugins){for(var i=0; i<navigator.plugins.length; i++) { var plDesc = navigator.plugins[i].description; if(regX.exec(plDesc)) { na_flash = plDesc.replace(regX,""); na_flash = na_flash.replace(/\s/g,""); na_flash = na_flash.replace("r",".");break;}}}return na_flash;}
function getAxFlash(){iVersion = "0.0.0.0"; try{var axObj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");iVersion = axObj.GetVariable("$version").substr(4);iVersion = iVersion.replace(/,/g, ".");}catch(e){} return iVersion;}
function DetectFlash(verNeeded,redirect,override){
	if(!verNeeded){verNeeded = "9";}
	if(typeof verNeeded=="number") verNeeded=verNeeded.toString();
	var gotFlash = false, rDirect = (!redirect) ? (defaultLP + "?flash=false") : redirect;
	var iFlashCm = (navigator.appName.indexOf("Micro") != -1 && (navigator.platform.indexOf("Win") != -1 || navigator.platform.toLowerCase().indexOf("ce") != -1))?getAxFlash():getNAxFlash();
	if(iFlashCm == 0 || iFlashCm == null || iFlashCm == "0"){iFlashCm = "0.0.0.0"}
	flVerString = iFlashCm;
	flashVersion = iFlashCm.replace(".",",");
	var dVer = (verNeeded.indexOf(".")!=-1)?verNeeded.split("."):verNeeded.split(",");
	var cVer = iFlashCm.split(".");
	for(i=0;i<dVer.length;i++){if((parseInt(cVer[i])>parseInt(dVer[i])) && i==0){gotFlash=true;break;}else if(parseInt(cVer[i])==parseInt(dVer[i])){gotFlash=true;}else if(parseInt(cVer[i])<parseInt(dVer[i])){gotFlash=false;break;}}
	if(!gotFlash){if(override==true){return false;}else{retFull=window.location.toString();SetCookieUtil("return_path",retFull);goFlashUpgradeURL(rDirect);}}else{flDetectGotFlash=true;return true;}
}
function CreateInterface(loc,gecko_val,gecko_require){} //Deprecated function
function goFlashUpgradeURL(url){winLoc = window.location.toString();SetCookieUtil("detect_cookie","FL|" + winLoc);location.href=url;}
function SetCookieUtil(name,value,expires,path,domain,secure){document.cookie=name+"="+escape(value)+((expires)?"; expires="+expires.toGMTString():"")+((path)?"; path=" + path : "; path=/")+((domain)?"; domain="+domain : "; domain=.go.com")+((secure)?"; secure":"");}
function GetCookieUtil(name){var result=null,myCookie=" "+document.cookie+";",searchName=" "+name+"=",startOfCookie=myCookie.indexOf(searchName),endOfCookie;if(startOfCookie != -1){startOfCookie+=searchName.length; endOfCookie=myCookie.indexOf(";",startOfCookie);result=unescape(myCookie.substring(startOfCookie,endOfCookie));}return result;}
