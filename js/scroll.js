let class_list = [];
let height_list = [];
const windowHeight = window.innerHeight; //画面の高さを取得
const aa = document.querySelectorAll('.fadein');


console.log(windowHeight / 2);


//feadein
for (let i = 0; i < aa.length; i++) {
    class_list.push(aa[i]);
    const bb = aa[i].getBoundingClientRect(); //TOPから要素までの高さ
    height_list.push(bb.top);//サイト上部からの距離と画面サイズを引いた値をトリガーとする
}

console.log(class_list);

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);　スクロール量

    for (let j = 0; j < class_list.length; j++) {
        if (window.scrollY > height_list[j] - windowHeight) {
            class_list[j].classList.add('on');
        } else {
            class_list[j].classList.remove('on');
        }
    }
}, false)


//slideの表示
const slide = document.querySelectorAll('.slide');
let list1 = [];
let list2 = [];

// for (let i = 0; i < slide.length; i++) {
//     list1.push(slide[i]);
//     const bb = slide[i].getBoundingClientRect(); //TOPから要素までの高さ
//     list2.push(bb.top);//サイト上部からの距離と画面サイズを引いた値をトリガーとする
// }

window.addEventListener('scroll', () => {
    // for (let j = 0; j < class_list.length; j++) {
        // if (window.scrollY > 1000) {
        //     list1[0].classList.add('on');
        //     list1[1].classList.add('on');
        // } else {
        //     list1[0].classList.remove('on');
        //     list1[1].classList.remove('on');
        // }
    // }
        if (window.scrollY > 1000) {
        slide[0].classList.add('on');
        slide[1].classList.add('on');
    } else {
        slide[0].classList.remove('on');
        slide[1].classList.remove('on');
    }
}, false)

// }, false)