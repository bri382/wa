let menu = document.getElementById('menu');
let addButton = document.getElementById('addOption');
let input = document.getElementById('imageUrl');
let imageList = document.getElementById('menu');


addButton.addEventListener('click', function() {
    const text = input.value.trim();
    if (text !== '') {
        const newItem = document.createElement('img');
        newItem.src = "./" + text;
        menu.appendChild(newItem);
        input.value = '';
    }
});
