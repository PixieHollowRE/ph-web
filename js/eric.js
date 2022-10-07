var today = new Date();
var expire = new Date(today.getTime() - 10);
var oneYear = new Date(today.getTime() + 365 * 24 * 60 * 60 * 1000);
var oneMonth = new Date(today.getTime() + 30 * 24 * 60 *60 * 1000);
var oneWeek = new Date(today.getTime() + 7 * 24 * 60 *60 * 1000);
var twoWeek = new Date(today.getTime() + 14 * 24 * 60 *60 * 1000);
var nonbranded = "http://disney.go.com/detect/nonbranded.html";
//redirect function

//sets the cookie
function SetCookieUtil (name,value,expires,path,domain,secure) {
	document.cookie = name + "=" + escape (value) +	((expires) ? "; expires=" + expires.toGMTString() : "") + ((path) ? "; path=" + path : "; path=/") + ((domain) ? "; domain=" + domain : "; domain=.go.com") +	((secure) ? "; secure" : "");
}

function SetCookieUtilRaw (name,value,expires,path,domain,secure) {
	
	//alert('setting cookie [' + name + '] [' + value + '] before');
	document.cookie = name + "=" + escape (value) +	((expires) ? "; expires=" + expires : "") + ((path) ? "; path=" + path : "; path=/") + ((domain) ? "; domain=" + domain : "; domain=.go.com") +	((secure) ? "; secure" : "");
	//alert(GetCookie('WDIGAGE'));
}

function params(wut,qp,dflt){ dflt=(dflt==null)?'':dflt; try{r=unescape(wut.match(new RegExp(qp+"=+([^&;]*)"))[1]);}catch(qp){r=dflt;} return r; }

function GetCookie(name) {
    var cookieValue = params(document.cookie,name,null);
    return cookieValue;
}


function sanitySet() { 
	document.cookie = "WDIGAGE=1;path=/;domain=.go.com";
}
function sanityClear() { 
	document.cookie = "WDIGAGE=0;path=/;domain=.go.com";
}


//alert('outside' + GetCookie('WDIGAGE'));
//alert('outside' + document.cookie );