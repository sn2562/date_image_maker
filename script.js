const WEEK = ["日","月","火","水","木","金","土"];

function format(date, includeTime){

    const m = date.getMonth()+1;
    const d = date.getDate();
    const w = WEEK[date.getDay()];

    if(includeTime){

        const h = String(date.getHours()).padStart(2,"0");
        const min = String(date.getMinutes()).padStart(2,"0");

        return `${m}/${d} ${w} ${h}:${min}`;
    }

    return `${m}/${d} ${w}`;
}

const now = new Date();

const future = new Date(now);
future.setDate(future.getDate()+3);

document.getElementById("today").textContent =
    format(now,true);

document.getElementById("future").textContent =
    format(future,false);
