const recipeDb = [
    {
        name: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "eggs", "parmesan", "bacon", "black pepper"],
        time: 25
    },
    {
        name: "Vegetable Stir Fry",
        ingredients: ["broccoli", "carrot", "bell pepper", "soy sauce", "garlic"],
        time: 20
    },
    {
        name: "Chicken Curry",
        ingredients: ["chicken", "onion", "tomato", "curry powder", "coconut milk"],
        time: 40
    },
    {
        name: "Pancakes",
        ingredients: ["flour", "milk", "egg", "sugar", "baking powder"],
        time: 15
    },
    {
        name: "Fake Recipe Alpha",
        ingredients: ["ingredient1", "ingredient2", "ingredient3"],
        time: 10
    },
    {
        name: "Fake Recipe Beta",
        ingredients: ["itemA", "itemB", "itemC"],
        time: 30
    }
];


function searchRecipes() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const results = recipeDb.filter(recipe => 
        recipe.name.toLowerCase().includes(searchInput) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInput))
    );

    if (results.length > 0) {
        results.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
                <h3>${recipe.name}</h3>
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                <p><strong>Cooking Time:</strong> ${recipe.time} minutes</p>
            `;
            resultsContainer.appendChild(recipeDiv);
        });
    } else {
        resultsContainer.innerHTML = '<p>No recipes found.</p>';
    }
}

searchRecipes();