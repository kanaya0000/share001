const all_list = [
    {
        eria: 'gifu',
        place: '岐阜市',
        name: 'gifu',
        id: 1,
    },
    {
        eria: 'gifu',
        place: '安八町',
        name: 'anpachi',
        id: 2,
    },
    {
        eria: 'gifu',
        place: '羽島市',
        name: 'hasima',
        id: 3,
    },
    {
        eria: 'gifu',
        place: '岐南町',
        name: 'ginan',
        id: 4,
    },
    {
        eria: 'gifu',
        place: '笠松町',
        name: 'kasamatu',
        id: 5,
    },
    {
        eria: 'gifu',
        place: '各務原市',
        name: 'kagamihara',
        id: 6,
    },
    {
        eria: 'gifu',
        place: '本巣市',
        name: 'motosu',
        id: 7,
    },
    {
        eria: 'gifu',
        place: '瑞穂市',
        name: 'mizuho',
        id: 8,
    },
    //中濃
    {
        eria: 'tyuunou',
        place: '可児市',
        name: 'kani',
        id: 9,
    },
    {
        eria: 'tyuunou',
        place: '関市',
        name: 'seki',
        id: 10,
    },
    {
        eria: 'tyuunou',
        place: '美濃加茂市',
        name: 'minokamo',
        id: 11,
    },
    //西濃
    {
        eria: 'seinou',
        place: '大垣市',
        name: 'oogaki',
        id: 12,
    },
    {
        eria: 'seinou',
        place: '養老町',
        name: 'yourou',
        id: 13,
    },
    {
        eria: 'seinou',
        place: '輪之内町',
        name: 'wanouti',
        id: 14,
    },
    {
        eria: 'seinou',
        place: '池田町',
        name: 'ikeda',
        id: 15,
    },
    {
        eria: 'seinou',
        place: '神戸市',
        name: 'goudo',
        id: 16,
    },
    {
        eria: 'seinou',
        place: '揖斐川町',
        name: 'ibi',
        id: 17,
    },
    //愛知
    {
        eria: 'aichi',
        place: '犬山市',
        name: 'inuyama',
        id: 18,
    },
    {
        eria: 'aichi',
        place: '一宮市',
        name: 'itinomiya',
        id: 19,
    },
    {
        eria: 'aichi',
        place: '名古屋市',
        name: 'nagoya',
        id: 20,
    },
];

//placeからtype,key_listを入力する
for (let i = 0; i < date.length; i++) {
    for (let j = 0; j < all_list.length; j++) {
        if (date[i].place == all_list[j].place) {
            date[i].type = all_list[j].eria; //エリア4箇所
            // date[i].key_list=all_list[j].name; 
            date[i].key_list = [all_list[j].name]; //エリア詳細
            date[i].img = 'store001'; //写真名前

        }
    }
}
// console.log('データ:::' + date[0].name);
console.log(date);

const classification = [ //表示するワード
    // { jp: "ランチ", key: "lunch" },
    // { jp: "ディナー", key: "dinner" },
    // { jp: "モーニング", key: "morning" },
    { jp: "和食", key: "washoku" },
    { jp: "洋食", key: "youshoku" },
    { jp: "中華", key: "chinese" },
    // { jp: "イタリアン", key: "italian" },
    // { jp: "フレンチ", key: "french" },
    { jp: "カフェ", key: "cafe" },
    { jp: "焼肉", key: "yakiniku" },
    { jp: "ラーメン", key: "ramen" },
    // { jp: "ファミリー", key: "family" },
    // { jp: "デート", key: "date" },
    // { jp: "一人でもOK", key: "solo" },
    // { jp: "女子会", key: "girls" },
    // { jp: "飲み会", key: "party" },
    // { jp: "コスパ重視", key: "cost" },
    // { jp: "高級", key: "luxury" },
];



let tyuunou_list = [];
let gifu_list = [];
let seinou_list = [];
let aichi_list = [];
let tyuunou_count = 1;
let gifu_count = 1;
let seinou_count = 1;
let aichi_count = 1;
let all_count = 0;
let keyword_list = []; //キーワードのリスト




for (let i = 0; i < date.length; i++) {
    for (let j = 0; j < date[i].key.length; j++) {
        const serch_value = date[i].key[j];
        // console.log('ヒットしたデータは' + serch_value);
        if (!keyword_list.includes(serch_value)) {
            keyword_list.push(serch_value);
        }
    }
}

console.log('wordlist:::' + keyword_list);

//list_nameをなくしてall_listへ？


const list_name = ['gifu', 'anpachi', 'hasima', 'ginan', 'kasamatu', 'kagamihara', 'motosu', 'mizuho', 'seki', 'kani', 'minokamo', 'oogaki', 'yourou', 'wanouti', 'ikeda', 'goudo', 'ibi', 'inuyama', 'itinomiya', 'nagoya'];
const list = [];
for (let j = 0; j < list_name.length; j++) {
    list.push({
        name: list_name[j],
        count: 0
    })
}


for (let i = 0; i < date.length; i++) {
    if (date[i].type == 'tyuunou') {
        tyuunou_list.push(i);
        // 個別ファイルと一覧のお店を判定するためにid追記
        date[i].count = tyuunou_count;
        tyuunou_count = tyuunou_count + 1;
        date[i].id = all_count;
        all_count = all_count + 1;
    } else if (date[i].type == 'gifu') {
        gifu_list.push(i);
        // date[i].count=gifu_count;
        // gifu_count=gifu_count + 1;
        date[i].id = all_count;
        all_count = all_count + 1;

    } else if (date[i].type == 'seinou') {
        seinou_list.push(i);
        date[i].count = seinou_count;
        seinou_count = seinou_count + 1;
        date[i].id = all_count;
        all_count = all_count + 1;
    } else {
        aichi_list.push(i);
        date[i].count = aichi_count;
        aichi_count = aichi_count + 1;
        date[i].id = all_count;
        all_count = all_count + 1;
    }

    outer:
    for (let j = 0; j < list.length; j++) {
        for (let k = 0; k < list.length; k++) {
            if (date[i].key_list[0] == list[k].name) {
                list[k].count += 1;
                date[i].text_count = list[k].count; //text_count追記
                break outer;
            }
        }
    }

}
// console.log(list + 'list:::')

// const id_list = ['tyuunou', 'gifusi', 'seinou', 'aichi'];
const id_list = ['tyuunou', 'gifusi', 'seinou', 'aichi'];
const place_list = ['岐阜市', '安八町', '羽島市', '岐南町', '笠松町', '各務原市', '本巣市', '瑞穂市', '可児市', '関市', '美濃加茂市', '大垣市', '養老町', '輪之内町', '池田町', '神戸町', '揖斐川町', '犬山市', '一宮市', '名古屋市'];
const file_list = ['001_gifu', '002_anpachi', '003_hasima', '004_ginan', '005_kasamatu', '006_kagamihara', '007_motosu', '008_mizuho', '009_kani', '010_seki', '011_minokamo', '012_oogaki', '013_yourou', '014_wanouti', '015_ikeda', '016_goudo', '017_ibi', '018_inuyama', '019_itinomiya', '020_nagoya'];

// console.log(date);

const check_list = ['all_check', 'gifu', 'anpachi', 'hasima', 'ginan', 'kasamatu', 'kagamihara', 'motosu', 'mizuho', 'seki', 'kani', 'minokamo', 'oogaki', 'yourou', 'wanouti', 'ikeda', 'goudo', 'ibi', 'inuyama', 'itinomiya', 'nagoya'];

const genre_list = [
    ['all_genre', '全て'],
    ['washoku', '和食'],
    ['yousyoku', '洋食'],
    ['tyuuka', '中華'],
    ['cafe', 'カフェ'],
    ['yakiniku', '焼肉'],
    ['men', 'ラーメン']
];