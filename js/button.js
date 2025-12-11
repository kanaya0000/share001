// ボタン設定
const btn = document.querySelector('.toggle');
const add = document.getElementById('gnavwrap');
const mask = document.getElementById('mask');
const off = document.getElementById('hidden');




btn.addEventListener('click', () => {
    if (add.className == 'off') {
        add.className = 'on';
        fill_on();
    } else {
        add.className = 'off'
        fill_off();
    }
}, false)

// #maskをクリックした場合でもメニュー閉じる
mask.addEventListener('click', () => {
    add.className = 'off'
    fill_off();
    off.addEventListener('click', () => {
        add.className = 'on'
        fill_on();
    }, false)

}, false)

//リンククリックの際もメニュー閉じる
const tap = document.querySelectorAll('.tap');
tap.forEach(tap_count => {
    tap_count.addEventListener('click', () => {
        add.className = 'off';
        fill_off();
    }, false);
})


//プラスボタン設定
const slide_btn=document.querySelector('.plus');

slide_btn.addEventListener('click', () => {
    console.log('クリックされました');
    if (slide_btn.classList.contains('fil-off')) {
        slide_btn.classList.remove('fil-off');
        slide_btn.classList.add('fil-on');
        //プラスボタンクリックでフィルター表示
        const filter_on = document.querySelectorAll('.set-off');
        filter_on.forEach(on => {
            on.classList.remove('set-off');
            on.classList.add('set-on');
        }); 
    } else {
        slide_btn.classList.remove('fil-on');
        slide_btn.classList.add('fil-off');

        //プラスボタンクリックでフィルター非表示
        const filter_off = document.querySelectorAll('.set-on');
        filter_off.forEach(off => {
            off.classList.remove('set-on');
            off.classList.add('set-off');
        });
    }
}, false);







//フィルター解除
function fill_off() {
    const fill_on = document.querySelectorAll('.filter-on');
    fill_on.forEach(on => {
        on.classList.remove('filter-on');
        on.classList.add('filter-off');
    });
}

//フィルター有効
function fill_on() {
    const fill_off = document.querySelectorAll('.filter-off');
    fill_off.forEach(off => {
        off.classList.remove('filter-off');
        off.classList.add('filter-on');
    });
}

//絞り込み
// const soat_btn = document.getElementById('soat-btn');

// soat_btn.addEventListener('click', () => {
//     if (soat_btn.className == 'off') {
//         //onにしてメニュー表示
//         soat_btn.className = 'on';
//     } else {
//         //offにしてメニュー閉じる
//         soat_btn.className = 'off';
//     }
// })



//検索ボタン
let eria_keep = ''; //エリアの選択内容
let genre_keep = ''; //ジャンルの選択内容

const keep_btn = document.getElementById('serch-btn');
keep_btn.addEventListener('click', () => {
    const value1 = document.getElementById('select0');
    const value2 = document.getElementById('select1');
    eria_keep = value1.value;
    genre_keep = value2.value;
    // console.log(eria_keep);
    // console.log('エリアの選択::' + eria_keep);
    // console.log('ジャンルの選択::' + genre_keep);

    // const class_list=document.querySelectorAll('.shop-list');

    if (eria_keep == '全て' && genre_keep == '全て') {
        console.log('全てを選択');
        //全てを選択
        const on = document.querySelectorAll('.shop-list');
        for (let i = 0; i < place_list.length; i++) {
            on.forEach(el => {
                el.style.display = 'flex';
            });
        }
        for (let j = 0; j < id_list.length; j++) {
            const id_on = document.getElementById(id_list[j]);
            id_on.style.display = 'block';
        }

    } else if (eria_keep == '全て' && genre_keep != '全て') {
        console.log('ジャンルのみ選択');
        const class_list = riset(); //一旦リセット
        let display_list = []; //絞り込みのキーワードに引っかかったリスト
        for (let j = 0; j < class_list.length; j++) {
            const child = class_list[j].querySelectorAll('.key-word li')
            for (let i = 0; i < child.length; i++) {
                // 選択したジャンルに一致する場合はインデックス番号をリストへ格納
                if (child[i].textContent == genre_keep) {
                    display_list.push(j);
                    break;
                }
            }
        }
        // console.log('検索結果リスト：' + display_list);
        // console.log('検索キーワード：' + genre_keep);

        //リストを元に表示させる要素を選択 1=変数の1データ目
        for (let i = 0; i < display_list.length; i++) {
            //お店の表示
            // class_list[display_list[i]].style.display = 'block';
            class_list[display_list[i]].style.display = 'flex';

            //タイトルの判定
            // console.log('------' + class_list[i].classList[1]);
            //all_listのnameプロパティだけのリスト作成
            const namelist = all_list.map(item => item.name);
            // console.log(namelist);
            // console.log(date + 'データ');
            for (let j = 0; j < namelist.length; j++) {
                if (namelist.slice(0, 8).includes(class_list[display_list[i]].classList[1])) {
                    //岐阜エリア
                    // console.log(i + 'は岐阜エリア');
                    //タイトルの際表示
                    const title_up = document.getElementById(id_list[1]);
                    title_up.style.display = 'block';
                } else if (namelist.slice(8, 11).includes(class_list[display_list[i]].classList[1])) {
                    // console.log(i + 'は中濃エリア');
                    const title_up = document.getElementById(id_list[0]);
                    title_up.style.display = 'block';
                } else if (namelist.slice(11, 17).includes(class_list[display_list[i]].classList[1])) {
                    // console.log(i + 'は西濃エリア');
                    const title_up = document.getElementById(id_list[2]);
                    title_up.style.display = 'block';
                } else {
                    // console.log(i + 'は愛知エリア');
                    const title_up = document.getElementById(id_list[3]);
                    title_up.style.display = 'block';
                }
                break;
            }
        };

    } else if (eria_keep != '全て' && genre_keep == '全て') {
        console.log('エリアのみ選択');
        // console.log(eria_keep);
        const class_list = riset(); //一旦リセット
// console.log(date[1] + 'データ');
        let display_list = []; //絞り込みのキーワードに引っかかったリスト
        for (let j = 0; j < class_list.length; j++) {
            const child = class_list[j].querySelectorAll('.place')
            // console.log('child-list:::' + child[0].textContent);
            for (let i = 0; i < child.length; i++) {
                // 選択したジャンルに一致する場合はインデックス番号をリストへ格納
                if (child[i].textContent == eria_keep) {
                    display_list.push(j);
                    break;
                }
            }
        }
        // console.log('エリアのみ:::' + display_list);

        //リストを元に表示させる要素を選択 1=変数の1データ目
        for (let i = 0; i < display_list.length; i++) {
            //お店の表示
            // class_list[display_list[i]].style.display = 'block';
            class_list[display_list[i]].style.display = 'flex';

            //タイトルの判定
            // console.log('------' + class_list[i].classList[1]);
            //all_listのnameプロパティだけのリスト作成
            const namelist = all_list.map(item => item.name);
            // console.log(namelist);
            for (let j = 0; j < namelist.length; j++) {
                if (namelist.slice(0, 8).includes(class_list[display_list[i]].classList[1])) {
                    //岐阜エリア
                    // console.log(i + 'は岐阜エリア');
                    //タイトルの際表示
                    const title_up = document.getElementById(id_list[1]);
                    title_up.style.display = 'block';
                } else if (namelist.slice(8, 11).includes(class_list[display_list[i]].classList[1])) {
                    // console.log(i + 'は中濃エリア');
                    const title_up = document.getElementById(id_list[0]);
                    title_up.style.display = 'block';
                } else if (namelist.slice(11, 17).includes(class_list[display_list[i]].classList[1])) {
                    // console.log(i + 'は西濃エリア');
                    const title_up = document.getElementById(id_list[2]);
                    title_up.style.display = 'block';
                } else {
                    // console.log(i + 'は愛知エリア');
                    const title_up = document.getElementById(id_list[3]);
                    title_up.style.display = 'block';
                }
                break;
            }
        };



    } else {
        // console.log('どちらも選択');
        // console.log(eria_keep + ':::' + genre_keep);
        const class_list = riset(); //一旦リセット

        let display_list = []; //絞り込みのキーワードに引っかかったリスト
        for (let j = 0; j < class_list.length; j++) {
            const child1 = class_list[j].querySelectorAll('.key-word li'); //ジャンル
            const child2 = class_list[j].querySelectorAll('.place'); //エリア
            //    console.log(child2[0].textContent + ':::child2');
            for (let i = 0; i < child1.length; i++) { //クラスの数は違う
                // console.log(child1[i].textContent + 'child1');
                // console.log(child2[i].textContent + 'child2');
                // 選択したジャンルに一致する場合はインデックス番号をリストへ格納
                if (child1[i].textContent == genre_keep && child2[0].textContent == eria_keep) {
                    display_list.push(j);
                    break;
                }
            }
        }
        // console.log(display_list + '両方にヒット');
       

        for (let i = 0; i < display_list.length; i++) {
            //お店の表示
            // class_list[display_list[i]].style.display = 'block';
            class_list[display_list[i]].style.display = 'flex';

            //タイトルの判定
            // console.log('------' + class_list[i].classList[1]);
            //all_listのnameプロパティだけのリスト作成
            const namelist = all_list.map(item => item.name);
            // console.log(namelist);
            for (let j = 0; j < namelist.length; j++) {
                if (namelist.slice(0, 8).includes(class_list[display_list[i]].classList[1])) {
                    //岐阜エリア
                    // console.log(i + 'は岐阜エリア');
                    //タイトルの際表示
                    const title_up = document.getElementById(id_list[1]);
                    title_up.style.display = 'block';
                } else if (namelist.slice(8, 11).includes(class_list[display_list[i]].classList[1])) {
                    // console.log(i + 'は中濃エリア');
                    const title_up = document.getElementById(id_list[0]);
                    title_up.style.display = 'block';
                } else if (namelist.slice(11, 17).includes(class_list[display_list[i]].classList[1])) {
                    // console.log(i + 'は西濃エリア');
                    const title_up = document.getElementById(id_list[2]);
                    title_up.style.display = 'block';
                } else {
                    // console.log(i + 'は愛知エリア');
                    const title_up = document.getElementById(id_list[3]);
                    title_up.style.display = 'block';
                }
                break;
            }
        };
    }
})

//一旦リセット
function riset() {
    const class_list = document.querySelectorAll('.shop-list');
    // const off = document.querySelectorAll('.shop-list')
    class_list.forEach(el => {
        el.style.display = 'none';
    });
    for (let j = 0; j < id_list.length; j++) {
        const id_on = document.getElementById(id_list[j]);
        id_on.style.display = 'none';
    }
    return class_list;
}

//エリアタイトルの表示設定
// function hit1(i, display_list) {
//     for (let j = 0; j < all_list.length; j++) {
//         if (class_list[display_list[i]]) {

//         }
//         }

// }