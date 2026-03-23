let defaultData = {
    history:{},
    streak:0,
    lastSuccessDate:null,
    goal:10,
    unitMoney:300
};

export let data;

try{
    data = JSON.parse(localStorage.getItem("app")) || defaultData;
}catch{
    data = defaultData;
}

export let nextTime = Number(localStorage.getItem("timer")) || 0;

export function save(){
    localStorage.setItem("app",JSON.stringify(data));
    localStorage.setItem("timer",nextTime);
}
