
// 一覧ページに戻った際に検索設定を再度設定する

const soat_memory = document.querySelectorAll('.soat-btn');
// console.log(soat_memory);

for (let i = 0; i < soat_memory.length; i++) {
    soat_memory[i].addEventListener('click', () => {
        //選択した地区の表示
        // console.log('click!!' + soat_memory[i].id);
        sessionStorage.setItem('filter', soat_memory[i].id);
    });
};



// console.log(sessionStorage.getItem('filter'));


window.addEventListener('DOMContentLoaded', () => {
    console.log('受け渡し' + sessionStorage.getItem('judge_eria'));
    const click_text = sessionStorage.getItem('filter');
    console.log('click!!!' + click_text);

    // console.log(click_id.id);
    if (click_text != 'all_check') {
        // const click_id = document.getElementById(click_text);
        // document.getElementById(click_text.id).checked=true;
        const serch_id = document.getElementById(click_text);
        // console.log('serch:::' + serch_id);
        serch_id.checked = true;
        //---ここまでがinputの表示設定

        //一旦全て非表示にしてクリック要素だけ再表示させる
        const off = document.querySelectorAll('.shop-list')
        off.forEach(el => {
            el.style.display = 'none';
        });

        const on = document.querySelectorAll('.' + click_text);
        on.forEach(el => {
            el.style.display = 'flex';
        });


        //エリアの非表示設定

        // const title = document.querySelectorAll('.title');
        // for (let aa = 0; aa < title.length; aa++) {
        //     title[aa].style.display = 'none';
        // }

        for (let j = 0; j < id_list.length; j++) {
            const id_on = document.getElementById(id_list[j]);
            id_on.style.display = 'none';
        }


        const eria = sessionStorage.getItem('judge_eria');
        console.log('aaa' + eria);
        if (eria == 1) {
            //岐阜エリア
            const bb=document.getElementById('gifusi');
            bb.style.display='block';
            // title[1].style.display = 'block';
            console.log('岐阜エリア');
        } else if (eria == 2) {
            const bb=document.getElementById('tyuunou');
            bb.style.display='block';
            // title[0].style.display = 'block';
            console.log('中濃エリア');
        } else if (eria == 3) {
            const bb=document.getElementById('seinou');
            bb.style.display='block';
            // title[2].style.display = 'block';
            console.log('西濃エリア');
        } else {
            const bb=document.getElementById('aichi');
            bb.style.display='block';
            // title[3].style.display = 'block';
            console.log('愛知エリア');
        }


    } else {
        //リセットを選択していた場合
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
        console.log('リセットされました！');
    }
})

//全て以外の絞り込みをしている場合
// const click_text=sessionStorage.getItem('filter');
// const click_id=document.getElementById(click_text);
// if(click_text != 'all_check') {
//     console.log('クリックされたid' + click_id);
// }