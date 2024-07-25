document.addEventListener('DOMContentLoaded', function() {
    const products = [
      { id: 1, name: 'Product 1', description: 'This is a short description of product 1.', price: '$10.00', image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product 2', description: 'This is a short description of product 2.', price: '$20.00', image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 3', description: 'This is a short description of product 3.', price: '$30.00', image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Product 4', description: 'This is a short description of product 4.', price: '$40.00', image: 'https://via.placeholder.com/150' },
      { id: 5, name: 'Product 5', description: 'This is a short description of product 5.', price: '$50.00', image: 'https://via.placeholder.com/150' }
    ];
  
    const productsContainer = document.getElementById('products-container');
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'product-card');
  
      productCard.innerHTML = `
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">${product.price}</p>
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      `;
  
      productsContainer.appendChild(productCard);
    });
  });
  