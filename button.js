// ボタン設定
const btn = document.querySelector('.toggle');
const add = document.getElementById('gnavwrap');
const mask=document.getElementById('mask');
const off=document.getElementById('hidden');


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

off.addEventListener('click',()=>{
    add.className='off'
},false)