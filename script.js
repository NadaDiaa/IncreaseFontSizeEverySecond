
 
    function resizeText() {

        if (   document.getElementById("text").style.fontSize=="") {
            document.getElementById("text").style.fontSize = "1px";
         }

        document.getElementById("text").style.fontSize=parseFloat( document.getElementById("text").style.fontSize) + 1+"px";
        console.log("text font is : ",document.getElementById("text").style.fontSize)
        if(document.getElementById("text").style.fontSize == "100px"){
            clearInterval(time);
        }
      
      }
      var time =setInterval(() => {
        resizeText()
      }, 1000);