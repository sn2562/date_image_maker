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

function generate(){

    const canvas=document.createElement("canvas");

    canvas.width=WIDTH;
    canvas.height=HEIGHT;

    const c=canvas.getContext("2d");

    c.fillStyle="white";
    c.fillRect(0,0,WIDTH,HEIGHT);

    c.drawImage(qr,20,90,120,120);

    const now=new Date();

    const next=new Date(now);

    next.setDate(next.getDate()+3);

    c.fillStyle="#000";

    c.font="bold 34px sans-serif";

    c.fillText(todayString(now),170,140);

    c.fillText(futureString(next),170,200);

    canvas.toBlob(blob=>{

        const url=URL.createObjectURL(blob);

        const img=document.getElementById("image");

        img.src=url;

        // 画像だけを表示する
        img.onload=()=>{
            document.body.innerHTML="";
            document.body.appendChild(img);
        };

    },"image/png");

}
