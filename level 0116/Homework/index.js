const apiId = 'Edamam_API_ID';
const apiKey = 'Edamam_API_KEY'; 

document.getElementById('search-button').addEventListener('click', async () => {
    const ingredient = document.getElementById('ingredient').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; 

    if (!ingredient) {
        resultsDiv.innerHTML = '<p>Please enter an ingredient.</p>';
        return;
    }

    try {
        const response = await axios.get(`https://api.edamam.com/search?q=${ingredient}&app_id=${apiId}&app_key=${apiKey}`);
        const recipes = response.data.hits;

        if (recipes.length === 0) {
            resultsDiv.innerHTML = '<p>No recipes found.</p>';
            return;
        }

        recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.className = 'recipe';
            recipeDiv.innerHTML = `
                <h3>${recipe.recipe.label}</h3>
                <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
                <p><strong>Ingredients:</strong> ${recipe.recipe.ingredientLines.join(', ')}</p>
                <p><strong>Instructions:</strong> <a href="${recipe.recipe.url}" target="_blank">View Recipe</a></p>
            `;
            resultsDiv.appendChild(recipeDiv);
        });
    } catch (error) {
        resultsDiv.innerHTML = '<p>There was an error with the API request.</p>';
        console.error(error);
    }
});
