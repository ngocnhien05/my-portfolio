document.addEventListener('DOMContentLoaded', () => {
    // 1. Dark mode toggle (nhớ lựa chọn bằng localStorage)
    const btn = document.getElementById('theme-toggle');
    try { if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark'); } catch (e) {}
    const capNhatNut = () => btn.textContent = document.body.classList.contains('dark') ? '☀️ Sáng' : '🌙 Tối';
    capNhatNut();
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        try { localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light'); } catch (e) {}
        capNhatNut();
    });

    // 2. Animation khi scroll bằng Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
