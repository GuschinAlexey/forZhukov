document.addEventListener("DOMContentLoaded", () => {

    const iframe = [
        {
            "cat" : "Женские журналы",
            "watch": 19486,
            "name" : "Оракул №8",
            "src" : "../foto/cart/1.jpg",
            "izd": "Оракул",
            "iframe" : "https://online.anyflip.com/xopa/nwrr/",
            "str" : "44"
        },
        {
            "cat" : "Сад и огород",
            "watch": 358,
            "name" : "Садовод о огородник №18",
            "src" : "../foto/cart/2.jpg",
            "izd": "Садовод и огородник",
            "iframe" : "https://online.anyflip.com/xopa/nopu/",
            "str" : "68"
        },
        {
            "cat" : "Автомобили",
            "watch": 520,
            "name" : "Авторевю №18 (сентябрь/2022)",
            "src" : "../foto/cart/3.jpg",
            "izd": "Авторевю",
            "iframe" : "https://online.anyflip.com/xopa/pxbq/",
            "str" : "40"
        },
        {
            "cat" : "Бизнес",
            "watch": 369,
            "name" : "Эксперт №34 (август/2022)",
            "src" : "../foto/cart/4.jpg",
            "izd": "Эксперт",
            "iframe" : "https://online.anyflip.com/xopa/kpzw/",
            "str" : "84"
        },
        {
            "cat" : "Кулинария",
            "watch": 406,
            "name" : "На нашей кухне №5 (май/2022)",
            "src" : "../foto/cart/5.jpg",
            "izd": "На нашей кухне",
            "iframe" : "https://online.anyflip.com/xopa/swcw/",
            "str" : "40"
        },
        {
            "cat" : "САД И ОГОРОД",
            "watch": 350,
            "name" : "На нашей кухне №5 (май/2022)",
            "src" : "../foto/cart/6.jpg",
            "izd": "Цветок",
            "iframe" : "https://online.anyflip.com/xopa/frwg/",
            "str" : "32"
        },
        {
            "cat" : "Путешествия и страны",
            "watch": 736,
            "name" : "Вокруг света №6 (сентябрь/2022)",
            "src" : "../foto/cart/7.jpg",
            "izd": "Вокруг света",
            "iframe" : "https://online.anyflip.com/xopa/xxcs/",
            "str" : "130"
        },
        {
            "cat" : "Путешествия и страны",
            "watch": 2514,
            "name" : "За рулём №9 (сентябрь/2022) Россия",
            "src" : "../foto/cart/7.jpg",
            "izd": "За рулём",
            "iframe" : "https://online.anyflip.com/xopa/mjcy/",
            "str" : "100"
        },
    ];



    const Journalses = [
        {
            "foto_one": "../foto/cart/1.jpg",
            "foto_one_opis": "Оракул №8 (август/2022)",
            "foto_one_id": 0,
            "foto_two": "../foto/cart/2.jpg",
            "foto_two_opis": "Садовод и огородник №18",
            "foto_two_id": 1,
            "foto_three": "../foto/cart/3.jpg",
            "foto_three_opis": "Авторевю №18",
            "foto_three_id": 2,
            "foto_four": "../foto/cart/4.jpg",
            "foto_four_opis": "Эксперт №34",
            "foto_four_id": 3,
            "foto_five": "../foto/cart/5.jpg",
            "foto_five_opis": "На нашей кухне №5",
            "foto_five_id": 4,
            "foto_six": "../foto/cart/6.jpg",
            "foto_six_opis": "Цветок №18",
            "foto_six_id": 5,
            "foto_seven": "../foto/cart/7.jpg",
            "foto_seven_opis": "Вокруг света №6",
            "foto_seven_id": 6,
            "foto_eight": "../foto/cart/8.jpg",
            "foto_eight_opis": "За рулём №9",
            "foto_eight_id": 7
        }
    ];
    
    let journals = '';
    const scripts = document.querySelector(".script");

    document.querySelector(".main_header_2").addEventListener("click", () => {
        renderJournals(Journalses[0]);
        journals = document.querySelectorAll('.cart_1');
        console.log(journals);
    });


    function renderJournals(massiv) {
        scripts.innerHTML = "";
        scripts.innerHTML += `
        <div class="cart_01">
        <div class="cart_1" data-id="${massiv.foto_one_id}"><img class="carD_1" src="${massiv.foto_one}"><br><span class="carP_1">${massiv.foto_one_opis}...</span></div>
        <div class="cart_1" data-id="${massiv.foto_two_id}"><img class="carD_1" src="${massiv.foto_two}"><br><span class="carP_1">${massiv.foto_two_opis}...</span></div>
        <div class="cart_1" data-id="${massiv.foto_three_id}"><img class="carD_1" src="${massiv.foto_three}"><br><span class="carP_1">${massiv.foto_three_opis}...</span></div>
        <div class="cart_1" data-id="${massiv.foto_four_id}"><img class="carD_1" src="${massiv.foto_four}"><br><span class="carP_1">${massiv.foto_four_opis}...</span></div>
    </div>
    <div class="cart_01">
        <div class="cart_1" data-id="${massiv.foto_five_id}"><img class="carD_1" src="/${massiv.foto_five}"><br><span class="carP_1">${massiv.foto_five_opis}...</span></div>
        <div class="cart_1" data-id="${massiv.foto_six_id}"><img class="carD_1" src="${massiv.foto_six}"><br><span class="carP_1">${massiv.foto_six_opis}...</span></div>
        <div class="cart_1" data-id="${massiv.foto_seven_id}"><img class="carD_1" src="${massiv.foto_seven}"><br><span class="carP_1">${massiv.foto_seven_opis}...</span></div>
        <div class="cart_1" data-id="${massiv.foto_eight_id}"><img class="carD_1" src="${massiv.foto_eight}"><br><span class="carP_1">${massiv.foto_eight_opis}...</span></div>
    </div>`;
    }
});