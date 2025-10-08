const date = [
    {
        link: '#',
        photo: 'material/photo/store/shop01.png',
        sub_title: '本格派の一杯',
        title: '麺処 一心',
        serch: ['濃厚豚骨スープ', '替え玉無料サービスあり', 'サラリーマンに人気', 'カウンター席中心でお一人でも安心','夜遅くまで営業'],
        day: '2025年9月20日'
    },

    {
        link: '#',
        photo: 'material/photo/store/shop02.png',
        sub_title: 'あっさり系好きにおすすめ',
        title: 'らーめん 華',
        serch: ['透き通った塩スープ', '女性に人気のおしゃれな内装', '小盛から大盛までサイズ選択可能', '学生割引あり','駅から徒歩5分'],
        day: '2025年9月22日'
    },
        {
        link: '#',
        photo: 'material/photo/store/shop03.png',
        sub_title: '昔ながらの味',
        title: '中華そば 松風',
        serch: ['醤油ベースのスープ', '地元の常連客が多い', 'ライスとの相性抜群', '家族連れでも入りやすい','昭和レトロな雰囲気'],
        day: '2025年9月24日'
    },
        {
        link: '#',
        photo: 'material/photo/store/shop04.png',
        sub_title: '辛党必見！',
        title: '激辛ラーメン 赤炎',
        serch: ['激辛味噌スープが名物', '辛さを5段階から選べる', '若者に人気', 'トッピングが豊富','夜中2時まで営業'],
        day: '2025年9月26日'
    },
        {
        link: '#',
        photo: 'material/photo/store/shop05.png',
        sub_title: '落ち着いたひととき',
        title: 'Cafe Lumière',
        serch: ['木目調のおしゃれな店内', '一人でも過ごしやすい', 'スペシャルティコーヒー使用', 'Wi-Fi・電源完備','モーニングセットあり'],
        day: '2025年9月20日'
    },
        {
        link: '#',
        photo: 'material/photo/store/shop06.png',
        sub_title: 'ランチも人気',
        title: 'Café Verde',
        serch: ['サンドイッチやパスタが充実', '女性に人気', '緑が多くリラックスできる空間', 'サラリーマンのランチ利用多し','デザートメニューも豊富'],
        day: '2025年9月22日'
    },
        {
        link: '#',
        photo: 'material/photo/store/shop07.png',
        sub_title: 'スイーツ好き必見',
        title: 'Patisserie & Café Fleur',
        serch: ['ケーキが絶品', 'ティータイムにおすすめ', 'おしゃれなインテリア', 'カップルや友人同士に人気','季節限定メニューあり'],
        day: '2025年9月24日'
    },
        {
        link: '#',
        photo: 'material/photo/store/shop08.png',
        sub_title: '隠れ家的カフェ',
        title: 'Coffee Stand OASIS',
        serch: ['小さなカウンター席中心', 'テイクアウト対応', 'コーヒー豆の焙煎にこだわり', '夜はバーとして営業'],
        day: '2025年9月26日'
    },
];

// console.log(date[1].serch[1]);

const section = document.getElementById('top-photo');
const start_text = '<ul class="photo-list-ul"><li class="photo-list-li">';

for (let i = 0; i < date.length; i++) {
    const div = document.createElement('div');
    div.classList = 'photo-list';

    const ul1 = document.createElement('ul');
    ul1.classList = 'photo-list-ul';

    const li1 = document.createElement('li');
    li1.classList = 'photo-list-li';

    const a = document.createElement('a');
    a.classList = 'photo-list-li-a';
    a.href = date[i].link;

    const img = document.createElement('img');
    img.src = date[i].photo;

    const div2 = document.createElement('div');
    div2.classList = 'photo-list-li-a-hover';

    const div3 = document.createElement('div');
    div3.classList = 'detail';

    const p = document.createElement('p')
    p.classList = 'sub-title';
    p.innerHTML = date[i].sub_title;

    const h2 = document.createElement('h2');
    h2.classList = 'title';
    h2.innerHTML = date[i].title;

    let li2 = ''
    for (let j = 0; j < date[i].serch.length; j++) {
        li2 = li2 + '<li>' + date[i].serch[j] + '</li>'
    }

    const ul2 = document.createElement('ul');
    ul2.classList = 'serch';
    ul2.innerHTML = li2;

    const p2 = document.createElement('p');
    p2.classList = 'day';
    p2.innerHTML = date[i].day;

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

console.log(svg.namespaceURI);
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
    console.log(div);
}

