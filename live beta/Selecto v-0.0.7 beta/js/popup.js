//sender melding til cotent.js
  function popup() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    //meldingen som blir sendt
    let msg = {
      txt: "start",
      checkbox1: $('#fast').is(':checked'),
      checkbox2: $('#lukk').is(':checked'),
      checkbox3: $('#kms').is(':checked'),
      checkbox4: $('#band').is(':checked'),
      checkbox5: $('#null').is(':checked'),
      /* checkbox6: $('#skraa').is(':checked'),
      checkbox7: $('#standard').is(':checked') */
    }
    chrome.tabs.sendMessage(activeTab.id, msg);
   });
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("aktiver").addEventListener("click", popup);
});

//lukker popup box den virker 
// men for en feil melding rettes senere
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.mes == "go") {
      sendResponse("all good");
        setTimeout(() => {
          window.close();
        }, 1500);
       
      }
    });