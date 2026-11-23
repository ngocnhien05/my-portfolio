// Đèn kéo quân: 6 mặt xếp thành lăng trụ lục giác, JavaScript cho quay liên tục
document.addEventListener('DOMContentLoaded', () => {
    const ring = document.getElementById('ring');
    const status = document.getElementById('status');
    const SO_MAT = 6;
    const BAN_KINH = 175;          // khoảng cách từ tâm tới mỗi mặt (px)
    let goc = 0;                    // góc quay hiện tại
    let dangQuay = true;

    // Tạo 6 mặt đèn
    for (let i = 0; i < SO_MAT; i++) {
        const mat = document.createElement('div');
        mat.className = 'face';
        mat.style.transform = `rotateY(${i * 60}deg) translateZ(${BAN_KINH}px)`;
        mat.innerHTML = `<img src="images/anh${i + 1}.jpg" alt="Ảnh ${i + 1}" onerror="this.remove()"><span>Ảnh ${i + 1}</span>`;

        // Rê chuột vào thì dừng, rê ra thì quay tiếp
        mat.addEventListener('mouseenter', () => dung(i + 1));
        mat.addEventListener('mouseleave', quayTiep);
        // Trên điện thoại: chạm để dừng / chạm lần nữa để quay tiếp
        mat.addEventListener('touchstart', (e) => {
            e.preventDefault();
            dangQuay ? dung(i + 1) : quayTiep();
        }, { passive: false });

        ring.appendChild(mat);
    }

    function dung(so) {
        dangQuay = false;
        status.textContent = 'Đèn đã dừng ở Ảnh ' + so;
    }
    function quayTiep() {
        dangQuay = true;
        status.textContent = '';
    }

    // Vòng lặp quay
    function quay() {
        if (dangQuay) {
            goc = (goc + 0.4) % 360;
            ring.style.transform = `rotateX(-8deg) rotateY(${goc}deg)`;
        }
        requestAnimationFrame(quay);
    }
    quay();
});
