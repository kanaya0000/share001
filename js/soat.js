





//絞り込み機能
//inputのid指定
const check_list = ['all_check', 'gifu', 'anpachi', 'hasima', 'ginan', 'kasamatu', 'kagamihara', 'motosu', 'mizuho', 'seki', 'kani', 'minokamo', 'oogaki', 'yourou', 'wanouti', 'ikeda', 'goudo', 'ibi', 'inuyama', 'itinomiya', 'nagoya'];
//'.' + check_list[○];
// const id_list = ['tyuunou', 'gifusi', 'seinou', 'aichi'];
//絞り込みの記憶 1=中濃、2＝岐阜、3＝西濃、4＝愛知
let judge_count = 0;


for (let i = 0; i < check_list.length; i++) {
    setting(i);
}



const soat_key = document.getElementById('soat-key');

const ul = document.createElement('ul');


for (let i = 0; i < classification.length; i++) {
    const li = document.createElement('li');
    li.classList=classification[i].key;
    // li.textContent=classification[i].jp;
    const label=document.createElement('label');
    // label.textContent=classification[i].jp;

    const input=document.createElement('input');
    input.classList='soat-btn2';
    input.id=classification[i].key;
    // input.type='radio';
    input.type='checkbox';
    input.name='name2';
    input.value=classification[i].key;
    input.id=classification[i].key;
    // input.textContent=classification[i].jp;
    label.append(input);

    // label.textContent=classification[i].jp;
    label.append(classification[i].jp);

    li.append(label);
    ul.append(li);
    // ul.append(li,label);
}
soat_key.append(ul);

//-----絞り込み追加終了






function setting(i) {
    const check = document.getElementById(check_list[i]);
    check.addEventListener('click', () => {
        // check.addEventListener('input', () => {
        // console.log('click:i::' + i);
        if (i == 0) {
            // console.log('「全て」をクリック');
            //全てを選択
            // for (let j = 1; j < check_list.length; j++) {
            //     // let on = document.querySelectorAll(check_list[j])
            //     const on = document.querySelectorAll('.shop-list')
            //     on.forEach(el => {
            //         el.style.display = 'flex';
            //     });
            // }
            //タイトルの表示
            for (let j = 0; j < id_list.length; j++) {
                const id_on = document.getElementById(id_list[j]);
                id_on.style.display = 'block';
            }
            judge_count = 0;
            console.log('エリア：全て' + judge_count);

            //キーワード検索の選択をリセット
            const soat_count=document.querySelectorAll('.soat-btn2');
            soat_count.forEach(input => input.checked = false);
        } else {
            //その他をクリック
            // console.log(i + 'をクリック');
            //一旦全て非表示にしてクリック要素だけ再表示させる
            const off = document.querySelectorAll('.shop-list')
            off.forEach(el => {
                el.style.display = 'none';
            });
            for (let j = 0; j < id_list.length; j++) {
                const id_on = document.getElementById(id_list[j]);
                id_on.style.display = 'none';
            }
            const on = document.querySelectorAll('.' + check_list[i]);

            on.forEach(el => {
                el.style.display = 'flex';
            });
            if (0 <= i && i <= 8) {
                // console.log('岐阜エリア');
                const judge = document.getElementById(id_list[1]);
                judge.style.display = 'block';
                judge_count = 1;
            } else if (9 <= i && i <= 11) {
                console.log('中濃エリア');
                const judge = document.getElementById(id_list[0]);
                judge.style.display = 'block';
                judge_count = 2;
            } else if (12 <= i && i <= 17) {
                console.log('西濃エリア');
                const judge = document.getElementById(id_list[2]);
                judge.style.display = 'block';
                judge_count = 3;
            } else {
                console.log('愛知エリア');
                const judge = document.getElementById(id_list[3]);
                judge.style.display = 'block';
                judge_count = 4;
            }

        }
        console.log('judge' + judge_count);
        const judge_eria = sessionStorage.setItem('judge_eria', judge_count);

        //judge_countから地区の絞り込み＋以降の単語の絞り込みで表示
        //チェックの有無を確認
        const click_check=document.querySelectorAll('input[name="name2"]:checked');
        console.log('チェックを確認' + click_check);
    })
}



