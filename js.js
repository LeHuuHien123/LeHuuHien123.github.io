// ====== Các biến và hàm xử lý form đăng nhập/đăng ký ======
const openLoginFormBtn = document.getElementById('openLoginFormBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const overlay = document.getElementById('overlay');

const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const closeLoginForm = document.getElementById('closeLoginForm');
const closeRegisterForm = document.getElementById('closeRegisterForm');

function showForm(formElement) {
    hideAllForms();
    formElement.style.display = 'block';
    overlay.style.display = 'block'; // Hiển thị overlay
}

function hideAllForms() {
    // Kiểm tra sự tồn tại của các form trước khi thao tác
    if (loginForm) loginForm.style.display = 'none';
    if (registerForm) registerForm.style.display = 'none';
    if (overlay) overlay.style.display = 'none'; // Ẩn overlay
}

// Xử lý đăng nhập (đây là hàm giả định, bạn cần thay bằng logic thực tế)
function handleLogin(event) {
    event.preventDefault(); // Ngăn form gửi đi
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    // Thêm logic kiểm tra đăng nhập thực tế ở đây
    console.log('Đăng nhập với:', email, password);
    alert('Đăng nhập thành công (giả định)!');
    hideAllForms();
}

// Xử lý đăng ký (đây là hàm giả định, bạn cần thay bằng logic thực tế)
function handleRegister(event) {
    event.preventDefault(); // Ngăn form gửi đi
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    // Thêm logic đăng ký thực tế ở đây
    console.log('Đăng ký với:', name, email, password);
    alert('Đăng ký thành công (giả định)! Vui lòng đăng nhập.');
    hideAllForms();
    showForm(loginForm); // Sau khi đăng ký, chuyển sang form đăng nhập
}


// ====== Dữ liệu sản phẩm theo danh mục ======
var productsByCategory = {
    'Màn Hình Máy Tính': [
        { imageUrl: 'img/product/mh1.png', name: 'Màn hình thông minh LG MyView 25SR50F 25 inch', price: '2.890.000đ' },
        { imageUrl: 'img/product/mh2.png', name: 'Màn hình LG UltraGear 24GN60R-B 24 inch', price: '2.990.000đ' },
        { imageUrl: 'img/product/mh3.png', name: 'Màn hình Samsung LS24C360EAE/SV 24 inch', price: '2.590.000đ' },
        { imageUrl: 'img/product/mh4.png', name: 'Màn hình ASUS TUF Gaming VG249Q3A 24 inch', price: '3.990.000đ' },
        { imageUrl: 'img/product/mh5.png', name: 'Màn hình MSI PRO MP271CW 27 inch', price: '3.490.000đ' },
        { imageUrl: 'img/product/mh6.png', name: 'Màn hình E-Dra EGM24F100H 24 inch', price: '1.605.500đ' },
        { imageUrl: 'img/product/mh7.png', name: 'Màn hình thông minh LG MyView 25SR50F 25 inch', price: '2.890.000đ' },
        { imageUrl: 'img/product/mh8.png', name: 'Màn hình LG UltraWide 29WQ600 29 inch ', price: '4.265.500đ' }
    ],
    'Loa - Tai Nghe': [
        { imageUrl: 'img/product/tn1.png', name: 'Tai nghe Bluetooth Apple AirPods Pro 2 2023 USB-C', price: '5.690.000đ' },
        { imageUrl: 'img/product/tn2.png', name: 'Loa Bluetooth Harman Kardon Onyx Studio 8', price: '4.590.000đ' },
        { imageUrl: 'img/product/tn3.png', name: 'Loa Bluetooth Harman Kardon Go + Play 3', price: '6.890.000đ VNĐ' },
        { imageUrl: 'img/product/tn4.png', name: 'Tai nghe thể thao Bose Ultra Open Earbuds', price: '7.265.500đ' },
        { imageUrl: 'img/product/tn5.png', name: 'Loa JBL', price: '6.265.500đ' },
        { imageUrl: 'img/product/tn6.png', name: 'Tai Nghe Samsung Galaxy Buds 3 Pro', price: '4.290.500đ' },
        { imageUrl: 'img/product/tn7.png', name: 'Loa Marshall 3', price: '6.990.000đ' },
        { imageUrl: 'img/product/tn8.png', name: 'Microphone thu âm Podcast Shure MV7+', price: '7.265.500đ' }
    ],
    'Bàn Ghế Gaming': [
        { imageUrl: 'img/product/bg1.png', name: 'Ghế Chơi game WARRIOR WGC206', price: '2.690.000đ' },
        { imageUrl: 'img/product/bg2.png', name: 'Ghế Gaming E-Dra Level E-EGC229', price: '2.890.000đ' },
        { imageUrl: 'img/product/bg3.png', name: 'Ghế Gaming Corsair TC100 chất liệu vải Fabric', price: '4.890.000đ VNĐ' },
        { imageUrl: 'img/product/bg4.png', name: 'Ghế Gaming Razer Enki', price: '10.265.500đ' },
        { imageUrl: 'img/product/bg5.png', name: 'Ghế Gaming Corsair T3 Rush', price: '6.265.500đ' },
        { imageUrl: 'img/product/bg6.png', name: 'Bàn làm việc điều chỉnh độ cao Epione Smartdesk Lite', price: '4.290.500đ' },
        { imageUrl: 'img/product/bg7.png', name: 'Bàn làm việc nâng hạ thông minh Flexispot ET225-EC5', price: '6.990.000đ' },
        { imageUrl: 'img/product/bg8.png', name: 'Bàn làm việc điều chỉnh độ cao Epione Smartdesk Pro 2.0 - 3 Stages - 2 động cơ', price: '7.265.500đ' }
    ],
    'Bàn Phím Cơ': [
        { imageUrl: 'img/product/bp1.png', name: 'Bàn Phím Cơ Aula S2002 Blue', price: '449.000đ' },
        { imageUrl: 'img/product/bp2.png', name: 'Bàn Phím Cơ Gaming Predator Aethon TKL 301', price: '990.000đ' },
        { imageUrl: 'img/product/bp3.png', name: 'Bàn phím quang cơ Dareu EK98X PBT Multi Led', price: '890.000đ' },
        { imageUrl: 'img/product/bp4.png', name: 'Bàn phím Gaming MSI Force GK300 RGB Led đen', price: '965.500đ' },
        { imageUrl: 'img/product/bp5.png', name: 'Bàn phím Gaming Asus ROG Falchion RX Low Profile', price: '3.265.500đ' },
        { imageUrl: 'img/product/bp6.png', name: 'Bàn Phím gaming không dây Logitech G915 X Lightspeed TKL Low Profile', price: '4.290.500đ' },
        { imageUrl: 'img/product/bp7.png', name: 'Bàn phím gaming không dây Logitech G715 TKL Lightspeed Rgb Linear', price: '3.990.000đ' },
        { imageUrl: 'img/product/bp8.png', name: 'Bàn phím cơ Asus Tuf Gaming K3 Gen II', price: '1.265.500đ' }
    ],
    'Hàng Cũ Giá Rẻ': [
        { imageUrl: 'img/product/hc1.png', name: 'Iphone 15 Cũ', price: '18.449.000đ' },
        { imageUrl: 'img/product/hc2.png', name: 'Apple Ipad cũ', price: '8.490.000đ' },
        { imageUrl: 'img/product/hc3.png', name: 'Macbook Pro Gen 3 Cũ', price: '16.990.000đ' },
        { imageUrl: 'img/product/hc4.png', name: 'Laptop Asus Vivobook Cũ', price: '7.965.500đ' },
        { imageUrl: 'img/product/hc5.png', name: 'Tai Nghe Sony WH cũ', price: '3.265.500đ' },
        { imageUrl: 'img/product/hc6.png', name: 'Apple Watch SE 40mm', price: '4.290.500đ' },
        { imageUrl: 'img/product/hc7.png', name: 'Camera IP ngoài trời 360 độ 5MP IMOU IPC-S7DP-5M0WEZ Full Color - Cũ', price: '1.000.000đ' },
        { imageUrl: 'img/product/hc8.png', name: 'Router Wifi TP-Link TL WR844N chuẩn n tốc độ 300mbps - Cũ', price: '265.500đ' }
    ],
    'Phụ Kiện Khác': [
        { imageUrl: 'img/product/pk1.png', name: 'Bàn di chuột cỡ lớn', price: '99.000đ' },
        { imageUrl: 'img/product/pk2.png', name: 'Giá đỡ Laptop điều chỉnh độ cao', price: '150.000đ' },
        { imageUrl: 'img/product/pk3.png', name: 'Đèn LED RGB dải cho PC', price: '120.000đ' },
        { imageUrl: 'img/product/pk4.png', name: 'Webcam HD cho Livestream', price: '500.000đ' },
        { imageUrl: 'img/product/pk5.png', name: 'Microphone Gaming chuyên nghiệp', price: '750.000đ' },
        { imageUrl: 'img/product/pk6.png', name: 'Tay cầm chơi game không dây Dualshock', price: '6.500.000đ' },
        { imageUrl: 'img/product/pk7.png', name: 'Hub USB-C đa năng', price: '300.000đ' },
        { imageUrl: 'img/product/pk8.png', name: 'Đế tản nhiệt Laptop RGB', price: '1.085.000đ' }
    ],
    'Chuột': [
        { imageUrl: 'img/product/c1.png', name: 'Chuột có dây Gaming Logitech G102 LightSync Gen 2', price: '409.000đ' },
        { imageUrl: 'img/product/c2.png', name: 'Chuột Gaming Logitech G502 HERO', price: '1.200.000đ' },
        { imageUrl: 'img/product/c3.png', name: 'Chuột Corsair Harpoon RGB Pro', price: '650.000đ' },
        { imageUrl: 'img/product/c4.png', name: 'Chuột Gaming Razer DeathAdder V2', price: '990.000đ' },
        { imageUrl: 'img/product/c5.png', name: 'Chuột không dây Logitech MX Master 3S', price: '2.500.000đ' },
        { imageUrl: 'img/product/c6.png', name: 'Chuột SteelSeries Rival 3', price: '700.000đ' },
        { imageUrl: 'img/product/c7.png', name: 'Chuột HyperX Pulsefire Core', price: '450.000đ' },
        { imageUrl: 'img/product/c8.png', name: 'Chuột BenQ Zowie EC2-A', price: '1.100.000đ' }
    ],
    'Linh Kiện PC': [
        { imageUrl: 'img/product/lk1.png', name: 'Card đồ họa NVIDIA RTX 3060', price: '8.000.000đ' },
        { imageUrl: 'img/product/lk2.png', name: 'RAM DDR4 16GB (8GBx2) bus 3200MHz', price: '1.500.000đ' },
        { imageUrl: 'img/product/lk3.png', name: 'CPU AMD Ryzen 5 5600X', price: '4.000.000đ' },
        { imageUrl: 'img/product/lk4.png', name: 'Mainboard ASUS ROG Strix B550-F Gaming', price: '3.500.000đ' },
        { imageUrl: 'img/product/lk5.png', name: 'Ổ cứng SSD NVMe 1TB Samsung 970 EVO Plus', price: '2.200.000đ' },
        { imageUrl: 'img/product/lk6.png', name: 'Nguồn máy tính Corsair RM750e 750W', price: '1.800.000đ' },
        { imageUrl: 'img/product/lk7.png', name: 'Case Gaming NZXT H5 Flow', price: '1.500.000đ' },
        { imageUrl: 'img/product/lk8.png', name: 'Tản nhiệt CPU AIO Cooler Master ML240L', price: '1.300.000đ' }
    ]
};

// ====== Hàm hiển thị sản phẩm theo danh mục ======
function displayProductsByCategory(categoryName) {
    const featuredProductsSection = document.getElementById('featured-products');
    const categoryProductsSection = document.getElementById('category-products');
    const categoryTitleSpan = document.getElementById('category-title');
    const categoryProductGrid = document.getElementById('category-product-grid');

    if (!categoryProductsSection || !categoryTitleSpan || !categoryProductGrid) {
        console.error("Thiếu các phần tử HTML cần thiết cho hiển thị danh mục sản phẩm.");
        return;
    }

    // Ẩn phần sản phẩm nổi bật
    if (featuredProductsSection) {
        featuredProductsSection.style.display = 'none';
    }

    // Hiển thị phần sản phẩm theo danh mục
    categoryProductsSection.style.display = 'block';
    categoryTitleSpan.textContent = categoryName;
    categoryProductGrid.innerHTML = ''; // Xóa các sản phẩm cũ

    const products = productsByCategory[categoryName];
    if (products) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product-item');
            productDiv.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <button class="add-to-cart-btn" 
                        data-name="${product.name}" 
                        data-price="${product.price}"
                        data-image="${product.imageUrl}">
                    Thêm vào giỏ
                </button>
            `;
            categoryProductGrid.appendChild(productDiv);
        });
        attachAddToCartListeners(); // Gắn lại trình nghe sự kiện sau khi thêm sản phẩm
    } else {
        categoryProductGrid.innerHTML = '<p>Không tìm thấy sản phẩm nào trong danh mục này.</p>';
    }
}

// ====== Xử lý Banner Slider ======
let slideIndex = 1; // Khởi tạo slideIndex

// Hàm hiển thị slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 1]) { // Đảm bảo slide tồn tại
        slides[slideIndex - 1].style.display = "block";
    }
    if (dots[slideIndex - 1]) { // Đảm bảo dot tồn tại
        dots[slideIndex - 1].className += " active";
    }
}

// Hàm chuyển slide tiến/lùi
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Hàm chuyển đến slide cụ thể qua chấm điều hướng
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// ====== Xử lý Thêm logo công ty vào Footer ======
function addCompany(img, altText) {
    var companyList = document.querySelector('.company-list');
    if (companyList) {
        var newImg = document.createElement('img');
        newImg.src = img;
        newImg.alt = altText;
        companyList.appendChild(newImg);
    }
}

// Danh sách logo và vòng lặp để thêm vào footer
var company = ["Ace.png", "asus.png", "Dell.png", "Gigabyte.png", "Huawei.png", "Lenovo.png",
    "LG.png", "Msi.png", "razer.png", "Apple.jpg"
];
for (var c of company) {
    addCompany("img/company/" + c, c.slice(0, c.lastIndexOf('.')));
}

// ====== Hàm xử lý thêm sản phẩm vào giỏ hàng ======
function addToCart(productName, productPrice, productImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Tải giỏ hàng từ localStorage

    const existingProductIndex = cart.findIndex(item => item.name === productName);

    if (existingProductIndex > -1) {
        // Sản phẩm đã có trong giỏ, tăng số lượng
        cart[existingProductIndex].quantity += 1;
    } else {
        // Sản phẩm chưa có, thêm mới vào giỏ
        cart.push({
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Lưu giỏ hàng vào localStorage
    alert(`Đã thêm "${productName}" vào giỏ hàng!`);
    updateCartCountDisplay(); // Cập nhật số lượng sản phẩm trên biểu tượng giỏ hàng
}

// Hàm để cập nhật hiển thị số lượng sản phẩm trên biểu tượng giỏ hàng
function updateCartCountDisplay() {
    let cart = JSON.parse(localStorage.getItem('cart')) || []; // Tải giỏ hàng từ localStorage
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountSpan = document.querySelector('.cart-count'); // Giả sử bạn có một span với class 'cart-count' trên biểu tượng giỏ hàng

    if (cartCountSpan) {
        cartCountSpan.textContent = totalCount;
    }
}

// Gắn trình nghe sự kiện cho tất cả các nút "Thêm vào giỏ"
function attachAddToCartListeners() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        // Đảm bảo không gắn nhiều lần listener
        button.removeEventListener('click', handleAddToCartClick); // Xóa listener cũ (nếu có)
        button.addEventListener('click', handleAddToCartClick); // Thêm listener mới
    });
}

// Xử lý click cho nút "Thêm vào giỏ"
function handleAddToCartClick(event) {
    const button = event.target;
    const productName = button.dataset.name;
    const productPrice = button.dataset.price;
    const productImage = button.dataset.image; // Lấy đường dẫn ảnh từ data-image

    if (productName && productPrice && productImage) {
        addToCart(productName, productPrice, productImage);
    } else {
        console.error("Thiếu thông tin sản phẩm để thêm vào giỏ hàng:", button);
    }
}

// ====== Khởi tạo các chức năng khi DOM đã tải xong ======
document.addEventListener('DOMContentLoaded', () => {
    // Mở form Đăng Nhập khi click nút trên navbar
    if (openLoginFormBtn) {
        openLoginFormBtn.addEventListener('click', () => {
            showForm(loginForm);
        });
    }

    // Chuyển sang form Đăng Ký
    if (registerLink) {
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            showForm(registerForm);
        });
    }

    // Chuyển sang form Đăng Nhập từ Đăng Ký
    if (loginLink) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            showForm(loginForm);
        });
    }

    // Đóng form Đăng Nhập
    if (closeLoginForm) {
        closeLoginForm.addEventListener('click', hideAllForms);
    }

    // Đóng form Đăng Ký
    if (closeRegisterForm) {
        closeRegisterForm.addEventListener('click', hideAllForms);
    }

    // Đóng form khi click ra ngoài overlay
    if (overlay) {
        overlay.addEventListener('click', () => {
            hideAllForms();
        });
    }

    // Xử lý submit form đăng nhập
    const loginSubmitBtn = document.querySelector('#loginForm button[type="submit"]');
    if (loginSubmitBtn) {
        loginSubmitBtn.addEventListener('click', handleLogin);
    }

    // Xử lý submit form đăng ký
    const registerSubmitBtn = document.querySelector('#registerForm button[type="submit"]');
    if (registerSubmitBtn) {
        registerSubmitBtn.addEventListener('click', handleRegister);
    }

    // Gắn trình nghe sự kiện cho các liên kết danh mục
    const categoryLinks = document.querySelectorAll('.submenu a[data-category]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.dataset.category;
            displayProductsByCategory(category);
        });
    });

    // Hàm để quay lại trang chủ và hiển thị lại sản phẩm nổi bật
    const homeLink = document.querySelector('.menu a[href="#"]');
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            const featuredProductsSection = document.getElementById('featured-products');
            const categoryProductsSection = document.getElementById('category-products');
            if (featuredProductsSection) {
                featuredProductsSection.style.display = 'block';
            }
            if (categoryProductsSection) {
                categoryProductsSection.style.display = 'none';
                document.getElementById('category-product-grid').innerHTML = '';
            }
            attachAddToCartListeners();
        });
    }

    // Khởi tạo hiển thị slide đầu tiên khi trang tải xong
    showSlides(slideIndex);

    // Gắn listener cho các nút "Thêm vào giỏ" trên trang chủ lúc ban đầu
    attachAddToCartListeners();
    // Cập nhật số lượng sản phẩm trên icon giỏ hàng khi tải trang
    updateCartCountDisplay();
});