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
            "cat" : "АВТОМОБИЛИ",
            "watch": 351,
            "name" : "За рулём №9 (сентябрь/2022) Россия",
            "src" : "../foto/cart/8.jpg",
            "izd": "За рулём",
            "iframe" : "https://online.anyflip.com/xopa/mjcy/",
            "str" : "36"
        },
        {
            "cat" : "Здоровье",
            "watch": 251,
            "name" : "За рулём №9 (сентябрь/2022) Россия",
            "src" : "../foto/cart/9.jpg",
            "izd": "Народный доктор",
            "iframe" : "https://online.anyflip.com/xopa/fuow/",
            "str" : "116"
        },
        {
            "cat" : "ТАЙНЫ-ЗАГАДКИ",
            "watch": 641,
            "name" : "Все загадки мира №3 / 2021",
            "src" : "../foto/cart/10.jpg",
            "izd": "Эксперт",
            "iframe" :"https://online.anyflip.com/nomom/mzbg/index.html",
            "str" : "36"
        },
        {
            "cat" : "БИЗНЕС",
            "watch": 317,
            "name" : "Эксперт №30-33 (июль-август/2022)",
            "src" : "../foto/cart/11.jpg",
            "izd": "Эксперт",
            "iframe" :"https://online.anyflip.com/xopa/mzbj/",
            "str" : "124"
        },
        {
            "cat" : "ЖЕНСКИЕ ЖУРНАЛЫ",
            "watch": 29426,
            "name" : "Оракул №11 (ноябрь/2022)",
            "src" : "../foto/cart/12.jpg",
            "izd": "Оракул",
            "iframe" :"https://online.anyflip.com/xopa/bung/",
            "str" : "44"
        },
        {
            "cat" : "АВТОМОБИЛИ",
            "watch": 511,
            "name" : "Авторевю №15 (август/2022)",
            "src" : "../foto/cart/13.jpg",
            "izd": "Авторевю",
            "iframe" :"https://online.anyflip.com/xopa/ghjq/",
            "str" : "40"
        },
        {
            "cat" : "БИЗНЕС",
            "watch": 333,
            "name" : "Эксперт №26 (июнь-июль/2022)",
            "src" : "../foto/cart/14.jpg",
            "izd": "Эксперт",
            "iframe" :"https://online.anyflip.com/xopa/tmeb/",
            "str" : "92"
        },
        {
            "cat" : "ЖЕНСКИЕ ЖУРНАЛЫ",
            "watch": 351,
            "name" : "Таинственные истории №20 (сентябрь/2022)",
            "src" : "../foto/cart/15.jpg",
            "izd": "Таинственные истории",
            "iframe" :"https://online.anyflip.com/xopa/kqle/",
            "str" : "36"
        },
        {
            "cat" : "АВТОМОБИЛИ",
            "watch": 615,
            "name" : "5 колесо №5-6 (май- июнь/2022) Россия",
            "src" : "../foto/cart/16.jpg",
            "izd": "5 колесо",
            "iframe" :"https://online.anyflip.com/xopa/eats/",
            "str" : "100"
        },
        {
            "cat" : "БИЗНЕС",
            "watch": 582,
            "name" : "Мир новостей №14 (март/2022)",
            "src" : "../foto/cart/17.jpg",
            "izd": "Мир новостей",
            "iframe" :"https://online.anyflip.com/xopa/ygui/",
            "str" : "24"
        },
        {
            "cat" : "ЖЕНСКИЕ ЖУРНАЛЫ",
            "watch": 1449,
            "name" : "Моя Семья №15 (апрель/2022)",
            "src" : "../foto/cart/18.jpg",
            "izd": "Моя семья",
            "iframe" :"https://online.anyflip.com/xopa/ssaj/",
            "str" : "32"
        },
        {
            "cat" : "Бизнес",
            "watch": 380,
            "name" : "Аргументы и факты №28 (июль/2022)",
            "src" : "../foto/cart/19.jpg",
            "izd": "Моя семья",
            "iframe" :"https://online.anyflip.com/xopa/ssaj/",
            "str" : "56"
        },
        {
            "cat" : "БИЗНЕС",
            "watch": 455,
            "name" : "Аргументы и факты №31 (август/2022)",
            "src" : "../foto/cart/20.jpg",
            "izd": "Аргументы и факты",
            "iframe" :"https://online.anyflip.com/xopa/rgzn/",
            "str" : "48"
        },
        {
            "cat" : "ЖУРНАЛЫ ПРО ЗДОРОВЬЕ",
            "watch": 2323,
            "name" : "Вестник ЗОЖ №17 Сентябрь 2021 - (Журнал)",
            "src" : "../foto/cart/21.jpg",
            "izd": "Вестник ЗОЖ",
            "iframe" :"https://online.pubhtml5.com/eezj/hxgt/",
            "str" : "40"
        },
        {
            "cat" : "ЗДОРОВЬЕ",
            "watch": 326,
            "name" : "Секреты здоровья №19 (октябрь/2022)",
            "src" : "../foto/cart/22.jpg",
            "izd": "Секреты здоровья",
            "iframe" :"https://online.anyflip.com/xopa/rhvb/",
            "str" : "32"
        },
        {
            "cat" : "ЖЕНСКИЕ ЖУРНАЛЫ",
            "watch": 18782,
            "name" : "Оракул №9 (сентябрь/2022)",
            "src" : "../foto/cart/23.jpg",
            "izd": "Оракул",
            "iframe" :"https://online.anyflip.com/xopa/ghtp/",
            "str" : "44"
        },
        {
            "cat" : "ЖЕНСКИЕ ЖУРНАЛЫ",
            "watch": 1077,
            "name" : "Моя Семья №12 (март/2022)",
            "src" : "../foto/cart/24.jpg",
            "izd": "Моя семья",
            "iframe" :"https://online.anyflip.com/xopa/cywl/",
            "str" : "32"
        }
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
        },
        {
            "foto_one": "../foto/cart/9.jpg",
            "foto_one_opis": "Народный доктор №15",
            "foto_one_id": 8,
            "foto_two": "../foto/cart/10.jpg",
            "foto_two_opis": "Все загадки мира №3",
            "foto_two_id": 9,
            "foto_three": "../foto/cart/11.jpg",
            "foto_three_opis": "Эксперт №30-33",
            "foto_three_id": 10,
            "foto_four": "../foto/cart/12.jpg",
            "foto_four_opis": "Оракул №11",
            "foto_four_id": 11,
            "foto_five": "../foto/cart/13.jpg",
            "foto_five_opis": "Авторевю №15",
            "foto_five_id": 12,
            "foto_six": "../foto/cart/14.jpg",
            "foto_six_opis": "Эксперт №26",
            "foto_six_id": 13,
            "foto_seven": "../foto/cart/15.jpg",
            "foto_seven_opis": "Таинственные истории",
            "foto_seven_id": 14,
            "foto_eight": "../foto/cart/16.jpg",
            "foto_eight_opis": "5 колесо №5-6",
            "foto_eight_id": 15
        },
        {
            "foto_one": "../foto/cart/17.jpg",
            "foto_one_opis": "Мир новостей №14",
            "foto_one_id": 16,
            "foto_two": "../foto/cart/18.jpg",
            "foto_two_opis": "Моя Семья №15",
            "foto_two_id": 17,
            "foto_three": "../foto/cart/19.jpg",
            "foto_three_opis": "Аргументы и факты №28",
            "foto_three_id": 18,
            "foto_four": "../foto/cart/20.jpg",
            "foto_four_opis": "Аргументы и факты №31",
            "foto_four_id": 19,
            "foto_five": "../foto/cart/21.jpg",
            "foto_five_opis": "Вестник ЗОЖ №17",
            "foto_five_id": 20,
            "foto_six": "../foto/cart/22.jpg",
            "foto_six_opis": "Секреты здоровья №19",
            "foto_six_id": 21,
            "foto_seven": "../foto/cart/23.jpg",
            "foto_seven_opis": "Оракул №9",
            "foto_seven_id": 22,
            "foto_eight": "../foto/cart/24.jpg",
            "foto_eight_opis": "Моя Семья №12",
            "foto_eight_id": 23
        }
    ];
    
    let journals = '';
    const scripts = document.querySelector(".script");

    document.querySelector(".script_one_triger").addEventListener("click", () => {
        renderJournals(Journalses[0]);
        
    });

    document.querySelector(".script_one_triger_one").addEventListener("click", () => {
        renderJournals(Journalses[0]);
    });

    document.querySelector(".script_two_triger_two").addEventListener("click", () => {
        renderJournals(Journalses[1]);
    });

    document.querySelector(".script_two_triger").addEventListener("click", () => {
        renderJournals(Journalses[1]);
    });

    document.querySelector(".script_three_triger").addEventListener("click", () => {
        renderJournals(Journalses[2]);
    });

    document.querySelector(".script_three_triger_three").addEventListener("click", () => {
        renderJournals(Journalses[2]);
    });

    renderJournals(Journalses[1]);


    async function renderJournals(massiv) {
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
    document.querySelector('.main_1').style.height = 1100 + "px";
    journals = document.querySelectorAll('.cart_1');
    console.log(journals);
    journals.forEach(e => {
         e.addEventListener('click', event => {
            renderJournals(e.dataset.id);
        });
    });

    
    function renderJournals(id) {
        scripts.innerHTML = "";
        scripts.innerHTML += `
        <div class="Imain_jur">
                <img class="jur" src="${iframe[id].src}">
                <div class="Imain"><br><br><br>
                    <div class="zag_I">
                        <span class="zag">${iframe[id].name} (август/2022)</span>
                    </div>
                    <div class="popa_bol">
                        <div class="raid_I"><span class="Ilaik">
                            Просмотров: ${iframe[id].watch} </span>
                        </div>
                        <div class="left_I">
                            <span class="Ilaik">${iframe[id].izd}</span>
                        </div>
                    </div>
                    <div class="Iopisal2">
                        <span class="text_css">
                            <hr>Категория: ${iframe[id].cat} <br>Издание: ${iframe[id].izd} <br> Страниц: ${iframe[id].str} <br>Просмотров: ${iframe[id].watch}
                        </span>
                    </div><hr>
                    </div>
                </div>
            </div>`;
        scripts.innerHTML += `<iframe src="${iframe[id].iframe}" style="width: 100%; height: 700px" allowfullscreen=""></iframe>`
        document.querySelector('.main_1').style.height = 1500 + "px";
        document.querySelector('.main_1').style.marginTop = 50 + "px";
    }
}; 
});