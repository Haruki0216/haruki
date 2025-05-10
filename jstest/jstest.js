const teams = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const table = document.getElementById('matchTable');
// ヘッダー作成
let headerRow = '<tr><th></th>';
teams.forEach(team => {
 headerRow += `<th>${team}</th>`;
});
headerRow += '</tr>';
table.innerHTML += headerRow;
// 表本体作成
teams.forEach((teamA, i) => {
 let row = `<tr><th>${teamA}</th>`;
 teams.forEach((teamB, j) => {
   if (i === j || j < i) {
     row += '<td></td>'; // 同じチーム or 重複カードは空欄
   } else {
     row += `<td>${teamA} vs ${teamB}</td>`;
   }
 });
 row += '</tr>';
 table.innerHTML += row;
});