console.log('Hello!');

const ingredientsList = document.getElementById('ingredients-list');
const ingredients = ['Mint leaves', 'Water', 'Sugar', 'Lime juice'];

for (let i = 0; i < ingredients.length; i++) {
  const li = document.createElement('li');
  // li.innerText = ingredients[i];
  // ingredientsList.appendChild(li);
}
