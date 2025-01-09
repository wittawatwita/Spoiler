document.addEventListener("DOMContentLoaded", () => {
    const books = [
        { 
            title: "ขอต้อนรับสู่ห้องเรียนนิยม (เฉพาะ) ยอดคน(ฉบับนิยาย)", 
            image: "https://cdn-local.mebmarket.com/meb/server1/161106/Thumbnail/book_detail_large.gif?5", 
            link: "ห้องเรียนนิยม.html"
        },
        { 
            title: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว wn", 
            image: "https://img.readnovelfull.com/thumb/t-300x439/Tensei-Shitara-Slime-Datta-Ken-NCAt3AedvR.jpg", 
            link: "slime.html"
        }
    ];

    const bookGallery = document.getElementById("bookGallery");

    // Populate book gallery
    books.forEach((book) => {
        const card = document.createElement("div");
        card.className = "book-card";
        card.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <button onclick="location.href='${book.link}'">กด</button>
        `;
        bookGallery.appendChild(card);
    });
});
