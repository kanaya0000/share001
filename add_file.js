//グローバル変数
// window.hand_over='';

// shop-listのクラスからクリックした要素を判定
//クリックした要素のカウントを判定して連想配列の情報を渡す
const button=document.querySelectorAll('.detail-page');
button.forEach((btn,index) => {
    btn.addEventListener('click',()=> {
        console.log(`${index}番目の要素がクリック`);
        // console.log(btn.classList[1] || ' ');
        // console.log(btn.classList[1]);
        // window.hand_over=btn.classList[1];
        // window.hand='hello!';
        const hand_over=btn.classList[1];
        const file_no=btn.classList[2];

        console.log('file_no::' + file_no);

        // console.log('fileno' + file_no);
        // console.log('file' + file_no);
        // localStorage.setItem('judge',hand_over);
        //idの受け渡し
        sessionStorage.setItem('judge',hand_over); //sessionはブラウザを閉じると自動で消去される
        //地区ごとのファイルNo.受け渡し
        sessionStorage.setItem('file',file_no); //ファイル名に使用
    });
});