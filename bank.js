// ============================================================
//  NGÂN HÀNG CÂU HỎI – lấy từ Đề số 1 & Đề số 2 (file đề + đáp án)
// ============================================================

// ------- PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN -------
// Mỗi câu: { id, q, opts:[{text,correct},...], solution }
// ĐỀ 1: 10 câu, đáp án: 1-B,2-A,3-C,4-B,5-A,6-C,7-D,8-A,9-A,10-B
const bankP1 = [
    // --- ĐỀ 1 ---
    {
        id: "D1_P1_01",
        q: "Đơn vị đo tốc độ thường dùng trong đời sống ở Việt Nam là:",
        opts: [
            { text: "m.s", correct: false },
            { text: "km/h", correct: true },
            { text: "s/m", correct: false },
            { text: "kg/m³", correct: false }
        ],
        solution: "Đơn vị tốc độ phổ biến trong đời sống là <strong>km/h</strong>."
    },
    {
        id: "D1_P1_02",
        q: "Một bạn học sinh đi bộ từ nhà đến trường mất 20 phút với tốc độ 4,5 km/h. Quãng đường từ nhà đến trường là:",
        opts: [
            { text: "1,5 km", correct: true },
            { text: "90 km", correct: false },
            { text: "15 km", correct: false },
            { text: "0,225 km", correct: false }
        ],
        solution: "t = 20 phút = 1/3 giờ. s = v×t = 4,5 × 1/3 = <strong>1,5 km</strong>."
    },
    {
        id: "D1_P1_03",
        q: "Công thức liên hệ giữa quãng đường (s), tốc độ (v) và thời gian (t) là:",
        opts: [
            { text: "s = v/t", correct: false },
            { text: "s = t/v", correct: false },
            { text: "s = v·t", correct: true },
            { text: "v = s·t", correct: false }
        ],
        solution: "Công thức cơ bản: <strong>s = v·t</strong>."
    },
    {
        id: "D1_P1_04",
        q: "Đổi tốc độ 10 m/s sang đơn vị km/h, kết quả là:",
        opts: [
            { text: "10 km/h", correct: false },
            { text: "36 km/h", correct: true },
            { text: "1,8 km/h", correct: false },
            { text: "3,6 km/h", correct: false }
        ],
        solution: "10 m/s × 3,6 = <strong>36 km/h</strong>."
    },
    {
        id: "D1_P1_05",
        q: "Vị trí của một vật không thay đổi so với vật mốc theo thời gian thì vật đó gọi là:",
        opts: [
            { text: "Vật đứng yên", correct: true },
            { text: "Vật chuyển động", correct: false },
            { text: "Vật mốc", correct: false },
            { text: "Quỹ đạo", correct: false }
        ],
        solution: "Vật không thay đổi vị trí so với vật mốc gọi là <strong>vật đứng yên</strong>."
    },
    {
        id: "D1_P1_06",
        q: "Chuyển động của quả bóng khi được sút mạnh vào khung lưới là:",
        opts: [
            { text: "Chuyển động thẳng", correct: false },
            { text: "Chuyển động tròn", correct: false },
            { text: "Chuyển động cong", correct: true },
            { text: "Chuyển động đứng yên", correct: false }
        ],
        solution: "Quả bóng bay theo <strong>đường cong</strong> (kết hợp lực đá và trọng lực)."
    },
    {
        id: "D1_P1_07",
        q: "Hành khách ngồi trên xe buýt đang chạy sẽ chuyển động so với:",
        opts: [
            { text: "Tài xế xe buýt", correct: false },
            { text: "Cửa xe buýt", correct: false },
            { text: "Ghế ngồi", correct: false },
            { text: "Cột điện bên đường", correct: true }
        ],
        solution: "Hành khách chuyển động so với các vật ngoài xe, ví dụ <strong>cột điện bên đường</strong>."
    },
    {
        id: "D1_P1_08",
        q: "Đồ thị quãng đường – thời gian của một vật đứng yên là một đường thẳng:",
        opts: [
            { text: "Nằm ngang", correct: true },
            { text: "Đi lên từ gốc tọa độ", correct: false },
            { text: "Đi xuống", correct: false },
            { text: "Thẳng đứng", correct: false }
        ],
        solution: "Vật đứng yên: s không đổi theo t → đồ thị là đường <strong>nằm ngang</strong>."
    },
    {
        id: "D1_P1_09",
        q: "Một người đi 2 km trong 30 phút. Tốc độ trung bình của người đó là:",
        opts: [
            { text: "4 km/h", correct: true },
            { text: "60 km/h", correct: false },
            { text: "1 km/h", correct: false },
            { text: "15 km/h", correct: false }
        ],
        solution: "t = 0,5 giờ. v = 2 / 0,5 = <strong>4 km/h</strong>."
    },
    {
        id: "D1_P1_10",
        q: "Để đo tốc độ của một vật, ta cần dùng dụng cụ đo:",
        opts: [
            { text: "Thước và cân", correct: false },
            { text: "Thước và đồng hồ", correct: true },
            { text: "Lực kế và đồng hồ", correct: false },
            { text: "Thước và nhiệt kế", correct: false }
        ],
        solution: "Tốc độ = quãng đường / thời gian → cần <strong>thước</strong> (đo s) và <strong>đồng hồ</strong> (đo t)."
    },
    // --- ĐỀ 2 ---
    {
        id: "D2_P1_01",
        q: "Chuyển động cơ học là sự thay đổi vị trí của vật so với:",
        opts: [
            { text: "Chính nó", correct: false },
            { text: "Vật mốc", correct: true },
            { text: "Mặt đất", correct: false },
            { text: "Trọng tâm của vật", correct: false }
        ],
        solution: "Chuyển động cơ học là sự thay đổi vị trí so với <strong>vật mốc</strong>."
    },
    {
        id: "D2_P1_02",
        q: "Một tàu hỏa đi được 90 km trong 1,5 giờ. Tốc độ của tàu là:",
        opts: [
            { text: "60 km/h", correct: true },
            { text: "135 km/h", correct: false },
            { text: "45 km/h", correct: false },
            { text: "100 km/h", correct: false }
        ],
        solution: "v = 90 / 1,5 = <strong>60 km/h</strong>."
    },
    {
        id: "D2_P1_03",
        q: "Đồ thị quãng đường – thời gian mô tả:",
        opts: [
            { text: "Hình dạng vật", correct: false },
            { text: "Mối quan hệ giữa s và t", correct: true },
            { text: "Khối lượng vật", correct: false },
            { text: "Nhiệt độ vật", correct: false }
        ],
        solution: "Đồ thị s-t mô tả <strong>mối quan hệ giữa quãng đường và thời gian</strong>."
    },
    {
        id: "D2_P1_04",
        q: "Tốc độ được tính bằng công thức v = s/t. Nếu đơn vị của s là mét (m), t là giây (s) thì đơn vị của v là:",
        opts: [
            { text: "km/h", correct: false },
            { text: "m/s", correct: true },
            { text: "m.s", correct: false },
            { text: "s/m", correct: false }
        ],
        solution: "s (m) ÷ t (s) = <strong>m/s</strong>."
    },
    {
        id: "D2_P1_05",
        q: "18 km/h tương đương với:",
        opts: [
            { text: "10 m/s", correct: false },
            { text: "5 m/s", correct: true },
            { text: "15 m/s", correct: false },
            { text: "20 m/s", correct: false }
        ],
        solution: "18 km/h ÷ 3,6 = <strong>5 m/s</strong>."
    },
    {
        id: "D2_P1_06",
        q: "Một người ngồi trên thuyền thả trôi theo dòng nước. Người đó đứng yên so với:",
        opts: [
            { text: "Bờ sông", correct: false },
            { text: "Hàng cây bên bờ", correct: false },
            { text: "Dòng nước", correct: true },
            { text: "Đáy sông", correct: false }
        ],
        solution: "Người và thuyền cùng trôi theo dòng → đứng yên so với <strong>dòng nước</strong>."
    },
    {
        id: "D2_P1_07",
        q: "Khi khoảng cách từ vật đến vật mốc không đổi, ta kết luận vật đứng yên. Kết luận này:",
        opts: [
            { text: "Luôn đúng", correct: false },
            { text: "Luôn sai", correct: false },
            { text: "Chưa chắc đúng (vật có thể chạy tròn)", correct: true },
            { text: "Chỉ đúng với xe cộ", correct: false }
        ],
        solution: "Vật chạy tròn quanh mốc có khoảng cách không đổi nhưng vẫn chuyển động → <strong>chưa chắc đúng</strong>."
    },
    {
        id: "D2_P1_08",
        q: "Để biểu diễn chuyển động một cách trực quan, người ta thường dùng:",
        opts: [
            { text: "Đồ thị", correct: true },
            { text: "Văn bản", correct: false },
            { text: "Hình vẽ khối", correct: false },
            { text: "Bảng hóa học", correct: false }
        ],
        solution: "Người ta dùng <strong>đồ thị</strong> để biểu diễn chuyển động trực quan nhất."
    },
    {
        id: "D2_P1_09",
        q: "Tốc độ tức thời là tốc độ:",
        opts: [
            { text: "Trong cả chuyến đi", correct: false },
            { text: "Tại một thời điểm xác định", correct: true },
            { text: "Khi vật dừng lại", correct: false },
            { text: "Lớn nhất", correct: false }
        ],
        solution: "Tốc độ tức thời là tốc độ <strong>tại một thời điểm xác định</strong>."
    },
    {
        id: "D2_P1_10",
        q: "Một vật chuyển động thẳng đều, trong 2s đi được 10m. Trong 4s vật đi được:",
        opts: [
            { text: "10 m", correct: false },
            { text: "40 m", correct: false },
            { text: "20 m", correct: true },
            { text: "5 m", correct: false }
        ],
        solution: "Chuyển động đều: v = 10/2 = 5 m/s → trong 4s đi được 5×4 = <strong>20 m</strong>."
    }
];

// ------- PHẦN II: ĐÚNG/SAI -------
// Đề 1: Câu 1 (đáp án: a-Đúng, b-Sai, c-Đúng, d-Đúng)
//        Câu 2 (đáp án: a-Đúng, b-Sai, c-Đúng, d-Sai)
// Đề 2: Câu 1 (đáp án: a-Đúng, b-Đúng, c-Sai, d-Sai)
//        Câu 2 (đáp án: a-Đúng, b-Đúng, c-Sai, d-Đúng)
const bankP2 = [
    {
        id: "D1_P2_01",
        context: "Một người đi xe đạp trên đoạn đường thẳng AB dài 12 km. Trong 30 phút đầu, người đó đi được 6 km. Trong 30 phút tiếp theo, người đó đi hết quãng đường còn lại.",
        statements: [
            { text: "Tốc độ của người đó trong 30 phút đầu là 12 km/h.", isTrue: true, reason: "v = 6 km ÷ 0,5 h = 12 km/h. ✓" },
            { text: "Chuyển động của người đó trên cả quãng đường AB chắc chắn là chuyển động đều.", isTrue: false, reason: "Tốc độ trung bình trên cả đoạn là 12 km/h nhưng tốc độ tức thời có thể thay đổi → chưa thể khẳng định là chuyển động đều." },
            { text: "Thời gian tổng cộng để người đó đi hết quãng đường AB là 1 giờ.", isTrue: true, reason: "30 phút + 30 phút = 60 phút = 1 giờ. ✓" },
            { text: "Tốc độ trung bình trên cả quãng đường là 12 km/h.", isTrue: true, reason: "v_tb = 12 km ÷ 1 h = 12 km/h. ✓" }
        ]
    },
    {
        id: "D1_P2_02",
        context: "Xét đồ thị quãng đường – thời gian của một vật chuyển động. Trục tung biểu diễn quãng đường s (m), trục hoành biểu diễn thời gian t (s).",
        statements: [
            { text: "Nếu đồ thị là đường thẳng đi qua gốc tọa độ, vật chuyển động với tốc độ không đổi.", isTrue: true, reason: "Đường thẳng qua gốc tọa độ biểu thị s tỉ lệ thuận với t → tốc độ không đổi. ✓" },
            { text: "Độ dốc của đồ thị càng lớn thì tốc độ của vật càng nhỏ.", isTrue: false, reason: "Độ dốc (Δs/Δt) chính là tốc độ → độ dốc càng lớn thì tốc độ càng LỚN." },
            { text: "Tại thời điểm t mà đồ thị là đường nằm ngang, vật đang đứng yên.", isTrue: true, reason: "Đường nằm ngang → s không thay đổi → vật đứng yên. ✓" },
            { text: "Đơn vị của tốc độ tính từ đồ thị này là km/h.", isTrue: false, reason: "Trục tung là m, trục hoành là s → đơn vị tốc độ tính từ đồ thị là m/s, không phải km/h." }
        ]
    },
    {
        id: "D2_P2_01",
        context: "Một chiếc ca nô chuyển động trên dòng sông từ bến A đến bến B. Biết tốc độ của ca nô đối với nước tĩnh là 20 km/h, tốc độ dòng nước là 4 km/h.",
        statements: [
            { text: "Nếu ca nô đi xuôi dòng, tốc độ của ca nô đối với bờ là 24 km/h.", isTrue: true, reason: "Xuôi dòng: v = 20 + 4 = 24 km/h. ✓" },
            { text: "Nếu ca nô đi ngược dòng, tốc độ của ca nô đối với bờ là 16 km/h.", isTrue: true, reason: "Ngược dòng: v = 20 – 4 = 16 km/h. ✓" },
            { text: "Thời gian ca nô đi xuôi dòng luôn bằng thời gian đi ngược dòng trên cùng quãng đường AB.", isTrue: false, reason: "Xuôi nhanh hơn (24 > 16) nên thời gian xuôi NGẮN hơn thời gian ngược." },
            { text: "Nếu ca nô tắt máy thả trôi, nó sẽ đứng yên so với bờ sông.", isTrue: false, reason: "Thả trôi thì ca nô đứng yên so với NƯỚC, nhưng vẫn chuyển động so với bờ (v = 4 km/h)." }
        ]
    },
    {
        id: "D2_P2_02",
        context: "Quan sát bảng số liệu về quãng đường và thời gian của một người đi xe đạp: (0s; 0m), (2s; 4m), (4s; 8m), (6s; 12m).",
        statements: [
            { text: "Tốc độ của người đi xe đạp là 2 m/s.", isTrue: true, reason: "v = 4/2 = 8/4 = 12/6 = 2 m/s. ✓" },
            { text: "Quãng đường vật đi được tỉ lệ thuận với thời gian chuyển động.", isTrue: true, reason: "Đồ thị là đường thẳng qua gốc → s tỉ lệ thuận với t. ✓" },
            { text: "Sau 10 giây kể từ lúc bắt đầu, người đó đi được 25 m.", isTrue: false, reason: "s = v×t = 2×10 = 20 m (không phải 25 m)." },
            { text: "Đồ thị quãng đường – thời gian của người này là một đường thẳng đi qua gốc tọa độ.", isTrue: true, reason: "Tốc độ không đổi, s = 0 khi t = 0 → đồ thị là đường thẳng qua gốc tọa độ. ✓" }
        ]
    }
];

// ------- PHẦN III: TRẢ LỜI NGẮN -------
// Đề 1: 4 câu – đáp án: 15 km / 8 m/s / 15 m/s / vi phạm (43.2 km/h)
// Đề 2: 4 câu – đáp án: 80 km / 22.22 m/s / 2 cm/s / 10 m/s
const bankP3 = [
    // Đề 1
    {
        id: "D1_P3_01",
        q: "Một ô tô đi với tốc độ 60 km/h. Hỏi trong 15 phút ô tô đi được bao nhiêu km?",
        ans: 15,
        unit: "km",
        solution: "t = 15 phút = 0,25 h. s = v×t = 60 × 0,25 = <strong>15 km</strong>."
    },
    {
        id: "D1_P3_02",
        q: "Một vận động viên chạy 400 m mất 50 giây. Tốc độ của vận động viên là bao nhiêu m/s?",
        ans: 8,
        unit: "m/s",
        solution: "v = s/t = 400 / 50 = <strong>8 m/s</strong>."
    },
    {
        id: "D1_P3_03",
        q: "Đổi tốc độ 54 km/h sang đơn vị m/s.",
        ans: 15,
        unit: "m/s",
        solution: "54 km/h ÷ 3,6 = <strong>15 m/s</strong>."
    },
    {
        id: "D1_P3_04",
        q: "Biển báo ghi \"Tốc độ tối đa: 40 km/h\". Một xe đi với tốc độ 12 m/s. Đổi tốc độ xe ra km/h (để so sánh).",
        ans: 43.2,
        unit: "km/h",
        solution: "12 m/s × 3,6 = 43,2 km/h > 40 km/h → Xe <strong>vi phạm</strong>. Điền 43.2 vào ô."
    },
    // Đề 2
    {
        id: "D2_P3_01",
        q: "Một người đi xe máy trong 2 giờ đầu với tốc độ 40 km/h. Quãng đường đi được là bao nhiêu km?",
        ans: 80,
        unit: "km",
        solution: "s = v×t = 40 × 2 = <strong>80 km</strong>."
    },
    {
        id: "D2_P3_02",
        q: "Tốc kế của một ô tô chỉ 80 km/h. Đổi giá trị này ra m/s (làm tròn đến 2 chữ số thập phân).",
        ans: 22.22,
        unit: "m/s",
        solution: "80 ÷ 3,6 ≈ <strong>22,22 m/s</strong>."
    },
    {
        id: "D2_P3_03",
        q: "Một con rùa bò 2 m trong 100 giây. Tốc độ của rùa là bao nhiêu cm/s?",
        ans: 2,
        unit: "cm/s",
        solution: "s = 2 m = 200 cm. v = 200 / 100 = <strong>2 cm/s</strong>."
    },
    {
        id: "D2_P3_04",
        q: "Một đoàn tàu dài 100 m đi qua một cái cột điện hết 10 giây. Tốc độ của đoàn tàu là bao nhiêu m/s?",
        ans: 10,
        unit: "m/s",
        solution: "Quãng đường = chiều dài tàu = 100 m. v = 100 / 10 = <strong>10 m/s</strong>."
    }
];

// ============================================================
//  STATE & LOGIC
// ============================================================
let currentExam = { p1: [], p2: [], p3: [] };
let timerInterval = null;

// xóa dòng nav-tab, chỉ giữ lại phần show/hide tab và scroll
function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
    if (window.MathJax) MathJax.typesetPromise();
}

function shuffle(arr) {
    let a = JSON.parse(JSON.stringify(arr));
    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function startExam() {
    clearInterval(timerInterval);


    // Random đề 1 hoặc đề 2
    const de = Math.random() < 0.5 ? 1 : 2;
    const prefix = `D${de}_`;

    // Lọc câu theo đề được chọn, rồi shuffle nội bộ
    let p1 = shuffle(bankP1.filter(q => q.id.startsWith(prefix)));
    let p2 = shuffle(bankP2.filter(q => q.id.startsWith(prefix)));
    let p3 = shuffle(bankP3.filter(q => q.id.startsWith(prefix)));
    // Xáo đáp án phần 1
    p1.forEach(q => {
        q.displayOpts = shuffle(q.opts.map((o, i) => ({ ...o, origIdx: i })));
        q.userAnswer = null;
    });
    p2.forEach(q => { q.userAnswers = [null, null, null, null]; });
    p3.forEach(q => { q.userAnswer = ""; });

    currentExam = { p1, p2, p3 };

    document.getElementById('exam-id').innerText = (Math.floor(Math.random() * 899) + 100);
    document.getElementById('review-panel').classList.remove('open');
    renderExam();
    showTab('exam-area');
    startTimer(45 * 60);
}

function startTimer(sec) {
    clearInterval(timerInterval);
    let rem = sec;
    const disp = document.getElementById('exam-timer');
    timerInterval = setInterval(() => {
        let m = String(Math.floor(rem / 60)).padStart(2, '0');
        let s = String(rem % 60).padStart(2, '0');
        disp.innerHTML = `<i class="fas fa-stopwatch" style="color:#ef4444"></i> ${m}:${s}`;
        if (--rem < 0) {
            clearInterval(timerInterval);
            alert('Đã hết thời gian! Hệ thống tự nộp bài.');
            submitExam();
        }
    }, 1000);
}

function renderExam() {
    let h = '';

    // PHẦN I
    h += `<div class="exam-section-label">Phần I. Trắc nghiệm nhiều lựa chọn (10 câu × 0,25đ = 2,5đ)</div>`;
    currentExam.p1.forEach((q, idx) => {
        h += `<div class="question-card"><p>Câu ${idx + 1}: ${q.q}</p><div class="options-grid">`;
        q.displayOpts.forEach((opt, oIdx) => {
            const letter = String.fromCharCode(65 + oIdx);
            h += `<div class="mcq-option" data-qid="${q.id}" onclick="selectP1('${q.id}',${oIdx},this)">
                    <span class="opt-letter">${letter}</span>${opt.text}
                  </div>`;
        });
        h += `</div></div>`;
    });

    // PHẦN II
    h += `<div class="exam-section-label green">Phần II. Trắc nghiệm Đúng/Sai (2 câu × 2đ = 4đ – chấm bậc thang)</div>`;
    currentExam.p2.forEach((q, idx) => {
        h += `<div class="tf-card">
                <div class="context">${q.context}</div>`;
        q.statements.forEach((stmt, sIdx) => {
            const letter = String.fromCharCode(97 + sIdx);
            h += `<div class="tf-row">
                    <div class="stmt"><strong>${letter})</strong> ${stmt.text}</div>
                    <div class="tf-btns">
                        <button class="tf-btn" onclick="selectP2('${q.id}',${sIdx},true,this)">Đúng</button>
                        <button class="tf-btn" onclick="selectP2('${q.id}',${sIdx},false,this)">Sai</button>
                    </div>
                  </div>`;
        });
        h += `</div>`;
    });

    // PHẦN III
    h += `<div class="exam-section-label purple">Phần III. Trả lời ngắn (4 câu × 0,5đ = 2,0đ)</div>`;
    h += `<div class="sa-grid">`;
    currentExam.p3.forEach((q, idx) => {
        h += `<div class="sa-card">
                <p>Câu ${idx + 1}: ${q.q}</p>
                <div class="sa-input-wrap">
                    <span>Điền số:</span>
                    <input type="number" step="any" placeholder="..." oninput="inputP3('${q.id}',this.value)">
                </div>
                <div style="font-size:.78rem;color:#94a3b8;margin-top:6px">Đơn vị: ${q.unit}</div>
              </div>`;
    });
    h += `</div>`;

    document.getElementById('exam-content').innerHTML = h;
    if (window.MathJax) MathJax.typesetPromise();
}

function selectP1(qId, oIdx, el) {
    let q = currentExam.p1.find(x => x.id === qId);
    q.userAnswer = oIdx;
    document.querySelectorAll(`.mcq-option[data-qid="${qId}"]`).forEach(e => e.classList.remove('selected'));
    el.classList.add('selected');
}

function selectP2(qId, sIdx, val, el) {
    let q = currentExam.p2.find(x => x.id === qId);
    q.userAnswers[sIdx] = val;
    let parent = el.parentElement;
    parent.querySelectorAll('.tf-btn').forEach(b => b.classList.remove('selected-true', 'selected-false'));
    el.classList.add(val ? 'selected-true' : 'selected-false');
}

function inputP3(qId, val) {
    currentExam.p3.find(x => x.id === qId).userAnswer = val.trim();
}

// ============================================================
//  CHẤM ĐIỂM
// ============================================================
function submitExam() {
    clearInterval(timerInterval);

    // Phần I: 0.25đ/câu đúng
    let sc1 = 0;
    currentExam.p1.forEach(q => {
        if (q.userAnswer !== null && q.displayOpts[q.userAnswer].correct) sc1 += 0.25;
    });

    // Phần II: bậc thang mỗi câu (1đ tối đa)
    // 1 đúng=0.1, 2 đúng=0.25, 3 đúng=0.5, 4 đúng=1.0
    let sc2 = 0;
    currentExam.p2.forEach(q => {
        let ok = q.statements.filter((s, i) => q.userAnswers[i] === s.isTrue).length;
        if (ok === 1) sc2 += 0.1;
        else if (ok === 2) sc2 += 0.25;
        else if (ok === 3) sc2 += 0.5;
        else if (ok === 4) sc2 += 1.0;
    });

    // Phần III: 0.5đ/câu đúng (sai số ±0.01 để tránh float lỗi)
    let sc3 = 0;
    currentExam.p3.forEach(q => {
        if (q.userAnswer !== "" && Math.abs(parseFloat(q.userAnswer) - q.ans) < 0.011) sc3 += 0.5;
    });

    let total = sc1 + sc2 + sc3;

    document.getElementById('score-p1').innerText = sc1.toFixed(2) + " / 2.5";
    document.getElementById('score-p2').innerText = sc2.toFixed(2) + " / 4.0";
    document.getElementById('score-p3').innerText = sc3.toFixed(2) + " / 2.0";
    document.getElementById('final-score').innerHTML = `${total.toFixed(2)} <sup>/ 8.5</sup>`;

    buildReview();
    showTab('result-area');
}

function showReview() {
    const rp = document.getElementById('review-panel');
    rp.classList.add('open');
    rp.scrollIntoView({ behavior: 'smooth' });
    if (window.MathJax) MathJax.typesetPromise();
}

function buildReview() {
    let h = '';

    // P1
    h += `<h3 style="font-weight:800;font-size:1rem;color:#1d4ed8;text-transform:uppercase;border-bottom:2px solid #bfdbfe;padding-bottom:8px;margin-bottom:18px">Phần I – Trắc Nghiệm</h3>`;
    currentExam.p1.forEach((q, idx) => {
        h += `<div class="review-q"><h4>Câu ${idx + 1}: ${q.q}</h4><div class="review-opts">`;
        q.displayOpts.forEach((opt, oIdx) => {
            let cls = 'rev-opt';
            if (opt.correct) cls += ' correct';
            else if (q.userAnswer === oIdx && !opt.correct) cls += ' wrong';
            h += `<div class="${cls}">${String.fromCharCode(65 + oIdx)}. ${opt.text}</div>`;
        });
        h += `</div><div class="solution-box"><strong><i class="fas fa-lightbulb" style="margin-right:6px;color:#16a34a"></i>Lời giải:</strong> ${q.solution}</div></div>`;
    });

    // P2
    h += `<h3 style="font-weight:800;font-size:1rem;color:#166534;text-transform:uppercase;border-bottom:2px solid #bbf7d0;padding-bottom:8px;margin-bottom:18px;margin-top:28px">Phần II – Đúng / Sai</h3>`;
    currentExam.p2.forEach((q, idx) => {
        h += `<div class="review-q"><h4 style="background:#f0fdf4;padding:10px 14px;border-radius:8px;border-left:4px solid #22c55e">Câu ${idx + 1}: ${q.context}</h4>`;
        q.statements.forEach((stmt, sIdx) => {
            let userA = q.userAnswers[sIdx];
            let ok = userA === stmt.isTrue;
            let userStr = userA === null ? 'Chưa chọn' : (userA ? 'Đúng' : 'Sai');
            let correctStr = stmt.isTrue ? 'Đúng' : 'Sai';
            h += `<div class="tf-review-row ${ok ? 'ok' : 'bad'}">
                    <p><strong>${String.fromCharCode(97 + sIdx)})</strong> ${stmt.text}</p>
                    <div class="tf-review-meta">
                        <span>Bạn chọn: <strong>${userStr}</strong></span>
                        ${ok ? '<i class="fas fa-check-circle" style="color:#16a34a;font-size:1.1rem"></i>' : '<i class="fas fa-times-circle" style="color:#dc2626;font-size:1.1rem"></i>'}
                        <span>Đáp án: <strong style="color:#1d4ed8">${correctStr}</strong></span>
                    </div>
                    <div class="tf-explain"><strong>Giải thích:</strong> ${stmt.reason}</div>
                  </div>`;
        });
        h += `</div>`;
    });

    // P3
    h += `<h3 style="font-weight:800;font-size:1rem;color:#581c87;text-transform:uppercase;border-bottom:2px solid #e9d5ff;padding-bottom:8px;margin-bottom:18px;margin-top:28px">Phần III – Trả Lời Ngắn</h3>`;
    currentExam.p3.forEach((q, idx) => {
        let uVal = q.userAnswer === "" ? "Chưa điền" : q.userAnswer;
        let ok = q.userAnswer !== "" && Math.abs(parseFloat(q.userAnswer) - q.ans) < 0.011;
        h += `<div class="sa-review-row">
                <h4>Câu ${idx + 1}: ${q.q}</h4>
                <div class="sa-ans-row">
                    <span class="sa-user ${ok ? 'ok' : 'bad'}">Bạn điền: ${uVal} ${q.unit}</span>
                    <span class="sa-correct">Đáp án: ${q.ans} ${q.unit}</span>
                </div>
                <div class="solution-box"><strong><i class="fas fa-lightbulb" style="margin-right:6px;color:#16a34a"></i>Cách giải:</strong> ${q.solution}</div>
              </div>`;
    });

    document.getElementById('review-content').innerHTML = h;
    if (window.MathJax) MathJax.typesetPromise();
}
