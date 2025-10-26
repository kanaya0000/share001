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
const soat_btn=document.getElementById('soat-btn');

soat_btn.addEventListener('click',() => {
    if(soat_btn.className == 'off') {
        //onにしてメニュー表示
        soat_btn.className='on';
    } else {
        //offにしてメニュー閉じる
        soat_btn.className='off';
    }
})