// console.log(sessionStorage.getItem('file'));

// console.log(localStorage.getItem('judge'));
// console.log('id::' + sessionStorage.getItem('judge'));
const memory = sessionStorage.getItem('judge');
console.log('memory::' + memory);
document.title = date[memory].place;

const no = sessionStorage.getItem('file'); //stpre　ファイル名で使用
// console.log(date[memory]);
console.log('no::' + no);
const check=sessionStorage.getItem('check');
console.log('check::' + check);
// console.log('No::' + date[no]);

// console.log(gifu_list);
const main = document.getElementById('main');


const div1 = document.createElement('div');
div1.id = date[memory].type;
div1.classList.add('shop-list');
// count_id= count_id + 1;

const p1 = document.createElement('p');
p1.classList = 'sub-title';
p1.textContent = date[memory].comment;

const h2 = document.createElement('h2');
h2.classList = 'title';
h2.textContent = date[memory].name;

const div2 = document.createElement('div');
div2.classList = 'shop-sub';

let region = '';
let storenum = '';
switch (date[memory].key_list[0]) {
    case 'gifu':
        region = '001_gifu';
        // storenum='store' + String(date[memory].count.padStart(3,'0'))
        break;
    case 'anpachi':
        region = '002_anpachi';
        break;
    case 'hasima':
        region = '003_hasima';
        break;
    case 'ginan':
        region = '004_ginan';
        break;
    case 'kasamatu':
        region = '005_kasamatu';
        break;
    case 'kagamihara':
        region = '006_kagamihara';
        break;
    case 'motosu':
        region = '007_motosu';
        break;
    case 'mizuho':
        region = '008_mizuho';
        break;
    case 'kani':
        region = '009_kani';
        break;
    case 'oogaki':
        region = '012_oogaki';
        break;
    case 'inuyama':
        region = '018_inuyama';
        break;
    case 'itinomiya':
        region = '019_itinomiya';
        break;
    case 'nagoya':
        region = '020_nagoya';
        break;
}

console.log('region::' + region);

// const storenum='';
// switch(date[memory]) {
//     case'tyuunou':
//     storenum='store' + String(date[memory].count.padStart(3,'0'))
//     case'':
//     storenum='store' + String(date[memory].count.padStart(3,'0'))

// }

console.log('no:::' + no);

// if(no < 10) {
//     const img_path = 'material/photo/list/' + region + '/store' + String(no.padStart(3, '0'));
// } else if (no < 100) {
//     const img_path = 'material/photo/list/' + region + '/store' + String(no.padStart(2, '0'));
// }

const img_path = 'material/photo/list/' + region + '/store' + no;

// console.log('path::' + img_path );
const div3 = document.createElement('div');
div3.classList = 'photo';
for (let k = 1; k < date[memory].detail_img + 1; k++) {
    const img = document.createElement('img');
    // img.src = img_path + '/img' + String(k).padStart(3, '0') + '.png';
    // console.log(img_path + '/img' + String(k).padStart(3, '0') + '.png')
    // img.src = img_path + '/img' + String(k).padStart(3, '0') + '.png';
    img.src = img_path + '/img' + String(k).padStart(3, '0') + '.webp';
    div3.appendChild(img);
}

const div4 = document.createElement('div');
div4.classList = 'text';

const p2 = document.createElement('p');
p2.classList = 'main-text';
p2.textContent = date[memory].detail_text;

const div5 = document.createElement('div');
div5.classList = 'shop-info';

const p3 = document.createElement('p');
// p3.classList = date[memory].detail_address;
p3.classList = 'address';
p3.textContent=date[memory].detail_address;

const p4 = document.createElement('p');
p4.classList = 'regular-holiday';
p4.textContent = date[memory].detail_holiday;

const p5 = document.createElement('p');
p5.classList = 'business-hours';
p5.textContent = date[memory].detail_hours;

const p6 = document.createElement('p');
p6.classList = 'parking';
p6.textContent = date[memory].detail_parking;

//お店のインスタない場合は飛ばす

// svgを画像に変える??
const a1 = document.createElement('a');
a1.href = date[memory].detail_url_shop;
a1.textContent = '紹介店アカウント';
a1.target = '_blank';
const img_insta = document.createElement('img');
img_insta.classList = 'insta';
img_insta.src = 'material/icon/insta.svg';
if (date[memory].detail_url_shop == ' ' || date[memory].detail_url_shop == '#') {
    a1.style.display='none';
}


const a2 = document.createElement('a');
a2.href = date[memory].detail_url_link;
a2.textContent = '投稿リンク';
a2.target = '_blank';
const img_insta2 = document.createElement('img');
img_insta2.classList = 'insta';
img_insta2.src = 'material/icon/insta.svg';

const a3 = document.createElement('a');
a3.href = date[memory].detail_map;
a3.textContent = 'google map';
a3.target = '_blank';
const img_map = document.createElement('img');
img_map.classList = 'google-map';
img_map.src = 'material/icon/map.svg';



a1.append(img_insta);
a2.append(img_insta2);
a3.append(img_map);


div5.append(p3, p4, p5, p6, a1, a2, a3);
// console.log(div5);

div4.append(p2);
div4.append(div5);
div2.append(div3, div4);


div1.append(p1, h2, div2);



console.log(div1);
main.appendChild(div1);

