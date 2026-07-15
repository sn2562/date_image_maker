const WIDTH=400;
const HEIGHT=300;

const qr=new Image();

qr.src="qr.png";

qr.onload=generate;

const WEEK=["日","月","火","水","木","金","土"];

function todayString(d){

    return `${d.getMonth()+1}/${d.getDate()} ${WEEK[d.getDay()]} ${
        String(d.getHours()).padStart(2,"0")
    }:${
        String(d.getMinutes()).padStart(2,"0")
    }`;

}

function futureString(d){

    return `${d.getMonth()+1}/${d.getDate()} ${WEEK[d.getDay()]}`;

}

function generate() {

    const canvas = document.createElement("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    const c = canvas.getContext("2d");

    // 背景
    c.fillStyle = "#fff";
    c.fillRect(0, 0, WIDTH, HEIGHT);

    // QR
    c.drawImage(qr, 20, 90, 120, 120);

    // 日付
    const now = new Date();
    const next = new Date(now);
    next.setDate(next.getDate() + 3);

    c.fillStyle = "#000";
    c.textBaseline = "middle";
    c.font = "bold 34px sans-serif";

    c.fillText(todayString(now), 165, 130);
    c.fillText(futureString(next), 165, 190);

    // PNG(DataURL)を表示
    const img = document.getElementById("image");
    img.src = canvas.toDataURL("image/png");
}
