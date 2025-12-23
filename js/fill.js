const items = document.querySelectorAll('.shop-list');

let selectedCategory = null;
let selectedArea = null;

function filterItems() {
    console.log('selectedCategory::' + selectedCategory);
    console.log('selectedArea::' + selectedArea);
    items.forEach((item, index) => {
        //判定　ブール値 
        // const isCategoryMatch = !selectedCategory || item.classList.contains(selectedCategory);
        //true_選択 false_「全て」を選択
        const isCategoryMatch = selectedCategory !== null && selectedCategory !== 'all_check';
        const isAreaMatch = selectedArea !== null && selectedArea !== 'all_check_genre';
        console.log('---エリアmatch---' + isCategoryMatch);
        // console.log('---ジャンルmatch---' + isAreaMatch);


        //true_選択 false_「全て」を選択
        // const isCategorytext = isCategoryMatch || item.classList.contains(selectedCategory);
        // const isCategorytext = isCategoryMatch || item.classList.contains(selectedCategory);
        const isCategorytext = item.classList.contains(selectedCategory);
        // const isAreatext = !isAreaMatch || item.classList.contains(selectedArea);
        // const isAreatext = isAreaMatch || item.classList.contains(selectedArea);
        const isAreatext = item.classList.contains(selectedArea);
        // console.log(isCategorytext + '^^^エリアtext^^^');
        // console.log(isAreatext + '^^^ジャンルtext^^^');
        // console.log(selectedCategory);

        if (index === 1) {
            // console.log(index + '番目');
            // const title=document.querySelectorAll('section-top');
            console.log(title.id + 'タイトル');
            for (let i = 0; i < id_list.length; i++) {
                const title = document.getElementById(id_list[i]);
                title.style.display = 'none';
            }
        }
        if (!isCategoryMatch && !isAreaMatch) {
            //どちらも「全て」選択
            console.log('全て選択');
            item.style.display = 'flex';
            //タイトルの再表示
            for (let j = 1; j < 4; j++) {
                const judge = document.getElementById(id_list[j]);
                judge.style.display = 'block';
            }
            return;
        } else if (isAreatext && isCategorytext) {
            console.log('エリアとジャンル選択');
            item.style.display = 'flex';
            // console.log(item);
            return;
        } else if (isAreatext && !isCategoryMatch) {
            console.log('ジャンルのみ選択');
            item.style.display = 'flex';
            // console.log(item);
            return;

        } else if (isCategorytext && !isAreaMatch) {
            console.log('エリアのみ選択');
            item.style.display = 'flex';
            // console.log(item);
            return;
        } else {
            // console.log('非表示');
            item.style.display = 'none';
        }

        //ヒットしたお店の地区タイトル再表示
        for (let i = 0; i < check_list.length; i++) {
            if (selectedCategory == check_list[i]) {
                // console.log('----i----' + i);

                if (1 <= i && i <= 8) {
                    const judge = document.getElementById(id_list[1]);
                    judge.style.display = 'block';
                } else if (9 <= i && i <= 11) {
                    console.log('中濃エリア');
                    const judge = document.getElementById(id_list[0]);
                    judge.style.display = 'block';
                } else if (12 <= i && i <= 17) {
                    console.log('西濃エリア');
                    const judge = document.getElementById(id_list[2]);
                    judge.style.display = 'block';
                } else {
                    console.log('愛知エリア');
                    const judge = document.getElementById(id_list[3]);
                    judge.style.display = 'block';
                }
            }
        }


    }
    );
}


document.querySelectorAll('.narrow_btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // selectedCategory = btn.dataset.category; // 例: ramen
        selectedCategory = btn.id;
        // console.log('selectedCategory::' + selectedCategory);
        filterItems();
    });
});

document.querySelectorAll('.genre_btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // selectedArea = btn.dataset.area; 
        selectedArea = btn.id;
        filterItems();
    });
});
