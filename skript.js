const activities = {
    all: ["Фильм", "Книга", "Прогулка", "Спорт"],
    home: ["Уборка", "Готовка", "Сериал"],
    alone: ["Чтение", "Учёба", "Медитация"],
    friends: ["Футбол", "Кино", "Игры"],
    outside: ["Прогулка в парке", "Поход", "Катание на велосипеде"]
};

let current = "all";

const activity = document.getElementById("activity");

const getActivityList = () => {
    if (!activities[current]) {
        console.warn(`Неизвестная категория: ${current}. Используется all.`);
        current = "all";
    }
    return activities[current];
};

document.getElementById("generate").onclick = () => {
    const list = getActivityList();
    const random = Math.floor(Math.random() * list.length);
    activity.textContent = list[random];
};

document.querySelectorAll("button[data-category]").forEach(btn => {
    btn.onclick = () => {
        current = btn.dataset.category;
        document.querySelectorAll("button[data-category]").forEach(item => item.classList.remove("active"));
        btn.classList.add("active");
    };
});