//絞り込み機能
//inputのid指定
const check_list = ['all_check', 'gifu', 'anpachi', 'hasima', 'ginan', 'kasamatu', 'kagamihara', 'motosu', 'mizuho', 'seki', 'kani', 'minokamo', 'oogaki', 'yourou', 'wanouti', 'ikeda', 'goudo', 'ibi', 'inuyama', 'itinomiya', 'nagoya'];
//'.' + check_list[○];
const id_list = ['tyuunou', 'gifusi', 'seinou', 'aichi'];
//絞り込みの記憶 1=中濃、2＝岐阜、3＝西濃、4＝愛知
let judge_count = 0;


for (let i = 0; i < check_list.length; i++) {
    setting(i);
}


function setting(i) {
    const check = document.getElementById(check_list[i]);
    check.addEventListener('click', () => {
        // check.addEventListener('input', () => {
        // console.log('click:i::' + i);
        if (i == 0) {
            // console.log('「全て」をクリック');
            //全てを選択
            for (let j = 1; j < check_list.length; j++) {
                // let on = document.querySelectorAll(check_list[j])
                const on = document.querySelectorAll('.shop-list')
                on.forEach(el => {
                    el.style.display = 'flex';
                });
            }
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
    })
}



//---これ以降単語の絞り込み機能
const classification = [ //表示するワード
    { jp: "ランチ", key: "lunch" },
    { jp: "ディナー", key: "dinner" },
    { jp: "モーニング", key: "morning" },
    { jp: "和食", key: "washoku" },
    { jp: "洋食", key: "youshoku" },
    { jp: "中華", key: "chinese" },
    { jp: "イタリアン", key: "italian" },
    { jp: "フレンチ", key: "french" },
    { jp: "カフェ", key: "cafe" },
    { jp: "焼肉", key: "yakiniku" },
    { jp: "ラーメン", key: "ramen" },
    { jp: "ファミリー", key: "family" },
    { jp: "デート", key: "date" },
    { jp: "一人でもOK", key: "solo" },
    { jp: "女子会", key: "girls" },
    { jp: "飲み会", key: "party" },
    { jp: "コスパ重視", key: "cost" },
    { jp: "高級", key: "luxury" },
];

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
    // input.type='radio';
    input.type='checkbox';
    input.name='name';
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