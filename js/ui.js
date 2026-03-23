import { data } from "./state.js";

export function updateUI(){
    let total = Object.values(data.history).reduce((a,b)=>a+b,0);
    let today = data.history[new Date().toISOString().slice(0,10)] || 0;

    document.getElementById("total").innerText=total;
    document.getElementById("today").innerText=today;
    document.getElementById("money").innerText=(total*data.unitMoney).toLocaleString();
    document.getElementById("goal").innerText=data.goal;

    let percent = Math.min((today/data.goal)*100,100);
    document.getElementById("progress-fill").style.width=percent+"%";
    document.getElementById("progress-text").innerText=`${today}/${data.goal}`;
}
