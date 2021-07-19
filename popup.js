console.log("popup is here too");
let name;
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
      //console.log(response.farewell);
    });
  });



  


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    document.getElementById("price").innerHTML = request.shoeName;
    sendResponse({farewell: "goodbye"});
  }
);


chrome.storage.local.get(['shoePic'], function(result) {

  document.getElementById("myImg").src = result.shoePic;


});


    

let api_age = new URL("https://api.agify.io/?name=");
async function getAge (person){


  api_age.searchParams.set("name",person);
  const response = await fetch(api_age)
  const data = await response.json();
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! you are ?" + data.age + " old";
 


}
document.getElementById("clickMe").onclick = function getName() {
  let person = prompt("Please enter your name : ", "Your Name");
  if (person != null) {
   
  }
  getAge(person);
  
}
