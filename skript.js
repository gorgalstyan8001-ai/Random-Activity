const activities = {
    all: ["Фильм", "Книга", "Прогулка", "Спорт"],
    home: ["Уборка", "Готовка", "Сериал"],
    alone: ["Чтение", "Учёба", "Медитация"],
    friends: ["Футбол", "Кино", "Игры"]
};

let current = "all";

const activity = document.getElementById("activity");

document.getElementById("generate").onclick = () => {
    const list = activities[current];
    const random = Math.floor(Math.random() * list.length);
    activity.textContent = list[random];
};

document.querySelectorAll("button[data-category]").forEach(btn => {
    btn.onclick = () => {
        current = btn.dataset.category;
    };
});