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
    { name: 'Daisy', adoptionStatus: 'available' }
];

const adoptedCats = [];

// Loop through the array and add available cats to the result array
for (let i = 0; i < cats.length; i++) {
    if (cats[i].adoptionStatus === 'available') {
        adoptedCats.push(cats[i].name);
    }
}

// Create a sentence with the names of adopted cats
const sentence = `I have adopted these cats: ${adoptedCats.join(', ')}!`;

// Output the sentence
console.log(sentence);

// Example object of a cat
const cat = { name: "Pinecone", age: 13, type: 'Munchkin', cuteness: 9001 };
console.log(`Here's another cat: ${cat.name}, age ${cat.age}, type ${cat.type}, cuteness level ${cat.cuteness}.`);
