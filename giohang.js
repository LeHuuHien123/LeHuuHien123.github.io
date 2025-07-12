// cart.js - Handles shopping cart functionality

let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage or start empty

const cartCountSpan = document.querySelector('.cart-count');
const cartItemsContainer = document.getElementById('cart-items-container'); // Corrected ID
const cartTotalAmountSpan = document.getElementById('cart-total-amount');
const emptyCartMessage = document.getElementById('empty-cart-message');
const checkoutBtn = document.getElementById('checkout-btn');
const clearCartBtn = document.getElementById('clear-cart-btn');

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems(); // Re-render cart items every time cart changes
}

function updateCartCount() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountSpan) { // Check if element exists (for giohang.html)
        cartCountSpan.textContent = totalCount;
    }
}

function renderCartItems() {
    if (!cartItemsContainer) return; // Only run on giohang.html

    cartItemsContainer.innerHTML = ''; // Clear existing items

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        checkoutBtn.disabled = true;
        clearCartBtn.disabled = true; // Disable clear cart button too
        cartTotalAmountSpan.textContent = '0đ';
    } else {
        emptyCartMessage.style.display = 'none';
        checkoutBtn.disabled = false;
        clearCartBtn.disabled = false;
        let totalAmount = 0;
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.dataset.name = item.name; // Store product name for easier access
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-price">${item.price.toLocaleString('vi-VN')}đ</span>
                    <div class="cart-item-quantity-controls">
                        <button class="decrease-quantity-btn" data-name="${item.name}">-</button>
                        <span class="cart-item-quantity">${item.quantity}</span>
                        <button class="increase-quantity-btn" data-name="${item.name}">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" data-name="${item.name}">&times;</button>
            `;
            cartItemsContainer.appendChild(cartItemElement);
            totalAmount += item.price * item.quantity;
        });
        cartTotalAmountSpan.textContent = totalAmount.toLocaleString('vi-VN') + 'đ';
    }
}

function addProductToCart(productName, price, image) {
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: productName, price: price, image: image, quantity: 1 });
    }
    saveCart();
    alert(`${productName} đã được thêm vào giỏ hàng!`);
}

function updateQuantity(productName, change) {
    const itemIndex = cart.findIndex(item => item.name === productName);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1); // Remove if quantity is 0 or less
        }
        saveCart();
    }
}

function removeCartItem(productName) {
    cart = cart.filter(item => item.name !== productName);
    saveCart();
}

// Attach listeners for "Add to Cart" buttons on product pages
function attachAddToCartListeners() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.onclick = (event) => {
            event.preventDefault();
            const productElement = button.closest('.product-item') || button.closest('.featured-product');
            if (productElement) {
                const productName = productElement.querySelector('.product-name, h3').textContent;
                const productPriceText = productElement.querySelector('.product-price, .price').textContent;
                const productPrice = parseFloat(productPriceText.replace(/\D/g, '')); // Extract number
                const productImage = productElement.querySelector('img').src;
                addProductToCart(productName, productPrice, productImage);
            }
        };
    });
}


// Event delegation for cart item quantity controls and remove button
if (cartItemsContainer) {
    cartItemsContainer.addEventListener('click', (event) => {
        const target = event.target;
        // Find the closest parent with data-name to get the product name
        const cartItemElement = target.closest('.cart-item');
        if (!cartItemElement) return; // Click was not inside a cart item

        const productName = cartItemElement.dataset.name;

        if (target.classList.contains('increase-quantity-btn')) {
            updateQuantity(productName, 1);
        } else if (target.classList.contains('decrease-quantity-btn')) {
            updateQuantity(productName, -1);
        } else if (target.classList.contains('remove-item-btn')) {
            removeCartItem(productName);
        }
    });
}

// Event listeners for cart page buttons
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            // Hiển thị xác nhận đơn hàng
            const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const orderSummary = cart.map(item => `${item.name} (${item.quantity} x ${item.price.toLocaleString('vi-VN')}đ)`).join('\n');

            const confirmCheckout = confirm(
                `Bạn có muốn thanh toán đơn hàng này không?\n\n` +
                `Chi tiết đơn hàng:\n${orderSummary}\n\n` +
                `Tổng cộng: ${totalAmount.toLocaleString('vi-VN')}đ`
            );

            if (confirmCheckout) {
                // Mô phỏng quá trình thanh toán thành công
                alert('Thanh toán thành công! Đơn hàng của bạn đang được xử lý.');
                cart = []; // Xóa giỏ hàng sau khi thanh toán
                saveCart(); // Lưu trạng thái giỏ hàng đã trống
                // Chuyển hướng người dùng đến trang xác nhận đơn hàng hoặc trang chủ
                // window.location.href = 'thankyou.html'; // Hoặc bất kỳ trang nào bạn muốn
            } else {
                alert('Bạn đã hủy thanh toán.');
            }

        } else {
            alert('Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm để thanh toán.');
        }
    });
}

if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn xóa tất cả sản phẩm khỏi giỏ hàng?')) {
            cart = [];
            saveCart();
        }
    });
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount(); // Cập nhật số lượng giỏ hàng trên icon
    renderCartItems(); // Hiển thị các mục trong giỏ hàng trên trang giohang.html
});