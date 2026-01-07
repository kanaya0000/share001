//エリア、ジャンルのlabel作成

const ul = document.querySelectorAll('.narrow-ul');

for (let i = 0; i < all_list.length; i++) {

    const li = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');

    input.classList.add('narrow_btn');
    input.type = 'radio';
    input.name = 'name';
    input.value = all_list[i].name;
    input.id = all_list[i].name;
    label.textContent = all_list[i].place;
    label.appendChild(input);

    // if (1 <= i && i <= eria_judge[0]) {
    // if ( i <= eria_judge[0]-1) {
    if ( all_list[i].eria == 'gifu') {
        label.classList.add('gifu-label');
        li.append(label);
        ul[0].appendChild(li);
        // console.log('aaaa----' + ul[0]);

    // } else if (eria_judge[0] <= i && i <= eria_judge[1]-1) {
    } else if (all_list[i].eria == 'tyuunou') {
        label.classList.add('tyuunou-label');
        li.append(label);
        ul[1].appendChild(li);
    // } else if (eria_judge[1] <= i && i <= eria_judge[2]-1) {
    } else if (all_list[i].eria == 'seinou') {
        label.classList.add('seinou-label');
        li.append(label);
        ul[2].appendChild(li);
    } else {
        label.classList.add('aichi-label');
        li.append(label);
        ul[3].appendChild(li);
    }


    // li.append(label, input);
    console.log('ul---' + ul);
}
