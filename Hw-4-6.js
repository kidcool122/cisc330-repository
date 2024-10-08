document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('#myList li');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            listItems.forEach(li => {
                li.style.color = 'blue';
            });
        });
    });
});
