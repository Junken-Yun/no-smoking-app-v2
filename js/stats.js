// js/stats.js
export function getLast7Days(history) {
  const map = {};

  history.forEach(item => {
    map[item.date] = (map[item.date] || 0) + 1;
  });

  return Object.entries(map).slice(-7);
}
