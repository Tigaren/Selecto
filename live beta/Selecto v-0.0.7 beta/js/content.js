


    //mottar melding ifra popup.js 
    chrome.runtime.onMessage.addListener(
        function(message, sender, sendResponse) {
            //viss melding mottatt er riktig fortsett
            if( message.txt === "start" ) {
                let not13 = $("td div:contains('13mm foringsnot')");
                let b60 = $("td div:contains('Brannvindu B60')");
                let passiv = $("td div:contains('Passiv Brannprodukt')");
                let est = $("td[aria-colindex='18']:contains('X')");
                let skraaLukk = $("td[aria-colindex='19']:contains('X')");
                let standard = $("td div:contains('Standard 105/80')");
                let skraaFast = $("td[aria-colindex='16']:contains('X')");
                let merknadBand = $("td[aria-colindex='18']:contains('J')");
                //sjekker om sjekkboxene er huked av i popup
                
                function tilbakeStillH8() {
                    not13.css({
                        "color": "black",
                        "font-weight": "normal"
                    });
                    est.css({
                        "color": "black",
                        "font-weight": "normal"
                    });
                    standard.css({
                        "display": "block"
                    });
                    skraaLukk.css({
                        "color": "black",
                        "font-weight": "normal"
                    });
                    b60.css({
                        "color": "black",
                        "font-weight": "normal"
                    });
                    passiv.css({
                        "color": "black",
                        "font-weight": "normal"
                    });
                    skraaFast.css({
                        "color": "black",
                        "font-weight": "normal"
                    });
                    merknadBand.css({
                        "color": "black",
                        "font-weight": "normal"
                    });
                    
                }

                

                function karmFast() {
                    not13.css({
                        "color": "red",
                        "font-weight": "bold"
                    });
                    b60.css({
                        "color": "blue",
                        "font-weight": "bold"
                    });
                    passiv.css({
                        "color": "blue",
                        "font-weight": "bold"
                    });
                    standard.css({
                        "display": "none"
                    });
                    skraaFast.css({
                        "color": "red",
                        "font-weight": "bold"
                    });
                }

                function karmLukk() {
                    not13.css({
                        "color": "red",
                        "font-weight": "bold"
                    });
                    est.css({
                        "color": "red",
                        "font-weight": "bold"
                    });
                    standard.css({
                        "display": "none"
                    });
                    skraaLukk.css({
                        "color": "red",
                        "font-weight": "bold"
                    });
                }

                function kms() {
                    passiv.css({
                        "color": "blue",
                        "font-weight": "bold"
                    });
                    not13.css({
                        "color": "red",
                        "font-weight": "bold"
                    });
                    standard.css({
                        "display": "none"
                    });
                    b60.css({
                        "color": "blue",
                        "font-weight": "bold"
                    });
                    est.css({
                        "color": "red",
                        "font-weight": "bold"
                    });
                }

                //Bandet
                
                function pallingBand() {
                    merknadBand.css({
                        "color": "red",
                        "font-weight": "bold"
                    });
                }
                    
                    if(message.checkbox1) {
                        
                        tilbakeStillH8();
                        karmFast();

                    } else if (message.checkbox2) {
                        
                        tilbakeStillH8();
                        karmLukk();

                    } else if(message.checkbox3){
                        
                        tilbakeStillH8();
                        kms();
                        
                    } else if(message.checkbox4){
                        tilbakeStillH8();
                        pallingBand();

                    } else if(message.checkbox5) {
                        
                        tilbakeStillH8();

                    }
                    
                    


                    

                    
                }
                closePop();
            }
        
    )


   
 
 


//sender melding til popup etter if else er ferdig og kjøre
function closePop() {
    chrome.runtime.sendMessage({mes: "go"}, function(response) {
  });
}








