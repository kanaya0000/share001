//変数ファイルより抜粋する変数番号
// const pickup_date = [0,1,2,3,4,5,6];

//ランダムでリストへ格納
const input_count=10; //リスト内の数
// const maxvalue=15; //ファイルの上限
const maxvalue=date.length;



const randomarray=[];
// for(let i=0;i<input_count;i++) {
//     const randomvalue=Math.floor(Math.random()*(maxvalue+1));
//     //重複していた場合やり直す
//     randomarray.push(randomvalue);
// }

while(randomarray.length < input_count) {
    // const randomvalue=Math.floor(Math.random() * (maxvalue + 1));
    const randomvalue=Math.floor(Math.random() * maxvalue);
    if(!randomarray.includes(randomvalue)) { //配列に含まれているか判定
        randomarray.push(randomvalue);
    }
}

console.log(randomarray);

const pickup_date =randomarray; //トップページの組み合わせ用リスト



const excerpt_file=[];
for(let i=0;i<pickup_date.length;i++) {
    excerpt_file.push(date[pickup_date[i]]);
}
// console.log(excerpt_file);
// console.log(date[1].serch[1]);

const section = document.getElementById('top-photo');
const start_text = '<ul class="photo-list-ul"><li class="photo-list-li">';

for (let i = 0; i < pickup_date.length; i++) {
    const div = document.createElement('div');
    div.classList = 'photo-list';

    const ul1 = document.createElement('ul');
    ul1.classList = 'photo-list-ul';

    const li1 = document.createElement('li');
    li1.classList = 'photo-list-li';

    const a = document.createElement('a');
    a.classList = 'photo-list-li-a';
    a.classList.add(date[i].text_count);
    // a.href = date[i].link;
    a.href = 'individual-shop.html';

    const img = document.createElement('img');
    // img.src = date[i].photo;
    // img.src = excerpt_file[i].img;
    // img.src='material/photo/list/' + region + '/store' + String(no.padStart(3, '0'));
    let img_path2='';
    for(let j=0;j<place_list.length;j++) {
        if(excerpt_file[i].place == place_list[j]) {
            img_path2=file_list[j];
            break;
        }
    } 
    img.src='material/photo/list/' + img_path2 + '/' + excerpt_file[i].img + '/img001.webp' ;
console.log(img);


//file_listに数値を入力、変数のimgにはstoreナンバーと画像ファイル名のみ指定する





    const div2 = document.createElement('div');
    div2.classList = 'photo-list-li-a-hover';

    const div3 = document.createElement('div');
    div3.classList = 'detail';

    const p = document.createElement('p')
    p.classList = 'sub-title';
    p.innerHTML = excerpt_file[i].comment;

    const h2 = document.createElement('h2');
    h2.classList = 'title';
    h2.innerHTML = excerpt_file[i].name;

    let li2 = ''
    // for (let j = 0; j < date[i].serch.length; j++) {
    //     li2 = li2 + '<li>' + date[i].serch[j] + '</li>'
    // }
    for (let j = 0; j < excerpt_file[i].key.length; j++) {
        li2 = li2 + '<li>' + excerpt_file[i].key[j] + '</li>'
    }

    const ul2 = document.createElement('ul');
    ul2.classList = 'serch';
    ul2.innerHTML = li2;

    const p2 = document.createElement('p');
    p2.classList = 'day';
    p2.innerHTML = excerpt_file[i].day;

    // const img2=document.createElement('img');
    // img2.classList='link-photo';
    // img2.src='material/icon/link.svg';

    const txt = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(txt, 'svg'); //htmlでは省略表示される
    svg.setAttribute('width','40');
    svg.setAttribute('height','40');
    svg.setAttribute('fill', 'currentColor');
    svg.classList = 'bi bi-box-arrow-up-right';
    svg.setAttribute('viewBox', '0 0 25 25');
    svg.innerHTML = '<path fill-rule="evenodd"d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />'
        + '<path fill-rule="evenodd"d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />';

// console.log(svg.namespaceURI);
    ul1.appendChild(li1);
    li1.appendChild(a);
    a.appendChild(img);
    a.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(p);
    div3.appendChild(h2);
    div3.appendChild(ul2);

    div.appendChild(ul1);

    div2.appendChild(p2);
    // div2.appendChild(img2);
    div2.appendChild(svg);


    section.appendChild(div);
    // console.log(div);
}

//クリックした際の引き渡し
const button=document.querySelectorAll('.photo-list-li-a');
button.forEach((btn,index) => {
    btn.addEventListener('click',()=> {
        console.log(`${index}番目の要素がクリック`);
        //クリックの要素と最初に選定したリストを照らし合わせる
        const change=pickup_date[index];


        // console.log(btn.classList[1] || ' ');
        // console.log(btn.classList[1]);
        // window.hand_over=btn.classList[1];
        // window.hand='hello!';
        // const hand_over=btn.classList[1];
        // const file_no=btn.classList[2];


        // console.log('file_no::' + file_no);

        // console.log('fileno' + file_no);
        // console.log('file' + file_no);
        // localStorage.setItem('judge',hand_over);
        //idの受け渡し
        console.log(index);
        //タイトルに使用するファイル番号
        sessionStorage.setItem('judge',change); //sessionはブラウザを閉じると自動で消去される
        //地区ごとのファイルNo.受け渡し
        sessionStorage.setItem('file',date[change].text_count); //ファイル名に使用
    });
});


//順番ずれてるっぽい
