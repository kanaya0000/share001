//絞り込み機能
//inputのid指定
const check_list = ['all_check', 'gifu', 'anpachi', 'hasima', 'ginan', 'kasamatu', 'kagamihara', 'motosu', 'mizuho', 'seki', 'kani', 'minokamo', 'oogaki', 'yourou', 'wanouti', 'ikeda', 'goudo', 'ibi', 'inuyama', 'itinomiya', 'nagoya'];
//'.' + check_list[○];


for (let i = 0; i < check_list.length; i++) {
    const check = document.getElementById(check_list[i]);
    check.addEventListener('click', () => {
        // console.log('click:i::' + i);
        if (i == 0) {
            // console.log('「全て」をクリック');
            //全てを選択
            for (let j = 1; j < check_list.length; j++) {
                // let on = document.querySelectorAll(check_list[j])
                const on = document.querySelectorAll('.shop-list')
                on.forEach(el => {
                    el.style.display='flex';
                });
            }
        } else {
            //その他をクリック
            // console.log(i + 'をクリック');
            //一旦全て非表示にしてクリック要素だけ再表示させる
            const off = document.querySelectorAll('.shop-list')
                off.forEach(el => {
                    el.style.display='none';
                });
            const on=document.querySelectorAll('.' + check_list[i]);
            
                on.forEach(el => {
                    el.style.display='flex';
                });
        }
    })
}