//日付の取得
function getday() {
    const today = new Date();
    const year = today.getFullYear();//年
    const month = today.getMonth();//0=1月
    const lastdate = new Date(year,month+1,0);//翌月の0日目＝今月の最終日を取得 
    const date = lastdate.getDate();//日付
    const day = lastdate.getDay();//曜日番号 0=日
    const week = ["日", "月", "火", "水", "木", "金", "土"];

    const m = lastdate.getMonth()+1;
    const d = lastdate.getDate();
    const w = week[day];

    return `${m}月${d}日(${w})まで`;
}

console.log(getday());

const elements = document.querySelectorAll('.inquiry5');

elements.forEach(a => {
    a.textContent = getday();
});

