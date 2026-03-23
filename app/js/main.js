// js/main.js
import { saveData, loadData } from "./storage.js";
import { increaseCount, resetData } from "./counter.js";
import { updateUI } from "./ui.js";

let data = await loadData();

if (!data) {
  data = {
    count: 0,
    todayCount: 0,
    money: 0,
    history: [],
    lastDate: null
  };
}

updateUI(data);

document.getElementById("btn").addEventListener("click", async () => {
  data = increaseCount(data);

  if (data.todayCount === 5) alert("👍 좋은 흐름입니다!");
  if (data.todayCount === 10) alert("🔥 대단해요! 오늘 10번 성공!");

  await saveData(data);
  updateUI(data);
});

document.getElementById("reset").addEventListener("click", async () => {
  if (confirm("초기화 하시겠습니까?")) {
    data = resetData();
    await saveData(data);
    updateUI(data);
  }
});
