console.log("i'm chilling in the back 5 ");

let brands = ["nike.com", "apple.com", "walmart.com"];

for (let i=0; i<brands.length; i++){

    chrome.history.search({text: brands[i], maxResults: 10}, function(data) {
        data.forEach(function(page) {
            //console.log(page.url);
        });
    });

}

