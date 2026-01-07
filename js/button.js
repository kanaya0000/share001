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

