// js/counter.js
import { getToday } from "./utils.js";

export function increaseCount(data) {
  const today = getToday();

  if (data.lastDate !== today) {
    data.todayCount = 0;
    data.lastDate = today;
  }

  data.count += 1;
  data.todayCount += 1;
  data.money += 300;

  data.history.push({ date: today });

  return data;
}

export function resetData() {
  return {
    count: 0,
    todayCount: 0,
    money: 0,
    history: [],
    lastDate: null
  };
}
