const recipeForm = document.getElementById('recipe-form');
const recipeList = document.getElementById('recipe-list');

// Crear una nueva receta
recipeForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('recipe-title').value;
  const instructions = document.getElementById('recipe-instructions').value;

  const response = await fetch('/recipes/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo: title, instrucciones: instructions, userId: 1 }), // Reemplaza userId con el ID del usuario logueado
  });

  const result = await response.json();
  alert(result.message || 'Receta añadida');
  loadRecipes();
});

// Cargar y mostrar recetas
async function loadRecipes() {
  const response = await fetch('/recipes');
  const recipes = await response.json();

  recipeList.innerHTML = recipes
    .map(
      (r) => `<li><strong>${r.titulo}</strong>: ${r.instrucciones}</li>`
    )
    .join('');
}

// Inicializar la lista de recetas
loadRecipes();
