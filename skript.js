const activities = {
ru: {
all:[
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
home:[
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
alone:[
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
friends:[
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
outside:[
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
sport:[
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
games:[
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
movies:[
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
music:[
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
food:[
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
study:[
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
creative:[
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
travel:[
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
relax:[
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
challenge:[
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
en:{
all:[
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
]
}
};
let language=localStorage.getItem("language")||"ru";
let theme=localStorage.getItem("theme")||"dark";
let currentCategory="all";
let favorites=JSON.parse(localStorage.getItem("favorites"))||[];

const activity=document.getElementById("activity");
const generateButton=document.getElementById("generate");
const copyButton=document.getElementById("copy");
const favoriteButton=document.getElementById("favorite");

const settingsButton=document.getElementById("settings");
const settingsPanel=document.getElementById("settingsPanel");

const mainSettings=document.getElementById("mainSettings");
const languageSettings=document.getElementById("languageSettings");
const themeSettings=document.getElementById("themeSettings");
const favoritesSettings=document.getElementById("favoritesSettings");

const openLanguage=document.getElementById("openLanguage");
const openTheme=document.getElementById("openTheme");
const openFavorites=document.getElementById("openFavorites");

const russianButton=document.getElementById("russian");
const englishButton=document.getElementById("english");

const darkTheme=document.getElementById("darkTheme");
const lightTheme=document.getElementById("lightTheme");

const backLanguage=document.getElementById("backLanguage");
const backTheme=document.getElementById("backTheme");
const backFavorites=document.getElementById("backFavorites");

const closeSettings=document.getElementById("closeSettings");
const favoritesList=document.getElementById("favoritesList");

const translations={
ru:{
settings:"Настройки",
start:"Нажми кнопку",
generate:"Сгенерировать",
copy:"Скопировать",
favorite:"Нравится",
favorites:"Понравившиеся",
all:"Все",
home:"Дома",
alone:"Один",
friends:"С друзьями",
outside:"На улице",
sport:"Спорт",
games:"Игры",
movies:"Фильмы",
music:"Музыка",
food:"Еда",
study:"Учёба",
creative:"Творчество",
travel:"Путешествия",
relax:"Отдых",
challenge:"Челлендж",
language:"Язык",
theme:"Фон",
close:"Закрыть",
back:"Назад",
copied:"✅ Скопировано!"
},
en:{
settings:"Settings",
start:"Press the button",
generate:"Generate",
copy:"Copy",
favorite:"Like",
favorites:"Favorites",
all:"All",
home:"Home",
alone:"Alone",
friends:"Friends",
outside:"Outside",
sport:"Sport",
games:"Games",
movies:"Movies",
music:"Music",
food:"Food",
study:"Study",
creative:"Creative",
travel:"Travel",
relax:"Relax",
challenge:"Challenge",
language:"Language",
theme:"Background",
close:"Close",
back:"Back",
copied:"✅ Copied!"
}
};

function changeLanguage(lang){
language=lang;
localStorage.setItem("language",lang);

document.querySelectorAll("[data-key]").forEach(element=>{
let key=element.dataset.key;
if(translations[lang][key]){
element.textContent=translations[lang][key];
}
});

document.documentElement.lang=lang;
}

function changeTheme(mode){
theme=mode;
localStorage.setItem("theme",mode);

if(mode==="light"){
document.body.classList.add("light");
}else{
document.body.classList.remove("light");
}
}

function saveFavorites(){
localStorage.setItem("favorites",JSON.stringify(favorites));
}

function updateFavoriteButton(){
if(favorites.includes(activity.textContent)){
favoriteButton.innerHTML="❤️ <span data-key=\"favorite\">"+translations[language].favorite+"</span>";
}else{
favoriteButton.innerHTML="🤍 <span data-key=\"favorite\">"+translations[language].favorite+"</span>";
}
}

function renderFavorites(){

favoritesList.innerHTML="";

favorites.forEach((item,index)=>{

let card=document.createElement("div");
card.className="favoriteCard";

let text=document.createElement("span");
text.textContent=item;

let remove=document.createElement("button");
remove.textContent="❌";

remove.onclick=()=>{

favorites.splice(index,1);
saveFavorites();
renderFavorites();
updateFavoriteButton();

};

card.appendChild(text);
card.appendChild(remove);
favoritesList.appendChild(card);

});

}

changeLanguage(language);
changeTheme(theme);
generateButton.onclick=()=>{

const list=activities[language][currentCategory];

const random=Math.floor(Math.random()*list.length);

activity.textContent=list[random];

updateFavoriteButton();

};

favoriteButton.onclick=()=>{

let current=activity.textContent;

if(!current||current===translations[language].start){
return;
}

if(favorites.includes(current)){

favorites=favorites.filter(item=>item!==current);

}else{

favorites.push(current);

}

saveFavorites();

updateFavoriteButton();

};

document.querySelectorAll(".category").forEach(button=>{

button.onclick=()=>{

currentCategory=button.dataset.category;

document.querySelectorAll(".category")
.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

};

});

copyButton.onclick=()=>{

navigator.clipboard.writeText(activity.textContent);

let oldText=copyButton.querySelector("span");

if(oldText){

oldText.textContent=translations[language].copied;

}

setTimeout(()=>{

if(oldText){

oldText.textContent=translations[language].copy;

}

},1500);

};

settingsButton.onclick=()=>{

settingsPanel.style.display="flex";

mainSettings.style.display="block";
languageSettings.style.display="none";
themeSettings.style.display="none";
favoritesSettings.style.display="none";

};

openLanguage.onclick=()=>{

mainSettings.style.display="none";
languageSettings.style.display="block";

};

openTheme.onclick=()=>{

mainSettings.style.display="none";
themeSettings.style.display="block";

};

openFavorites.onclick=()=>{

mainSettings.style.display="none";
favoritesSettings.style.display="block";

renderFavorites();

};

backLanguage.onclick=()=>{

languageSettings.style.display="none";
mainSettings.style.display="block";

};

backTheme.onclick=()=>{

themeSettings.style.display="none";
mainSettings.style.display="block";

};

backFavorites.onclick=()=>{

favoritesSettings.style.display="none";
mainSettings.style.display="block";

};

closeSettings.onclick=()=>{

settingsPanel.style.display="none";

};

russianButton.onclick=()=>{

changeLanguage("ru");

};

englishButton.onclick=()=>{

changeLanguage("en");

};

darkTheme.onclick=()=>{

changeTheme("dark");

};

lightTheme.onclick=()=>{

changeTheme("light");

};