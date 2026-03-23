// js/ui.js
import { getLast7Days } from "./stats.js";

let chart;

export function updateUI(data) {
  document.getElementById("count").innerText = data.count;
  document.getElementById("money").innerText = data.money.toLocaleString();
  document.getElementById("today").innerText = data.todayCount;

  const last7 = getLast7Days(data.history);
  const labels = last7.map(item => item[0]);
  const values = last7.map(item => item[1]);

  const ctx = document.getElementById("chart");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "금연 횟수",
        data: values
      }]
    }
  });
}
