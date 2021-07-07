
    //document.getElementById("pdp_product_title").innerHTML = "dododo";


    //document.body.style.backgroundColor = "red";
//    document.title = "This is the new";
  //  let productName = document.getElementById("pdp_product_title").innerHTML;
   // alert(productName);




    
    chrome.storage.local.set({shoeName: document.getElementById("pdp_product_title").innerHTML}, function() {
        console.log('Value is set to ' + document.getElementById("pdp_product_title").innerHTMLe);
      });

      chrome.storage.local.set({shoePic: document.querySelector(".css-viwop1.u-full-width.u-full-height.css-m5dkrx").getAttribute("src")}, function() {
      });

    