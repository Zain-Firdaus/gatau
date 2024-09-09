// ==UserScript==
// @name         YouTube
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Kang Creator
// @match        https://www.youtube.com/channel/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function clss(){
        self.close();
    }
    function runn(){
        document.querySelector("#subscribe-button > ytd-subscribe-button-renderer > tp-yt-paper-button > yt-formatted-string").click();
        setTimeout(clss, 2000);
    }
    setTimeout(runn, 2000);
})();