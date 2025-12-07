//プルダウンメニュー
//エリアの選択欄
const eria_serch = document.getElementById('select0');
for (let i = 0; i < place_list.length; i++) {
    const option1 = document.createElement('option');
    option1.value = place_list[i];
    option1.textContent = place_list[i];
    eria_serch.append(option1);
}

const genre_serch = document.getElementById('select1')
for (let i = 0; i < classification.length; i++) {
    const option1 = document.createElement('option');
    option1.value = classification[i].jp;
    option1.textContent = classification[i].jp;
    genre_serch.append(option1);
}


// console.log('count:::' + date[1]);

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
        // h3.textContent = shopdate.name;
        h3.textContent = shopdate.place + ' | ' + shopdate.name;

        const img = document.createElement('img');
        img.src = shopdate.img;
        img.alt = shopdate.name;
        let img_path2 = '';
        for (let aa = 0; aa < place_list.length; aa++) {
            if (shopdate.place == place_list[aa]) {
                img_path2 = file_list[aa];
                break;
            }
        }
        // img.src='material/photo/list/' + img_path2 + '/' + excerpt_file[i].img + '/img001.webp' ;
        // img.src = 'material/photo/list/' + img_path2 + '/' + shopdate.img + '/img001.webp';
        // img.src = 'material/photo/list/' + img_path2 + '/store' + shopdate.store_no + '/img001.webp';
        img.src = 'material/photo/list/' + img_path2 + '/store' + String(shopdate.store_no).padStart(3, '0') + '/img001.webp';
// console.log('aaaa-----' + shopdate.store_no);

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
        // p2.classList.add('explanation');
        p2.textContent = shopdate.commnet;
        // console.log('----------------' + shopdate.commnet);

        p2.classList.add('sub-text');
        

        const a = document.createElement('a');
        a.classList.add('detail-page');
        a.classList.add(shopdate.id); //エリア4箇所
        a.classList.add(shopdate.store_no);
        //同じクラス名を同時に指定できない
        a.href = 'individual-shop.html';
        // a.textContent = '記事を読む';

        // div1.append(h3, img, ul, p1, p2, a);
        a.append(img,ul,h3,p2,p1);
        div1.append(a);

        section.appendChild(div1);


    }
}

setting(tyuunou_list, section1);
setting(gifu_list, section2);
setting(seinou_list, section3);
setting(aichi_list, section4);







