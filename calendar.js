import { data } from "./state.js";

export function drawCalendar(){
    const cal=document.getElementById("calendar");
    cal.innerHTML="";

    const days=["일","월","화","수","목","금","토"];
    days.forEach(d=>cal.innerHTML+=`<div>${d}</div>`);

    const now=new Date();
    const y=now.getFullYear();
    const m=now.getMonth();

    const first=new Date(y,m,1).getDay();
    const last=new Date(y,m+1,0).getDate();

    for(let i=0;i<first;i++) cal.innerHTML+="<div></div>";

    for(let d=1;d<=last;d++){
        const date=`${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
        const c=data.history[date]||0;
        cal.innerHTML+=`<div class="day-box">${d}<br>${c}</div>`;
    }
}