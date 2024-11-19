const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');

// Crear un nuevo producto
productForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('product-name').value;
  const price = parseFloat(document.getElementById('product-price').value);
  const description = document.getElementById('product-description').value;

  const response = await fetch('/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre: name, precio: price, descripcion: description }),
  });

  const result = await response.json();
  alert(result.message || 'Producto añadido');
  loadProducts();
});

// Cargar y mostrar productos
async function loadProducts() {
  const response = await fetch('/products');
  const products = await response.json();

  productList.innerHTML = products
    .map(
      (p) => `<li><strong>${p.nombre}</strong>: $${p.precio} - ${p.descripcion}</li>`
    )
    .join('');
}

// Inicializar la lista de productos
loadProducts();
