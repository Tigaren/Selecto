


    //mottar melding ifa popup.js 
    chrome.runtime.onMessage.addListener(
        function(message, sender, sendResponse) {
            //viss melding mottat er riktig fortsett
            if( message.txt === "start" ) {
                    //sjekker om sjekkboxene er huked av i popup
                    if(message.checkbox1 === true) {
                        $("td div:contains('13mm foringsnot')").css({
                            "color": "red",
                            "font-weight": "bold"
                        });
                    } else {
                        $("td div:contains('13mm foringsnot')").css({
                            "color": "black",
                            "font-weight": "normal"
                            
                        });
                    }

                    if(message.checkbox2 === true){
                        $("td div:contains('Brannvindu B60')").css({
                            "color": "blue",
                            "font-weight": "bold",
                        });
                    } else {
                        $("td div:contains('Brannvindu B60')").css({
                            "color": "black",
                            "font-weight": "normal",
                        });
                    }
                    
                    if(message.checkbox3 === true){
                        $("td div:contains('Passiv Brannprodukt')").css({
                            "color": "blue",
                            "font-weight": "bold",
                        });
                    } else {
                        $("td div:contains('Passiv Brannprodukt')").css({
                            "color": "black",
                            "font-weight": "normal",
                        });
                    }
                    
                    if(message.checkbox4 === true){
                        $("td[colindex='17']:contains('X')").css({
                            "color": "red",
                            "font-weight": "bold",
                        });
                    }else{
                        $("td[colindex='17']:contains('X')").css({
                            "color": "black",
                            "font-weight": "normal",
                        });
                    }
                    
                    if(message.checkbox5 === true){
                        $("td[colindex='18']:contains('X')").css({
                            "color": "red",
                            "font-weight": "bold",
                        });
                    }else{
                        $("td[colindex='18']:contains('X')").css({
                            "color": "black",
                            "font-weight": "normal",
                        });
                    }

                    if(message.checkbox6 === true){
                        $("td div:contains('Standard 105/80')").css({
                            "display": "none",
                        });
                    }else{
                        $("td div:contains('Standard 105/80')").css({
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








