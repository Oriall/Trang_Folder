(function () {
    let _images = [];
    let _cur = 0;

    window.openFormulaModal = function (title, images) {
        _images = images || [];
        _cur = 0;

        document.getElementById('formula-modal-title').textContent = title;
        renderSlides();
        renderDots();
        updateNav();
        updateCounter();

        const overlay = document.getElementById('formula-modal-overlay');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    window.closeFormulaModal = function () {
        document.getElementById('formula-modal-overlay').classList.remove('open');
        document.body.style.overflow = '';
    };

    window.fmNavigate = function (dir) {
        _cur = Math.max(0, Math.min(_images.length - 1, _cur + dir));
        document.getElementById('formula-modal-slides').style.transform =
            `translateX(-${_cur * 100}%)`;
        updateNav();
        updateCounter();
        renderDots();
    };

    function renderSlides() {
        const container = document.getElementById('formula-modal-slides');
        container.style.transform = 'translateX(0)';
        container.innerHTML = _images.map((src, i) => `
      <div class="fm-slide">
        <img src="${src}" alt="Công thức ${i + 1}"
             onerror="this.src='https://placehold.co/600x300/e2e8f0/94a3b8?text=Ảnh+chưa+có'"
             loading="lazy">
      </div>
    `).join('');
    }

    function renderDots() {
        const el = document.getElementById('fm-dots');
        if (_images.length <= 1) { el.innerHTML = ''; return; }
        el.innerHTML = _images.map((_, i) =>
            `<div class="fm-dot ${i === _cur ? 'active' : ''}" onclick="fmNavigate(${i - _cur})"></div>`
        ).join('');
    }

    function updateNav() {
        const prev = document.getElementById('fm-prev');
        const next = document.getElementById('fm-next');
        const single = _images.length <= 1;
        prev.classList.toggle('hidden', single || _cur === 0);
        next.classList.toggle('hidden', single || _cur === _images.length - 1);
    }

    function updateCounter() {
        document.getElementById('fm-counter').textContent =
            _images.length > 1 ? `${_cur + 1} / ${_images.length}` : '';
    }

    /* Đóng khi click ngoài modal */
    document.getElementById('formula-modal-overlay').addEventListener('click', function (e) {
        if (e.target === this) closeFormulaModal();
    });

    /* Đóng bằng phím Escape, chuyển slide bằng ← → */
    document.addEventListener('keydown', function (e) {
        const overlay = document.getElementById('formula-modal-overlay');
        if (!overlay.classList.contains('open')) return;
        if (e.key === 'Escape') closeFormulaModal();
        if (e.key === 'ArrowLeft') fmNavigate(-1);
        if (e.key === 'ArrowRight') fmNavigate(1);
    });
})();