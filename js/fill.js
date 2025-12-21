const items = document.querySelectorAll('.shop-list');

let selectedCategory = null;
let selectedArea = null;

function filterItems() {
    console.log('selectedCategory::' + selectedCategory);
    console.log('selectedArea::' + selectedArea);
    items.forEach(item => {
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


        if (!isCategoryMatch && !isAreaMatch) {
            //どちらも「全て」選択
            console.log('全て選択');
            item.style.display = 'flex';
            return;
        }else if(isAreatext && isCategorytext) {
            console.log('エリアとジャンル選択');
            item.style.display = 'flex';
            // console.log(item);
            return;
        } else if (isAreatext && !isCategoryMatch) {
            console.log('ジャンルのみ選択');
            item.style.display = 'flex';
            // console.log(item);
            return;

        } else if(isCategorytext && !isAreaMatch) {
            console.log('エリアのみ選択');
            item.style.display = 'flex';
            // console.log(item);
            return;
        }  else {
            // console.log('非表示');
            item.style.display = 'none';
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
