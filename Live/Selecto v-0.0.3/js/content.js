


    //mottar melding ifa popup.js 
    chrome.runtime.onMessage.addListener(
        function(message, sender, sendResponse) {
            //viss melding mottat er riktig fortsett
            if( message.txt === "start" ) {
                let not = $("td div:contains('13mm foringsnot')");
                let b60 = $("td div:contains('Brannvindu B60')");
                let passiv = $("td div:contains('Passiv Brannprodukt')");
                let est = $("td[aria-colindex='18']:contains('X')");
                let skraaLukk = $("td[aria-colindex='19']:contains('X')");
                let standard = $("td div:contains('Standard 105/80')");
                let skraaFast = $("td[aria-colindex='16']:contains('X')")
                    //sjekker om sjekkboxene er huked av i popup
                    if(message.checkbox1 === true) {
                        not.css({
                            "color": "red",
                            "font-weight": "bold"
                        });
                    } else {
                        not.css({
                            "color": "black",
                            "font-weight": "normal"
                            
                        });
                    }

                    if(message.checkbox2 === true){
                        b60.css({
                            "color": "blue",
                            "font-weight": "bold",
                        });
                    } else {
                        b60.css({
                            "color": "black",
                            "font-weight": "normal",
                        });
                    }
                    
                    if(message.checkbox3 === true){
                        passiv.css({
                            "color": "blue",
                            "font-weight": "bold",
                        });
                    } else {
                        passiv.css({
                            "color": "black",
                            "font-weight": "normal",
                        });
                    }
                    
                    if(message.checkbox4 === true){
                        skraaFast.css({
                            "color": "red",
                            "font-weight": "bold",
                        });
                    } else {
                        skraaFast.css({
                            "color": "black",
                            "font-weight": "normal",
                        });
                    }
                    
                    if(message.checkbox5 === true){
                        est.css({
                            "color": "red",
                            "font-weight": "bold",
                        });
                    }else{
                        est.css({
                            "color": "black",
                            "font-weight": "normal",
                        });
                    }
                    
                    if(message.checkbox6 === true){
                        skraaLukk.css({
                            "color": "red",
                            "font-weight": "bold",
                        });
                    }else{
                        skraaLukk.css({
                            "color": "black",
                            "font-weight": "normal",
                        });
                    }

                    if(message.checkbox7 === true){
                        standard.css({
                            "display": "none",
                        });
                    }else{
                        standard.css({
                            "display": "block",
                        });
                    }

                    
                }
                /* closePop(); */
            }
        
    )


   
//funksjon som lager border på alle div elementer
//som er etter td element som man trykker på
/* changeCss(".border", "border: 2px solid red"); */

/* $( "td div" ).click(function() {
    $( this ).toggleClass( ".border" );
    });

  function changeCss(className, classValue) {
    // we need invisible container to store additional css definitions
    var cssMainContainer = $('#css-modifier-container');
    if (cssMainContainer.length == 0) {
        var cssMainContainer = $('<div id="css-modifier-container"></div>');
        cssMainContainer.hide();
        cssMainContainer.appendTo($('body'));
    }

    // and we need one div for each class
    classContainer = cssMainContainer.find('div[data-class="' + className + '"]');
    if (classContainer.length == 0) {
        classContainer = $('<div data-class="' + className + '"></div>');
        classContainer.appendTo(cssMainContainer);
    }

    // append additional style
    classContainer.html('<style>' + className + ' {' + classValue + '}</style>');
}  
 */


//sender melding til popup etter if else er ferdig og kjøre
/* function closePop() {
    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  });
} */








