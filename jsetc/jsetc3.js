let btnFor = document.getElementById('startButtonFor');
let btnWhile = document.getElementById('startButtonWhile');
let elem = document.getElementById('output');
let mesFor = 100;
let mesWhile = 100;
// forループの処理
function processFor() {
   elem.innerText = "forループ開始！→ " + mesFor; // 初期値を出力
   for (let i = 0; i < 10; i++) {
       mesFor += 150;
       elem.innerText += "→ " + mesFor;
   }
   elem.innerText += "→ forループ終了！";
}
// whileループの処理
function processWhile() {
   elem.innerText = "whileループ開始！→ " + mesWhile; // 初期値を出力
   while (mesWhile < 10000) {
       mesWhile += 150;
       elem.innerText += "→ " + mesWhile;
   }
   elem.innerText += "→ whileループ終了！";
}
// イベントリスナーを設定
btnFor.addEventListener('click', processFor);
btnWhile.addEventListener('click', processWhile);