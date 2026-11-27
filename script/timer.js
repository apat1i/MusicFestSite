const endDate = new Date(2027, 7, 15, 16, 30);
//задаю датту начала концерта

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//Переменная для времени сна

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
//даю переменные на нужные контейнеры в html

function counterUpdate() {
    now = new Date();
    let differens = endDate - now;

    let totalSeconds = Math.floor(differens / 1000);

    let d = Math.floor(totalSeconds / 86400);
    let h = Math.floor((totalSeconds % 86400) / 3600);
    let m = Math.floor((totalSeconds % 3600) / 60);
    let s = totalSeconds % 60;

    days.textContent = d;
    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
}
//функция таймера

async function popa() {
    while (true) {
        counterUpdate();

        await sleep(1000);
        
    }
}

popa();
