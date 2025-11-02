
// let tyuunou_list = [];
// let gifu_list = [];
// let seinou_list = [];
// let aichi_list = [];
// let tyuunou_count = 1;
// let gifu_count = 1;
// let seinou_count = 1;
// let aichi_count = 1;
// let all_count = 0;



// console.log(gifu_list);
// let count_map = {};
// let index='';


// const list_name = ['gifu', 'anpachi', 'hasima', 'ginan', 'kasamatu', 'kagamihara', 'motosu', 'mizuho', 'seki', 'kani', 'minokamo', 'oogaki', 'yourou', 'wanouti', 'ikeda', 'goudo', 'ibi', 'inuyama', 'itinomiya', 'nagoya'];
// const list = [];
// for (let j = 0; j < list_name.length; j++) {
//     list.push({
//         name: list_name[j],
//         count: 0
//     })
// }

// console.log(list);

// 中濃、岐阜、西濃、愛知で分類分け
// for (let i = 0; i < date.length; i++) {
//     if (date[i].type == 'tyuunou') {
//         tyuunou_list.push(i);
//         // 個別ファイルと一覧のお店を判定するためにid追記
//         date[i].count = tyuunou_count;
//         tyuunou_count = tyuunou_count + 1;
//         date[i].id = all_count;
//         all_count = all_count + 1;
//     } else if (date[i].type == 'gifu') {
//         gifu_list.push(i);
//         // date[i].count=gifu_count;
//         // gifu_count=gifu_count + 1;
//         date[i].id = all_count;
//         all_count = all_count + 1;

//     } else if (date[i].type == 'seinou') {
//         seinou_list.push(i);
//         date[i].count = seinou_count;
//         seinou_count = seinou_count + 1;
//         date[i].id = all_count;
//         all_count = all_count + 1;
//     } else {
//         aichi_list.push(i);
//         date[i].count = aichi_count;
//         aichi_count = aichi_count + 1;
//         date[i].id = all_count;
//         all_count = all_count + 1;
//     }
    // // date[i].file_count='';

    // outer:
    // for (let j = 0; j < list.length; j++) {
    //     for (let k = 0; k < list.length; k++) {
    //         if (date[i].key_list[0] == list[k].name) {
    //             list[k].count += 1;
    //             date[i].text_count = list[k].count; //text_count追記
    //             break outer;
    //         }
    //     }
    // }
    // console.log(date);

    // date.forEach(d => {
    //     list.forEach(l => {
    //         if(d.key_list[0].includes(l)) {
    //             d.text_count +=1;

    //         }
    //     })
    // })


    // console.log(date.map(d => d.text_count));
// }

console.log('count:::' + date[1]);

// console.log('count' + date[1].count);

//中濃
const section1 = document.getElementById('add_gifu_tyuunou');
const section2 = document.getElementById('add_gifu_gifu');
const section3 = document.getElementById('add_gifu_seinou');
const section4 = document.getElementById('add_aichi');

function setting(arealist, section) {
    for (let j = 0; j < arealist.length; j++) {
        const shopdate = date[arealist[j]];

        const div1 = document.createElement('div');
        div1.classList.add('shop-list');
        for (let k = 0; k < shopdate.key_list.length; k++) {
            div1.classList.add(shopdate.key_list[k]);
            // console.log(shopdate.key_list[k]);
        }



        const h3 = document.createElement('h3');
        h3.classList.add('sub-title');
        h3.textContent = shopdate.name;

        const img = document.createElement('img');
        img.src = shopdate.img;
        img.alt = shopdate.name;
        let img_path2='';
    for(let aa=0;aa<place_list.length;aa++) {
        if(shopdate.place == place_list[aa]) {
            img_path2=file_list[aa];
            break;
        }
    } 
    // img.src='material/photo/list/' + img_path2 + '/' + excerpt_file[i].img + '/img001.webp' ;
    img.src='material/photo/list/' + img_path2 + '/' + shopdate.img + '/img001.webp' ;

        const ul = document.createElement('ul');
        ul.classList.add('key-word');
        for (let k = 0; k < shopdate.key.length; k++) {
            const li = document.createElement('li');
            li.textContent = shopdate.key[k];
            ul.appendChild(li);
        }

        const p1 = document.createElement('p');
        p1.classList.add('place');
        p1.textContent = shopdate.place;

        const p2 = document.createElement('p');
        p2.classList.add('explanation');
        p2.textContent = shopdate.comment;

        const a = document.createElement('a');
        // a.classList.add('detail-page'+ ' count' + all_count);
        a.classList.add('detail-page');
        a.classList.add(shopdate.id);
        a.classList.add(shopdate.text_count);
        a.href='individual-shop.html';
        // console.log('classname::' + a.className);
        const text = shopdate.key_list[0] + '_count';
        // console.log('text::' +text);

        a.classList.add(shopdate.text);

        // a.href = shopdate.link;
        // a.target = "_blank";
        a.textContent = '記事を読む';

        div1.append(h3, img, ul, p1, p2, a);
        section.appendChild(div1);


    }
}

setting(tyuunou_list, section1);
setting(gifu_list, section2);
setting(seinou_list, section3);
setting(aichi_list, section4);

//グローバル変数
// window.hand_over='';

// shop-listのクラスからクリックした要素を判定
//クリックした要素のカウントを判定して連想配列の情報を渡す
// const button=document.querySelectorAll('.detail-page');
// button.forEach((btn,index) => {
//     btn.addEventListener('click',()=> {
//         console.log(`${index}番目の要素がクリック`);
//         // console.log(btn.classList[1] || ' ');
//         // console.log(btn.classList[1]);
//         // window.hand_over=btn.classList[1];
//         window.hand='hello!';
//     });
// });





