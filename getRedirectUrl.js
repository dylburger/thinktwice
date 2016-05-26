// JS to parse the URL passed to the thinktwice.html page and display it to the user
(function() {
    window.onload = function() {
        var redirectUrl = window.location.search.split("?url=")[1];
        document.getElementById("redirectUrl").innerHTML = redirectUrl;
    };
})();
