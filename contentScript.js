    

chrome.runtime.sendMessage({shoeName: document.getElementById("pdp_product_title").innerHTML}, function(response) {
  console.log(response.farewell);
});

  

    chrome.storage.local.set({shoePic: document.querySelector(".css-viwop1.u-full-width.u-full-height.css-m5dkrx").getAttribute("src")}, function() {
    });
