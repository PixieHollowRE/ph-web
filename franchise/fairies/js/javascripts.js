/*
 *  This JS contains various
 *  javascript functions for use in Disney Motion M6
 */

//URL Variable Reader
function params(wut,qp,dflt){ dflt=(dflt==null)?'':dflt; try{r=unescape(wut.match(new RegExp(qp+"=+([^&;]*)"))[1]);}catch(qp){r=dflt;} return r; }


//read and return url variable value
urlVarReader = function(findVar) {
	if (findVar != "hash") {
		var returnVar = params(location.search, findVar, null);
		if (returnVar == null || returnVar == undefined || returnVar == "") {
			returnVar = params(location.hash, findVar, null);
		}
	}
	return returnVar;
}

//set_hbLink function
function appTracking_Set_hBLink(YourLinkID,YourLinkPosition) {
	//alert("YourLinkID:" + "\n" + YourLinkID + "\n\n" + "YourLinkPosition:" + "\n" + YourLinkPosition);
	this.Set_hbLink(YourLinkID, YourLinkPosition);
}

//deliver pop disclaimer
function deliverPopDisclaimer(mLink){
	var popDisclaimer=window.open("","disclaimer","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=370,height=210,top=100,left=150,screenX=180,screenY=100");
	popDisclaimer.document.write ('<html><head><title>Disney.com - Disclaimer</title>');
	popDisclaimer.document.write ('<SCR'+'IPT TYPE="text/javascript">');
	popDisclaimer.document.write ('sendTimer = setTi'+'meout("sendToClientSide()",1500);closeTimer = setT'+'imeout("window.close()",15000);');
	popDisclaimer.document.write ('func'+'tion sendToCl'+'ientSide(){window.op'+'en("'+mLink+'"); this.focus();}');
	popDisclaimer.document.write ('</scr'+'ipt>');
	popDisclaimer.document.write ('</head><body bgcolor="#FFFFFF" text="#0065CE" link="#FFFF80" vlink="#FFFF80" alink="#FFFF80" leftmargin=0 topmargin=0 marginwidth=0 marginheight=0>');
	popDisclaimer.document.write ('<table width="370" height="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><img src="http://disney.go.com/sponsors/images/disclaimer_top.gif" width="370" height="27" alt="" border="0"></td></tr><tr><td><table width="330" border="0" cellspacing="0" cellpadding="0" align="center"><tr><td><br><FONT FACE="Verdana,sans-serif" SIZE="2" COLOR="#0065CE"><b>The web site you are about to link to is not controlled by Disney Online and different terms of use and privacy policy will apply. By proceeding you agree and understand that Disney Online is not responsible for the site you are about to access.</b></FONT><br><br></td></tr></table>');
	popDisclaimer.document.write ('</td></tr><tr bgcolor="#0000CC"><td align="center" height="20"><a href="javascript:window.close();"><FONT FACE="Verdana,sans-serif" SIZE="1" COLOR="#FFFF00"><b>Close this window</b></font></a></td></tr></table>');
	popDisclaimer.document.write ('</body></html>');
	popDisclaimer.document.close();
}

// tokenzone links
function popup(url, id) {
	var win = window.open(url,'tokenzone');
	win.focus();
}

// disclaimer popup script
function openDisclaimer(URL){
	win = window.open('http://disney.go.com/disneyvideos/javascript/disclaimer/disclaimer.html?'+ URL, 'intermediate', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=370,height=210');
}


// Retrieves the current URL
siteUrl = function() { 
	var currentPageUrl = window.location.href; 
	return currentPageUrl;
}