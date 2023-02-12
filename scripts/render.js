document.addEventListener("DOMContentLoaded", () => {

    const iframe = [
        {
            "cat" : "Женские журналы",
            "watch": 19486,
            "name" : "Оракул №8",
            "src" : "../foto/cart/1.jpg",
            "izd": "Оракул",
            "iframe" : ""
        }
    ]



    const Journalses = [
        {
            "foto_one": "../foto/cart/1.jpg",
            "foto_one_opis": "",
            "foto_one_id": 0,
            "foto_two": "",
            "foto_two_opis": "",
            "foto_two_id": 1,
            "foto_three": "",
            "foto_three_opis": "",
            "foto_three_id": 2,
            "foto_four": "",
            "foto_four_opis": "",
            "foto_four_id": 3,
            "foto_five": "",
            "foto_five_opis": "",
            "foto_five_id": 4,
            "foto_six": "",
            "foto_six_opis": "",
            "foto_six_id": 5,
            "foto_seven": "",
            "foto_seven_opis": "",
            "foto_seven_id": 6,
            "foto_eight": "",
            "foto_eight_opis": "",
            "foto_eight_id": 7,
            "foto_nine": "",
            "foto_nine_opis": "",
            "foto_nine_id": 8,
            "foto_ten": "",
            "foto_ten_opis": "",
            "foto_ten_id": 9,
            "foto_eleven": "",
            "foto_eleven_opis": "",
            "foto_eleven_id": 10,
            "foto_twelve": "",
            "foto_twelve_opis": "",
            "foto_twelve_id": 11
        }
    ];
    
    let journals = '';
    const scripts = document.querySelector(".script");

    document.querySelector(".main_header_2").addEventListener("click", () => {
        renderJournals(Journalses[0]);
        journals = document.querySelectorAll('cart_1');
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
        <div class="cart_1" data-id="${massiv.foto_eight_id}"><img class="carD_1" src="${massiv.eight}"><br><span class="carP_1">${massiv.foto_eight_opis}...</span></div>
    </div>
    <div class="cart_01">
        <div class="cart_1" data-id="${massiv.foto_nine_id}"><img class="carD_1" src="${massiv.foto_nine}"><br><span class="carP_1">${massiv.foto_nine_opis}...</span></div>
        <div class="cart_1" data-id="${massiv.foto_ten_id}"><img class="carD_1" src="${massiv.foto_ten}"><br><span class="carP_1">${massiv.foto_ten_opis}...</span></div>
        <div class="cart_1" data-id="${massiv.foto_eleven_id}"><img class="carD_1" src="${massiv.foto_eleven}"><br><span class="carP_1">${massiv.foto_eleven_opis}...</span></div>
        <div class="cart_1" data-id="${massiv.foto_twelve_id}"><img class="carD_1" src="${massiv.foto_twelve}"><br><span class="carP_1">${massiv.foto_twelve_opis}...</span></div>
    </div>`;
    }
});