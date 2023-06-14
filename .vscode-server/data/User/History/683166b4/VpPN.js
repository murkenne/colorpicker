 // create variables to store link URLs
    var page1URL = "https://www.page1.com";
    var page2URL = "https://www.page2.com";
    
    // create function to insert links
    function insertLinks(){
        var link1 = document.createElement("a");
        link1.href = page1URL;
        link1.innerHTML = "Home Page 1";
        document.body.appendChild(link1);

        var link2 = document.createElement("a");
        link2.href = page2URL;
        link2.innerHTML = "Home Page 2";
        document.body.appendChild(link2)
    }

    // call insertLinks function
    insertLinks();

