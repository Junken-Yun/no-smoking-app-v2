import { data } from "./state.js";

export function drawChart(){
    const canvas=document.getElementById("chart");
    const ctx=canvas.getContext("2d");

    setTimeout(()=>{
        canvas.width=canvas.parentElement.clientWidth;
        canvas.height=200;

        const entries=Object.entries(data.history)
            .sort((a,b)=>new Date(a[0])-new Date(b[0]))
            .slice(-30);

        if(entries.length===0) return;

        const max=Math.max(...entries.map(e=>e[1]),1);
        const gap=canvas.width/entries.length;

        entries.forEach((e,i)=>{
            let h=(e[1]/max)*150;
            ctx.fillRect(i*gap+5,180-h,8,h);
        });
    },50);
}