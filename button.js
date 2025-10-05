// ボタン設定
const btn = document.querySelector('.toggle');
const add = document.getElementById('gnavwrap');
const mask = document.getElementById('mask');
const off = document.getElementById('hidden');






btn.addEventListener('click', () => {
    if (add.className == 'off') {
        add.className = 'on';
    } else {
        add.className = 'off'
    }
}, false)

// #maskをクリックした場合でもメニュー閉じる
mask.addEventListener('click', () => {
    add.className = 'off'
}, false)

off.addEventListener('click', () => {
    add.className = 'off'
}, false)

// お客様の声先頭2つ設定
const btn1 = document.querySelectorAll('.btn1');
const hidden1 = document.querySelectorAll('.voice-title-sub');

btn1.forEach((btn1_count, index) => {
    btn1_count.addEventListener('click', () => {
        if (hidden1[index].className == 'voice-title-sub on') {
            hidden1[index].className = 'voice-title-sub off';
        } else {
            hidden1[index].className = 'voice-title-sub on';
        };
    }, false);
});

