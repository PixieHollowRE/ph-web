// JavaScript Document

window.onload = function() {
                
             var siblingCount = top.parent.frames.length;
                // if content is located in a frame , load content in new window

             var refreshInFrame = false;
             var fromGame = false;
                loc = top.location.href;
                //console.log("location "+loc + " sibling count"+siblingCount + "hist " + top.history[history.length-1]);
                if (siblingCount > 0 )
                    {
                    // check to see if the url is on the pages array;
                	var inWindow = window.location.href;
                	//console.log(inWindow + " it's on a iFrame " + loc );
                	
                	if (inWindow.indexOf("dname.html")!=-1)
                	{
						refreshInFrame = true;

						if (inWindow.indexOf("nochrome") == -1) {
                		window.location.href = "nochromedname.html" ;
						}
                		
                	}

                	if (inWindow.indexOf("termsofuse.html")!=-1)
                	{
						refreshInFrame = true;

						if (inWindow.indexOf("nochrome") == -1) {
                		window.location.href = "nochrometou.html" ;
						}
                		
                	}
                	
                	if (inWindow.indexOf("speedchat.html")!=-1)
                	{
                		refreshInFrame = true;
						if (inWindow.indexOf("nochrome") == -1) {
						window.location.href = "nochromespeedchat.html";
						}
                	}
			
                    if(inWindow.indexOf("communityhome.html?comingFromGame=true") != -1)
                    {
						
						fromGame = true;
						top.location.href = top.location.href;
						
                    }                     
                   
                 if (top.location != window.location)
                  {	
                   if (!refreshInFrame && !fromGame) {
                     top.location.href = window.location;
             console.log(" opening in top location ")
                   }
                  }
                  }              
              }
