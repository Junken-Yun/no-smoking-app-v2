let running=false;

export function startTimer(btn, nextTime){
    if(running) return;
    running=true;

    function loop(){
        let diff = nextTime - Date.now();

        if(diff<=0){
            btn.disabled=false;
            btn.innerText="🚭 참기";
            running=false;
            return;
        }

        btn.disabled=true;

        let s=Math.floor(diff/1000);
        let m=Math.floor(s/60);
        let sec=s%60;

        btn.innerText=`${m}:${String(sec).padStart(2,'0')}`;

        requestAnimationFrame(loop);
    }
    loop();
}