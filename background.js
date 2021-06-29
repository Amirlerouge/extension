function reddenPage() {
    document.body.style.backgroundColor = 'red';
    alert("you will spend money !");
    document.querySelector("nav.z-navicat-header_genderSplit").innerText = "doodoo";

  }
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  });

