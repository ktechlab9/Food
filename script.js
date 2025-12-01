const sheetURL = "https://raw.githubusercontent.com/ktechlab9/Recipes.github.io/refs/heads/main/recipes.csv"; 

async function loadRecipes() {
    const response = await fetch(sheetURL);
    const data = await response.text();
    const rows = data.split("\n").slice(1); // Skip header

    const recipeList = document.getElementById("recipe-list");

    rows.forEach(row => {
        const cols = row.split(",");

        if (cols.length < 6) return;

        const title = cols[1];
        const category = cols[2];
        const imageURL = cols[3];
        const ingredients = cols[4];
        const instructions = cols[5];

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${imageURL}" alt="${title}">
            <div class="title">${title}</div>
            <div class="category">${category}</div>
            <p><strong>Ingredients:</strong> ${ingredients}</p>
            <p><strong>Instructions:</strong> ${instructions}</p>
        `;

        recipeList.appendChild(card);
    });
}

loadRecipes();
