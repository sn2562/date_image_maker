const WIDTH = 400;
const HEIGHT = 300;

const canvas = document.createElement("canvas");
canvas.width = WIDTH;
canvas.height = HEIGHT;

const ctx = canvas.getContext("2d");

const qr = new Image();

qr.onload = () => {

    draw();

};

qr.src = "qr.png";

const WEEK = ["日","月","火","水","木","金","土"];

function formatToday(date){

    return `${date.getMonth()+1}/${date.getDate()} ${WEEK[date.getDay()]} ${
        String(date.getHours()).padStart(2,"0")
    }:${
        String(date.getMinutes()).padStart(2,"0")
    }`;

}

function formatFuture(date){

    return `${date.getMonth()+1}/${date.getDate()} ${WEEK[date.getDay()]}`;

}

function draw(){

    const now = new Date();

    const future = new Date(now);

    future.setDate(future.getDate()+3);

    //背景

    ctx.fillStyle="white";

    ctx.fillRect(0,0,WIDTH,HEIGHT);

    //QR

    ctx.drawImage(qr,20,60,120,120);

    //文字

    ctx.fillStyle="#000";

    ctx.font="bold 34px sans-serif";

    ctx.textBaseline="middle";

    ctx.fillText(
        formatToday(now),
        170,
        120
    );

    ctx.fillText(
        formatFuture(future),
        170,
        190
    );

    document.getElementById("result").src =
        canvas.toDataURL("image/png");

}
