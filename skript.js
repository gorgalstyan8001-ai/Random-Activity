const activities = {

    ru: {

        all: [
            "Посмотреть фильм",
            "Почитать книгу",
            "Послушать музыку",
            "Сделать зарядку",
            "Пойти на прогулку",
            "Изучить что-то новое",
            "Попробовать новый рецепт",
            "Посмотреть интересное видео",
            "Позвонить другу",
            "Навести порядок",
            "Выучить новый факт",
            "Попробовать новый навык"
        ],

        home: [
            "Убраться в комнате",
            "Приготовить еду",
            "Посмотреть сериал",
            "Сделать перестановку",
            "Попробовать новый рецепт",
            "Почитать книгу",
            "Организовать вещи",
            "Сделать домашнюю тренировку",
            "Поиграть в настольную игру",
            "Послушать подкаст"
        ],

        alone: [
            "Почитать в тишине",
            "Медитировать 10 минут",
            "Записать свои цели",
            "Изучить новую тему",
            "Посмотреть документальный фильм",
            "Попрактиковать новый навык",
            "Сделать план на неделю",
            "Послушать музыку в наушниках",
            "Порисовать",
            "Подумать о новых идеях"
        ],

        friends: [
            "Сыграть в футбол",
            "Посмотреть фильм вместе",
            "Поиграть в игры",
            "Сходить погулять",
            "Сходить в кафе",
            "Поговорить на интересные темы",
            "Сделать совместное фото",
            "Поиграть в настольные игры",
            "Устроить мини-соревнование",
            "Попробовать новое место"
        ],

        outside: [
            "Прогуляться в парке",
            "Покататься на велосипеде",
            "Сходить в новое место",
            "Посмотреть закат",
            "Поиграть на улице",
            "Сделать фотографии",
            "Устроить небольшую прогулку",
            "Исследовать район",
            "Посидеть на свежем воздухе",
            "Сходить за кофе"
        ],

        sport: [
            "Сделать тренировку",
            "Побегать 20 минут",
            "Сделать растяжку",
            "Поиграть в футбол",
            "Поплавать",
            "Сделать упражнения на пресс",
            "Попробовать новый спорт",
            "Устроить челлендж",
            "Потренировать силу",
            "Сделать отжимания"
        ],

        games: [
            "Поиграть в новую игру",
            "Пройти новую миссию",
            "Попробовать другой жанр игры",
            "Сыграть с друзьями",
            "Устроить игровой вечер",
            "Изучить новую механику",
            "Пройти сложный уровень",
            "Попробовать старую классику",
            "Создать новый профиль",
            "Поиграть для отдыха"
        ],

        movies: [
            "Посмотреть новый фильм",
            "Пересмотреть любимый фильм",
            "Открыть новый жанр",
            "Посмотреть триллер",
            "Посмотреть комедию",
            "Посмотреть драму",
            "Посмотреть документалку",
            "Посмотреть мультфильм",
            "Посмотреть научно-фантастический фильм",
            "Устроить кинофестиваль"
        ],

        music: [
            "Слушать новый альбом",
            "Создать плейлист",
            "Открыть нового артиста",
            "Слушать подкаст",
            "Пойти на концерт",
            "Изучить историю музыки",
            "Слушать разные жанры",
            "Записать кавер",
            "Слушать классическую музыку",
            "Устроить караоке"
        ],

        food: [
            "Приготовить что-то новое",
            "Заказать доставку",
            "Попробовать новый ресторан",
            "Сделать десерт",
            "Выучить новый рецепт",
            "Устроить пикник",
            "Попробовать уличную еду",
            "Испечь что-нибудь",
            "Сделать смузи",
            "Попробовать фьюжн кухню"
        ],

        study: [
            "Выучить новый язык",
            "Прочитать статью",
            "Посмотреть образовательное видео",
            "Пройти онлайн курс",
            "Прочитать учебник",
            "Сделать конспекты",
            "Решить задачи",
            "Посмотреть TED talk",
            "Изучить новый навык",
            "Прочитать научные статьи"
        ],

        creative: [
            "Нарисовать что-нибудь",
            "Написать рассказ",
            "Сочинить музыку",
            "Сделать коллаж",
            "Вязать или шить",
            "Сделать керамику",
            "Создать цифровое искусство",
            "Написать стихи",
            "Создать дизайн",
            "Сделать поделку"
        ],

        travel: [
            "Спланировать путешествие",
            "Исследовать направление",
            "Посмотреть фото путешествий",
            "Прочитать блог путешественника",
            "Узнать о новой стране",
            "Посмотреть видео путешествий",
            "Составить список желаний",
            "Забронировать жилье",
            "Выучить местные фразы",
            "Исследовать карты"
        ],

        relax: [
            "Поспать",
            "Принять ванну",
            "Сделать массаж",
            "Слушать релаксирующую музыку",
            "Заниматься йогой",
            "Медитировать",
            "Почитать книгу",
            "Сидеть и дышать",
            "Вести дневник",
            "Смотреть на облака"
        ],

        challenge: [
            "Сделать 100 отжиманий",
            "Прочитать 50 страниц",
            "День без телефона",
            "Выучить что-то за час",
            "Тренировка 1 час",
            "Челлендж на 30 дней",
            "Написать 1000 слов",
            "Поговорить с незнакомцем",
            "Попробовать что-то новое",
            "Завершить сложную задачу"
        ]

    },
en: {

    all: [
        "Watch a movie",
        "Read a book",
        "Listen to music",
        "Do a workout",
        "Go for a walk",
        "Learn something new",
        "Try a new recipe",
        "Watch an interesting video",
        "Call a friend",
        "Clean something",
        "Learn a new fact",
        "Try a new skill"
    ],

    home: [
        "Clean your room",
        "Cook something",
        "Watch a series",
        "Rearrange your room",
        "Try a new recipe",
        "Read a book",
        "Organize your things",
        "Do a home workout",
        "Play a board game",
        "Listen to a podcast"
    ],

    alone: [
        "Read in silence",
        "Meditate for 10 minutes",
        "Write your goals",
        "Learn a new topic",
        "Watch a documentary",
        "Practice a new skill",
        "Make a weekly plan",
        "Listen to music",
        "Draw something",
        "Think about new ideas"
    ],

    friends: [
        "Play football",
        "Watch a movie together",
        "Play games",
        "Go for a walk",
        "Go to a cafe",
        "Talk about interesting topics",
        "Take a photo together",
        "Play board games",
        "Have a mini competition",
        "Visit a new place"
    ],

    outside: [
        "Walk in the park",
        "Ride a bike",
        "Go to a new place",
        "Watch the sunset",
        "Play outside",
        "Take photos",
        "Take a short walk",
        "Explore the neighborhood",
        "Sit in fresh air",
        "Go for coffee"
    ],

    sport: [
        "Do a workout",
        "Run for 20 minutes",
        "Do stretching",
        "Play football",
        "Go swimming",
        "Do abs exercises",
        "Try a new sport",
        "Have a challenge",
        "Train your strength",
        "Do push-ups"
    ],

    games: [
        "Play a new game",
        "Complete a mission",
        "Try a different genre",
        "Play with friends",
        "Have a gaming night",
        "Learn new mechanics",
        "Complete a hard level",
        "Try a classic game",
        "Create a new profile",
        "Play for relaxation"
    ],

    movies: [
        "Watch a new movie",
        "Rewatch your favorite film",
        "Discover a new genre",
        "Watch a thriller",
        "Watch a comedy",
        "Watch a drama",
        "Watch a documentary",
        "Watch an animated film",
        "Watch a sci-fi movie",
        "Have a movie marathon"
    ],

    music: [
        "Listen to a new album",
        "Create a playlist",
        "Discover a new artist",
        "Listen to a podcast",
        "Go to a concert",
        "Learn music history",
        "Listen to different genres",
        "Make a cover",
        "Listen to classical music",
        "Have karaoke"
    ],

    food: [
        "Cook something new",
        "Order food",
        "Try a new restaurant",
        "Make a dessert",
        "Learn a recipe",
        "Have a picnic",
        "Try street food",
        "Bake something",
        "Make a smoothie",
        "Try fusion cuisine"
    ],

    study: [
        "Learn a new language",
        "Read an article",
        "Watch an educational video",
        "Take an online course",
        "Read a textbook",
        "Make notes",
        "Solve problems",
        "Watch a TED talk",
        "Learn a new skill",
        "Read research papers"
    ],

    creative: [
        "Draw something",
        "Write a story",
        "Create music",
        "Make a collage",
        "Create digital art",
        "Write poems",
        "Design something",
        "Make a craft",
        "Try photography",
        "Create something new"
    ],

    travel: [
        "Plan a trip",
        "Research a destination",
        "Look at travel photos",
        "Read a travel blog",
        "Learn about a new country",
        "Watch travel videos",
        "Make a bucket list",
        "Book accommodation",
        "Learn local phrases",
        "Explore maps"
    ],

    relax: [
        "Take a nap",
        "Take a bath",
        "Get a massage",
        "Listen to relaxing music",
        "Do yoga",
        "Meditate",
        "Read a book",
        "Sit and breathe",
        "Write a journal",
        "Watch the clouds"
    ],

    challenge: [
        "Do 100 push-ups",
        "Read 50 pages",
        "No phone day",
        "Learn something in 1 hour",
        "Exercise for 1 hour",
        "30 day challenge",
        "Write 1000 words",
        "Talk to a stranger",
        "Try something new",
        "Finish a hard task"
    ]

}


};



let language = localStorage.getItem("language") || "ru";

let theme = localStorage.getItem("theme") || "dark";

let currentCategory = "all";



const activity = document.getElementById("activity");
const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");

const settingsButton = document.getElementById("settings");
const settingsPanel = document.getElementById("settingsPanel");


const mainSettings = document.getElementById("mainSettings");
const languageSettings = document.getElementById("languageSettings");
const themeSettings = document.getElementById("themeSettings");


const openLanguage = document.getElementById("openLanguage");
const openTheme = document.getElementById("openTheme");


const russianButton = document.getElementById("russian");
const englishButton = document.getElementById("english");


const darkTheme = document.getElementById("darkTheme");
const lightTheme = document.getElementById("lightTheme");


const backLanguage = document.getElementById("backLanguage");
const backTheme = document.getElementById("backTheme");


const closeSettings = document.getElementById("closeSettings");
const translations = {

    ru: {

        settings: "Настройки",
        start: "Нажми кнопку",
        generate: "Сгенерировать",
        copy: "Скопировать",

        all: "Все",
        home: "Дома",
        alone: "Один",
        friends: "С друзьями",
        outside: "На улице",
        sport: "Спорт",
        games: "Игры",
        movies: "Фильмы",
        music: "Музыка",
        food: "Еда",
        study: "Учёба",
        creative: "Творчество",
        travel: "Путешествия",
        relax: "Отдых",
        challenge: "Челлендж",

        language: "Язык",
        theme: "Фон",
        close: "Закрыть",
        back: "Назад",
        dark: "Тёмный",
        light: "Светлый",
        copied: "✅ Скопировано!"

    },


    en: {

        settings: "Settings",
        start: "Press the button",
        generate: "Generate",
        copy: "Copy",

        all: "All",
        home: "Home",
        alone: "Alone",
        friends: "Friends",
        outside: "Outside",
        sport: "Sport",
        games: "Games",
        movies: "Movies",
        music: "Music",
        food: "Food",
        study: "Study",
        creative: "Creative",
        travel: "Travel",
        relax: "Relax",
        challenge: "Challenge",

        language: "Language",
        theme: "Background",
        close: "Close",
        back: "Back",
        dark: "Dark",
        light: "Light",
        copied: "✅ Copied!"

    }

};





// смена языка

function changeLanguage(lang){

    language = lang;

    localStorage.setItem("language", lang);


    document.querySelectorAll("[data-key]").forEach(element => {

        const key = element.dataset.key;


        if(translations[lang][key]){

            element.textContent = translations[lang][key];

        }

    });


    document.documentElement.lang = lang;

}





// смена темы

function changeTheme(mode){

    theme = mode;

    localStorage.setItem("theme", mode);


    if(mode === "light"){

        document.body.classList.add("light");

    }

    else{

        document.body.classList.remove("light");

    }

}






// загрузка сохранений

changeLanguage(language);

changeTheme(theme);






// генерация активности

generateButton.onclick = () => {


    const list = activities[language][currentCategory];


    const random = Math.floor(Math.random() * list.length);


    activity.textContent = list[random];


};







// категории


document.querySelectorAll(".category").forEach(button => {


    button.onclick = () => {


        currentCategory = button.dataset.category;


        document.querySelectorAll(".category")
        .forEach(btn => btn.classList.remove("active"));


        button.classList.add("active");


    };


});






// копирование


copyButton.onclick = () => {


    navigator.clipboard.writeText(activity.textContent);


    const oldText = copyButton.querySelector("span");



    if(oldText){

        oldText.textContent = translations[language].copied;

    }




    setTimeout(()=>{


        if(oldText){

            oldText.textContent = translations[language].copy;

        }


    },1500);



};







// открыть настройки


settingsButton.onclick = () => {


    settingsPanel.style.display = "flex";


    mainSettings.style.display = "block";

    languageSettings.style.display = "none";

    themeSettings.style.display = "none";


};






// открыть язык


openLanguage.onclick = () => {


    mainSettings.style.display = "none";

    languageSettings.style.display = "block";


};






// открыть фон


openTheme.onclick = () => {


    mainSettings.style.display = "none";

    themeSettings.style.display = "block";


};






// назад из языка


backLanguage.onclick = () => {


    languageSettings.style.display = "none";

    mainSettings.style.display = "block";


};






// назад из фона


backTheme.onclick = () => {


    themeSettings.style.display = "none";

    mainSettings.style.display = "block";


};
// закрыть настройки

closeSettings.onclick = () => {

    settingsPanel.style.display = "none";

};






// русский язык

russianButton.onclick = () => {

    changeLanguage("ru");

};






// английский язык

englishButton.onclick = () => {

    changeLanguage("en");

};






// тёмная тема

darkTheme.onclick = () => {

    changeTheme("dark");

};






// светлая тема

lightTheme.onclick = () => {

    changeTheme("light");

};