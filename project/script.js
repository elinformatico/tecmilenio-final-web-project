document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const products = [
        { id: 1, name: 'Product 1', price: 10.00 },
        { id: 2, name: 'Product 2', price: 15.00 },
        { id: 3, name: 'Product 3', price: 20.00 }
    ];

    const productElements = document.querySelectorAll('.product button');
    productElements.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const productId = parseInt(event.target.parentElement.dataset.id);
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCart();
    }

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(listItem);
            total += item.price;
        });

        document.getElementById('total').textContent = total.toFixed(2);
    }
});
