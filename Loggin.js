// Hàm chuyển đổi giữa biểu mẫu đăng nhập và đăng ký
function toggleForms() {
    var loginContainer = document.getElementById('loginContainer');
    var registerContainer = document.getElementById('registerContainer');
    loginContainer.classList.toggle('active');
    registerContainer.classList.toggle('active');
}

// Hàm xử lý sự kiện gửi biểu mẫu đăng nhập
function loginRedirect(event) {
event.preventDefault();

var username = document.getElementById('username').value;
var password = document.getElementById('password').value;

// Xác định thông tin đăng nhập đúng
var correctAdmin = { username: "admin", password: "1234" }; // Thông tin admin
var correctUser = { username: "user", password: "5678" };   // Thông tin người dùng

// Kiểm tra thông tin đăng nhập
if (username === correctAdmin.username && password === correctAdmin.password) {
window.location.href = "admin.html"; // Chuyển đến trang quản trị viên
} else if (username === correctUser.username && password === correctUser.password) {
window.location.href = "home.html"; // Chuyển đến trang người dùng
} else {
document.getElementById('errorMessage').textContent = "Tên đăng nhập hoặc mật khẩu không đúng!";
}
}