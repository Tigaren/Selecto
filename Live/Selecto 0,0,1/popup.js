//sender melding til cotent.js
  function popup() {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    //meldingen som blir sendt
    let msg = {
      txt: "start",
      checkbox1: $('#mm').is(':checked'),
      checkbox2: $('#b60').is(':checked'),
      checkbox3: $('#pBrann').is(':checked')
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
    if (request.greeting == "hello") {
      setTimeout(function () {
        window.close();
      }, 1000);
    }
   
  });
