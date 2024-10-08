const cats = [
    { name: 'Charlie', adoptionStatus: 'available' },
    { name: 'Lily', adoptionStatus: 'not-available' },
    { name: 'Coco', adoptionStatus: 'available' },
    { name: 'Oreo', adoptionStatus: 'not-available' },
    { name: 'Luna', adoptionStatus: 'available' },
    { name: 'Milo', adoptionStatus: 'available' },
    { name: 'Lola', adoptionStatus: 'not-available' },
    { name: 'Leo', adoptionStatus: 'available' },
    { name: 'Willow', adoptionStatus: 'available' },
    { name: 'Bella', adoptionStatus: 'not-available' },
    { name: 'Max', adoptionStatus: 'available' },
    { name: 'Cleo', adoptionStatus: 'available' },
    { name: 'Lucy', adoptionStatus: 'not-available' },
    { name: 'Daisy', adoptionStatus: 'available' },
];

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('#myList li');
    const catsList = document.getElementById('cats-list');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            listItems.forEach(li => {
                li.style.color = 'blue'; 
            });
        });
    });

    cats.forEach(cat => {
        const li = document.createElement('li');
        li.textContent = cat.name; 
        catsList.appendChild(li); 
    });
});
