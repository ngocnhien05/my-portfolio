document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Nguyễn Hoà Ngọc Nhiên đã load xong!');

    // Chỉ hiện lời chào 1 lần mỗi lần mở trang, không lặp lại khi chuyển trang
    try {
        if (!sessionStorage.getItem('welcomed')) {
            alert('Chào mừng bạn đến với portfolio thật trên Internet của mình!');
            sessionStorage.setItem('welcomed', 'yes');
        }
    } catch (e) {}

    // Xử lý form liên hệ (chỉ hiển thị thông báo, không gửi đi thật)
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            document.getElementById('form-result').textContent =
                'Cảm ơn ' + name + '! Mình đã nhận được lời nhắn.';
            form.reset();
        });
    }
});
