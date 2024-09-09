// ==UserScript==
// @name         YouLikeHits
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Kang Creator
// @match        https://www.youlikehits.com/youtube2.php*
// @grant        none
// ==/UserScript==
var curSub = "";
var nowsub = "";
(function() {
    'use strict';
    function checking(){
        nowsub = document.querySelector("#FBLike > table > tbody > tr:nth-child(1) > td").innerText;
        if (curSub == nowsub){
            document.querySelector("#DoesLike > a").click();
            setTimeout(repeat, 5000);
        }
        if (curSub !== nowsub){
            setTimeout(repeat, 1000);
        }
    }
    function repeat(){
        curSub = document.querySelector("#FBLike > table > tbody > tr:nth-child(1) > td").innerText;
        document.querySelector("#FBBox > a").click();
        setTimeout(checking, 25000);
    }

    function starting(){
        document.querySelector("center > a").click();
        setTimeout(repeat, 10000);
    }

    setTimeout(starting, 3000);
})();