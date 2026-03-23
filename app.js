import { data, save, nextTime } from "./state.js";
import { updateUI } from "./ui.js";
import { startTimer } from "./timer.js";
import { drawChart } from "./stats.js";
import { drawCalendar } from "./calendar.js";

document.addEventListener("DOMContentLoaded",()=>{

    const btn=document.getElementById("mainBtn");

    function add(){
        const t=new Date().toISOString().slice(0,10);
        data.history[t]=(data.history[t]||0)+1;

        let nt=Date.now()+1000;
        localStorage.setItem("timer",nt);

        save();
        updateUI();
        startTimer(btn,nt);
    }

    btn.addEventListener("pointerup",add);
    btn.addEventListener("click",add);

    document.getElementById("statsBtn").onclick=()=>{
        document.getElementById("statsModal").classList.remove("hidden");
        drawChart();
    };

    document.getElementById("calendarBtn").onclick=()=>{
        document.getElementById("calendarModal").classList.remove("hidden");
        drawCalendar();
    };

    document.getElementById("resetBtn").onclick=()=>{
        const t=new Date().toISOString().slice(0,10);
        delete data.history[t];
        alert("초기화 완료");
        save();
        updateUI();
    };

    window.closeModal=()=>{
        document.querySelectorAll(".modal").forEach(m=>m.classList.add("hidden"));
    };

    updateUI();
});