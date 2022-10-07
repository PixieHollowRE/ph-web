app_environment = var_app_environment
html_environment = var_html_environment

function gotoContactUs(){
	document.location =  "http://apps.disneyblast.go.com/cgi-bin/mail/generic_mail.cgi?template=pixiehollow/form.tpl"
   }

  function validateForm(theForm){
	setSubmitURL()
	var varAccountError = document.getElementById('error_accountname');
	var varDescriptionError = document.getElementById('error_description');
	var varEmailError = document.getElementById('error_email');
	var varAttachError = document.getElementById('fileattachalert');

	varEmailError.className = "DisplayNone"
	varEmailError.style.visibility = "hidden"
	varAttachError.className = "DisplayNone"
	varAttachError.style.visibility = "hidden"
	varAccountError.className = "DisplayNone"
	varAccountError.style.visibility = "hidden"
	varDescriptionError.className = "DisplayNone"
	varDescriptionError.style.visibility = "hidden"
	
   
    var varFieldsToCheck = ["description","custom_fields[10]","custom_fields[14]"]

    var varReturn = true
    for (var i=0;i<varFieldsToCheck.length;i++){
	    var itemToCheck=document.report_form[varFieldsToCheck[i]]

	    if ((itemToCheck.value==null)||(itemToCheck.value=="")){
		errorDetails(document.report_form, varFieldsToCheck[i], true)
	      varReturn =  false
	    }

	      if (varFieldsToCheck[i] == "description"){
		       if ((itemToCheck.value==null)||(itemToCheck.value=="")){
		       
			varDescriptionError.className = "DisplayBlock"
			varDescriptionError.style.visibility = "visible"
		       
		       }
	      
	      }
	      if (varFieldsToCheck[i] == "custom_fields[14]"){
	      
		       if ((itemToCheck.value==null)||(itemToCheck.value=="")){
		       
		       varAccountError.className = "DisplayBlock"
			varAccountError.style.visibility = "visible"
		       
		       }
	      
	      }
	    
	    if (varFieldsToCheck[i] == "custom_fields[10]"){
		    if (echeck(itemToCheck.value)==false){
		      //emailID.value=""
		      //itemToCheck.focus()
		      var varEmailError = document.getElementById('error_email');
		      varEmailError.className = "DisplayBlock"
			varEmailError.style.visibility = "visible"
		      
		      varReturn =  false
		    }
	    }
	    if (varReturn == true){
		    errorDetails(document.report_form, varFieldsToCheck[i], false)
	    }

	}
	
	var varAttachCheck = checkAttachments(theForm["file[]_1"].value, theForm["file[]_2"].value,"")
	// return false;
	if (!varAttachCheck){
		varAttachError.className = "DisplayBlock"
		varAttachError.style.visibility = "visible"
		varReturn =  false
	}
	//alert("WOULD HAVE RETURNED ="+varReturn)
	//return false
	
	//if (document.location.toString().indexOf("apps.pirates.go.com/pirates/v3")>-1){
	/*
	if (document.location.toString().indexOf("download.test.piratesonline.com")>-1){
		df=document.forms["report_form"];
		df.action="http://download.test.piratesonline.com/bugSubmit/forward.php?site=test&post_form=yes"
	
	}
	*/
	
	return varReturn
	//return false;
   }
   
   function getBrowserInfo(){
	var varText = ("BROWSER="+whichBrs());
	varText += ("\rUSERAGENT="+ navigator.userAgent+"\r");
	//varText += ("\rAPPVERSION="+ navigator.appVersion+"\r");
	return varText;
   }
   
   
   function setSubmitURL(){
	df=document.forms["report_form"];
	df.action="http://"+app_environment+"logsubmit/post.php"
	return true;
   }
   
      function gotoEnvironURL(xpage){
	document.location = "http://"+html_environment + xpage
   }


   function back_button(){
	history.go(-1)
   }
  //
  function onSetLogs(xLog){
	
	var varLog = getBrowserInfo();
	varLog += xLog;
	var varLogField = document.report_form["custom_fields[8]"];	
	varLogField.value = varLog; 

  }
  
//-- report - a - bug error checking
  function echeck(str) {

    var at="@"
    var dot="."
    var lat=str.indexOf(at)
    var lstr=str.length
    var ldot=str.indexOf(dot)
    var messageText = "The e-mail address provided is not in the form 'xxx@xxx.xxx'";
    if (str == "xxx@xxx.xxx") {
      // alert(messageText)
       return false
    }

    if (str.indexOf(at)==-1){
      // alert(messageText)
       return false
    }

    if (str.indexOf(at)==-1 || str.indexOf(at)==0 || str.indexOf(at)==lstr){
       //alert(messageText)
       return false
    }

    if (str.indexOf(dot)==-1 || str.indexOf(dot)==0 || str.indexOf(dot)==lstr){
      // alert(messageText)
        return false
    }

     if (str.indexOf(at,(lat+1))!=-1){
      // alert(messageText)
        return false
     }

     if (str.substring(lat-1,lat)==dot || str.substring(lat+1,lat+2)==dot){
      // alert(messageText)
        return false
     }

     if (str.indexOf(dot,(lat+2))==-1){
       //alert(messageText)
        return false
     }

     if (str.indexOf(" ")!=-1){
      // alert(messageText)
       return false
     }

     return true
  }
  function getFormElement(f, field_name, num)
  {
      var elements = document.getElementsByName(field_name);
      var y = 0;
      for (var i = 0; i < elements.length; i++) {
          if (f != elements[i].form) {
              continue;
          }
          if (num != null) {
              if (y == num) {
                  return elements[i];
              }
              y++;
          } else {
              return elements[i];
          }
      }
      return false;
}
  function getPageElement(id)
  {
      if (document.getElementById) {
          return document.getElementById(id);
      } else if (document.all) {
          return document.all[id];
      }
}
  //
  //
  function errorDetails(f, field_name, show)
  {
      var field = getFormElement(f, field_name);
      var icon = getPageElement('error_icon_' + field_name);
      if (icon == null) {
          return false;
      }
      if (show) {
          field.style.backgroundColor = '#FF9999';
         // icon.style.visibility = 'visible';
         // icon.width = 14;
         // icon.height = 14;
      } else {
          field.style.backgroundColor = '#FFFFFF';
          //icon.style.visibility = 'hidden';
          //icon.width = 1;
         // icon.height = 1;
      }
}
//
//

function checkAttachments(xAttach1,xAttach2, xAttach3){
	xAttach1 = xAttach1.toLowerCase()
	xAttach2 = xAttach2.toLowerCase()
	xAttach3 = xAttach3.toLowerCase()
	//alert("CALLED checkAttachments: xAttach1="+xAttach1+" xAttach2="+xAttach2)
	
	var varAcceptTypes = ".jpg, .gif, .BMP, .png, .log, .doc, .txt"
	var varReturn = true
	
	if (xAttach1 != "" && xAttach1 != " "){
	
		var varTypePos = xAttach1.lastIndexOf(".")
		var varType = xAttach1.substring(varTypePos)
	
	
		if (varAcceptTypes.indexOf(varType)>-1){
			varReturn = true

		}else{
		return false;

		}
	}
	
	if (xAttach2 != "" && xAttach2 != " "){
				
		var varTypePos = xAttach2.lastIndexOf(".")
		var varType = xAttach2.substring(varTypePos)


		if (varAcceptTypes.indexOf(varType)>-1){
			return varReturn;

		}else{
		return false;

		}

	}else{

		return varReturn;
	}
	
	if (xAttach3 != "" && xAttach3 != " "){
				
		var varTypePos = xAttach3.lastIndexOf(".")
		var varType = xAttach3.substring(varTypePos)


		if (varAcceptTypes.indexOf(varType)>-1){
			return varReturn;

		}else{
		return false;

		}

	}else{

		return varReturn;
	}


}
