document.addEventListener('DOMContentLoaded', function() {
    
  
    const productsContainer = document.getElementById('products-container');
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'product-card');
  
      productCard.innerHTML = `
      <div class="card">
        <img src="${product.image}" 
             class="card-img-top product-thumbnail" 
             alt="${product.name}" 
             data-toggle="modal" 
             data-target="#productModal" 
             data-image="${product.image}" 
             data-description="${product.description}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text">${product.price}</p>
          <button class="btn btn-primary">Agregar al Carrito</button>
        </div>
      </div>`;
  
      productsContainer.appendChild(productCard);
    });
    // Event listener for product thumbnails
    document.querySelectorAll('.product-thumbnail').forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        const imageSrc = this.getAttribute('data-image');
        const description = this.getAttribute('data-description');
        document.getElementById('modalProductImage').src = imageSrc;
        document.getElementById('modalProductDescription').textContent = description;
      });
    });
  });
  