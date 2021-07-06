console.log("popup is here too");
let name;
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      console.log(response.farewell);
    });
  });


chrome.storage.local.get(['shoeName'], function(result) {
  console.log('shoe model is' + result.shoeName);

  document.getElementById("price").innerHTML = result.shoeName;

});


