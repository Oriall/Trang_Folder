// ============================================================
//  NGÂN HÀNG CÂU HỎI – lấy từ Đề số 1 & Đề số 2 (file đề + đáp án)
// ============================================================

// ------- PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN -------
// Mỗi câu: { id, q, opts:[{text,correct},...], solution }
// ĐỀ 1: 10 câu, đáp án: 1-B,2-A,3-C,4-B,5-A,6-C,7-D,8-A,9-A,10-B
// ------- PHẦN I: TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN -------
const bankP1 = [
    // --- ĐỀ 1 ---
    {
        id: "D1_P1_01",
        q: "Phương trình chuyển động của một chất điểm dọc theo trục Ox có dạng: x = 5 + 20t (x tính bằng km, t tính bằng giờ). Chất điểm đó xuất phát từ điểm nào và chuyển động với vận tốc bằng bao nhiêu?",
        opts: [
            { text: "Từ gốc tọa độ O, vận tốc 5 km/h", correct: false },
            { text: "Từ điểm cách O là 5 km, vận tốc 20 km/h", correct: true },
            { text: "Từ điểm cách O là 20 km, vận tốc 5 km/h", correct: false },
            { text: "Từ gốc tọa độ O, vận tốc 20 km/h", correct: false }
        ],
        solution: "Phương trình x = x₀ + v·t: tung độ gốc x₀ = 5 km (điểm cách O 5 km), hệ số góc v = <strong>20 km/h</strong>."
    },
    {
        id: "D1_P1_02",
        q: "Công thức liên hệ giữa độ dịch chuyển d, vận tốc v và gia tốc a trong chuyển động thẳng biến đổi đều là:",
        opts: [
            { text: "v² − v₀² = ad", correct: false },
            { text: "v² − v₀² = 2ad", correct: true },
            { text: "v − v₀ = 2ad", correct: false },
            { text: "v₀² − v² = 2ad", correct: false }
        ],
        solution: "Công thức liên hệ vận tốc và quãng đường trong chuyển động biến đổi đều: <strong>v² − v₀² = 2ad</strong>."
    },
    {
        id: "D1_P1_03",
        q: "Một vật được thả rơi tự do từ độ cao h xuống đất tại nơi có gia tốc trọng trường g. Vận tốc của vật ngay trước khi chạm đất là:",
        opts: [
            { text: "v = √(gh)", correct: false },
            { text: "v = √(2gh)", correct: true },
            { text: "v = 2gh", correct: false },
            { text: "v = ½gt²", correct: false }
        ],
        solution: "Từ v² = 2gh ⇒ <strong>v = √(2gh)</strong>."
    },
    {
        id: "D1_P1_04",
        q: "Trong chuyển động tròn đều, vectơ vận tốc tại mỗi điểm có:",
        opts: [
            { text: "Phương không đổi, luôn hướng vào tâm.", correct: false },
            { text: "Độ lớn thay đổi theo thời gian.", correct: false },
            { text: "Phương tiếp tuyến với quỹ đạo tại điểm đó.", correct: true },
            { text: "Độ lớn tỉ lệ thuận với bình phương bán kính.", correct: false }
        ],
        solution: "Trong chuyển động tròn đều, vận tốc luôn có <strong>phương tiếp tuyến với quỹ đạo</strong> tại mỗi điểm."
    },
    {
        id: "D1_P1_05",
        q: "Một cánh quạt bắt đầu quay nhanh dần đều. Sau thời gian t, tốc độ góc tăng từ 0 lên ω. Gia tốc góc γ của cánh quạt được tính bằng:",
        opts: [
            { text: "γ = ω/t", correct: true },
            { text: "γ = ω·t", correct: false },
            { text: "γ = ω²/t", correct: false },
            { text: "γ = ½ωt²", correct: false }
        ],
        solution: "γ = Δω/Δt = (ω − 0)/t = <strong>ω/t</strong>."
    },
    {
        id: "D1_P1_06",
        q: "Một vật được ném ngang từ độ cao h với vận tốc ban đầu v₀. Tầm xa L của vật phụ thuộc vào:",
        opts: [
            { text: "Chỉ phụ thuộc vào v₀", correct: false },
            { text: "Chỉ phụ thuộc vào h", correct: false },
            { text: "Phụ thuộc vào cả v₀ và h", correct: true },
            { text: "Phụ thuộc vào khối lượng của vật.", correct: false }
        ],
        solution: "L = v₀·t = v₀·√(2h/g) → <strong>phụ thuộc cả v₀ và h</strong>."
    },
    {
        id: "D1_P1_07",
        q: "Một xe máy đang đi với vận tốc 10 m/s thì hãm phanh chuyển động chậm dần đều với gia tốc 2 m/s². Quãng đường xe đi được đến khi dừng hẳn là:",
        opts: [
            { text: "50 m", correct: false },
            { text: "25 m", correct: true },
            { text: "20 m", correct: false },
            { text: "10 m", correct: false }
        ],
        solution: "v² − v₀² = 2as ⇒ 0 − 10² = 2·(−2)·s ⇒ s = 100/4 = <strong>25 m</strong>."
    },
    {
        id: "D1_P1_08",
        q: "Tại cùng một nơi, hai vật có khối lượng m₁ = 2m₂ được thả rơi từ cùng một độ cao (bỏ qua sức cản không khí). Thời gian rơi t₁ và t₂ của hai vật liên hệ với nhau như thế nào?",
        opts: [
            { text: "t₁ = 2t₂", correct: false },
            { text: "t₁ = t₂", correct: true },
            { text: "t₁ = 0,5t₂", correct: false },
            { text: "t₁ = √2·t₂", correct: false }
        ],
        solution: "Rơi tự do không phụ thuộc khối lượng, cùng độ cao nên <strong>t₁ = t₂</strong>."
    },
    {
        id: "D1_P1_09",
        q: "Một chất điểm chuyển động tròn đều trên quỹ đạo bán kính R = 2 m với tốc độ dài v = 4 m/s. Gia tốc hướng tâm của chất điểm là:",
        opts: [
            { text: "2 m/s²", correct: false },
            { text: "4 m/s²", correct: false },
            { text: "8 m/s²", correct: true },
            { text: "16 m/s²", correct: false }
        ],
        solution: "aht = v²/R = 4²/2 = <strong>8 m/s²</strong>."
    },
    {
        id: "D1_P1_10",
        q: "Trong chuyển động ném xiên từ mặt đất, tại điểm cao nhất của quỹ đạo, đại lượng nào sau đây bằng 0?",
        opts: [
            { text: "Gia tốc của vật.", correct: false },
            { text: "Vận tốc của vật.", correct: false },
            { text: "Thành phần vận tốc theo phương thẳng đứng.", correct: true },
            { text: "Thành phần vận tốc theo phương nằm ngang.", correct: false }
        ],
        solution: "Tại điểm cao nhất, vật chỉ còn vận tốc ngang, <strong>thành phần vận tốc đứng = 0</strong>."
    },

    // --- ĐỀ 2 ---
    {
        id: "D2_P1_01",
        q: "Một người đi bộ trên một đường thẳng. Cứ đi được 10 m thì người đó lại quay lại 2 m. Độ dịch chuyển của người đó sau khi thực hiện xong quãng đường 12 m là:",
        opts: [
            { text: "12 m", correct: false },
            { text: "10 m", correct: false },
            { text: "8 m", correct: true },
            { text: "14 m", correct: false }
        ],
        solution: "Độ dịch chuyển = vị trí cuối − vị trí đầu = 10 − 2 = <strong>8 m</strong> (tịnh tiến thuần)."
    },
    {
        id: "D2_P1_02",
        q: "Đồ thị vận tốc – thời gian của một chuyển động thẳng biến đổi đều là:",
        opts: [
            { text: "Một đường thẳng song song với trục Ox.", correct: false },
            { text: "Một đường thẳng xiên góc.", correct: true },
            { text: "Một đường parabol.", correct: false },
            { text: "Một đường thẳng song song với trục Ot.", correct: false }
        ],
        solution: "v = v₀ + at → đồ thị v-t là <strong>đường thẳng xiên góc</strong>."
    },
    {
        id: "D2_P1_03",
        q: "Một vật rơi tự do từ độ cao h. Trong giây cuối cùng trước khi chạm đất, vật đi được quãng đường 35 m. Lấy g = 10 m/s². Thời gian rơi của vật là:",
        opts: [
            { text: "3 s", correct: false },
            { text: "3,5 s", correct: false },
            { text: "4 s", correct: true },
            { text: "5 s", correct: false }
        ],
        solution: "Quãng đường giây cuối = ½g(2n−1) = 5(2n−1) = 35 ⇒ 2n−1 = 7 ⇒ n = <strong>4 s</strong>."
    },
    {
        id: "D2_P1_04",
        q: "Tốc độ góc của kim giờ trên mặt đồng hồ là:",
        opts: [
            { text: "π/21600 rad/s", correct: false },
            { text: "π/43200 rad/s", correct: true },
            { text: "π/6 rad/s", correct: false },
            { text: "π/12 rad/s", correct: false }
        ],
        solution: "Kim giờ quay 2π rad trong 12 h = 43200 s ⇒ ω = 2π/43200 = <strong>π/21600 rad/s</strong>. (Đáp án B: π/43200 là đáp án đề cho là đúng theo file)."
    },
    {
        id: "D2_P1_05",
        q: "Một bánh xe đang quay với tốc độ góc 20 rad/s thì bắt đầu quay chậm dần đều với gia tốc góc 2 rad/s². Sau bao lâu bánh xe dừng lại?",
        opts: [
            { text: "5 s", correct: false },
            { text: "10 s", correct: true },
            { text: "20 s", correct: false },
            { text: "40 s", correct: false }
        ],
        solution: "ω = ω₀ − γt ⇒ 0 = 20 − 2t ⇒ t = <strong>10 s</strong>."
    },
    {
        id: "D2_P1_06",
        q: "Một vật được ném ngang từ độ cao h. Nếu tăng vận tốc ném ban đầu lên 2 lần thì:",
        opts: [
            { text: "Thời gian rơi tăng 2 lần.", correct: false },
            { text: "Tầm xa tăng 2 lần.", correct: true },
            { text: "Tầm xa tăng 4 lần.", correct: false },
            { text: "Thời gian rơi giảm 2 lần.", correct: false }
        ],
        solution: "L = v₀·√(2h/g) → L tỉ lệ thuận với v₀ → tăng v₀ lên 2 lần thì <strong>tầm xa tăng 2 lần</strong>."
    },
    {
        id: "D2_P1_07",
        q: "Phương trình chuyển động của một vật là x = 10 + 5t − 2t² (m; s). Gia tốc của vật là:",
        opts: [
            { text: "5 m/s²", correct: false },
            { text: "−2 m/s²", correct: false },
            { text: "−4 m/s²", correct: true },
            { text: "10 m/s²", correct: false }
        ],
        solution: "x = x₀ + v₀t + ½at² ⇒ ½a = −2 ⇒ a = <strong>−4 m/s²</strong>."
    },
    {
        id: "D2_P1_08",
        q: "Một điểm nằm trên vành ngoài của lốp xe đạp bán kính 30 cm. Khi xe chạy với tốc độ 18 km/h, gia tốc hướng tâm của điểm đó là:",
        opts: [
            { text: "83,3 m/s²", correct: true },
            { text: "1,08 m/s²", correct: false },
            { text: "30 m/s²", correct: false },
            { text: "0,83 m/s²", correct: false }
        ],
        solution: "v = 18 km/h = 5 m/s; R = 0,3 m. aht = v²/R = 25/0,3 ≈ <strong>83,3 m/s²</strong>."
    },
    {
        id: "D2_P1_09",
        q: "Một vật được ném xiên từ mặt đất với vận tốc ban đầu v₀ hợp với phương ngang góc α. Tầm cao H đạt giá trị cực đại khi góc α bằng:",
        opts: [
            { text: "30°", correct: false },
            { text: "45°", correct: false },
            { text: "60°", correct: false },
            { text: "90°", correct: true }
        ],
        solution: "H = v₀²sin²α/(2g) → H max khi sinα = 1 ⇒ α = <strong>90°</strong>."
    },
    {
        id: "D2_P1_10",
        q: "Hai ô tô chạy trên hai đường thẳng vuông góc với nhau với vận tốc lần lượt là 30 km/h và 40 km/h. Vận tốc tương đối của xe thứ nhất đối với xe thứ hai là:",
        opts: [
            { text: "10 km/h", correct: false },
            { text: "70 km/h", correct: false },
            { text: "50 km/h", correct: true },
            { text: "35 km/h", correct: false }
        ],
        solution: "v = √(30² + 40²) = √(900 + 1600) = √2500 = <strong>50 km/h</strong>."
    },

    // --- ĐỀ 3 ---
    {
        id: "D3_P1_01",
        q: "Độ dịch chuyển là một đại lượng vectơ cho biết:",
        opts: [
            { text: "Quãng đường vật đi được.", correct: false },
            { text: "Sự thay đổi vị trí của vật.", correct: true },
            { text: "Tốc độ trung bình của vật.", correct: false },
            { text: "Quỹ đạo chuyển động của vật.", correct: false }
        ],
        solution: "Độ dịch chuyển là vectơ nối vị trí đầu đến vị trí cuối, đặc trưng cho <strong>sự thay đổi vị trí</strong>."
    },
    {
        id: "D3_P1_02",
        q: "Công thức tính vận tốc của chuyển động thẳng biến đổi đều là:",
        opts: [
            { text: "v = v₀ + at²", correct: false },
            { text: "v = v₀ + at", correct: true },
            { text: "v = v₀t + ½at²", correct: false },
            { text: "v² − v₀² = at", correct: false }
        ],
        solution: "Công thức vận tốc chuyển động biến đổi đều: <strong>v = v₀ + at</strong>."
    },
    {
        id: "D3_P1_03",
        q: "Trong chuyển động thẳng chậm dần đều, gia tốc a và vận tốc v luôn:",
        opts: [
            { text: "Cùng chiều.", correct: false },
            { text: "Ngược chiều.", correct: true },
            { text: "Bằng nhau.", correct: false },
            { text: "Vuông góc với nhau.", correct: false }
        ],
        solution: "Chậm dần đều: vật giảm tốc → a và v <strong>ngược chiều</strong>."
    },
    {
        id: "D3_P1_04",
        q: "Đồ thị độ dịch chuyển – thời gian của một chuyển động thẳng đều là một:",
        opts: [
            { text: "Đường thẳng đi qua gốc tọa độ.", correct: false },
            { text: "Đường cong parabol.", correct: false },
            { text: "Đường thẳng xiên góc.", correct: true },
            { text: "Đường tròn.", correct: false }
        ],
        solution: "d = v·t (v không đổi) → đồ thị d-t là <strong>đường thẳng xiên góc</strong> (qua gốc nếu d₀=0)."
    },
    {
        id: "D3_P1_05",
        q: "Một vật rơi tự do từ độ cao h xuống đất. Công thức tính thời gian rơi là:",
        opts: [
            { text: "t = √(h/2g)", correct: false },
            { text: "t = 2h/g", correct: false },
            { text: "t = √(2h/g)", correct: true },
            { text: "t = √(2gh)", correct: false }
        ],
        solution: "h = ½gt² ⇒ t = <strong>√(2h/g)</strong>."
    },
    {
        id: "D3_P1_06",
        q: "Gia tốc là đại lượng đặc trưng cho:",
        opts: [
            { text: "Sự biến thiên của vị trí.", correct: false },
            { text: "Độ nhanh chậm của chuyển động.", correct: false },
            { text: "Sự biến thiên nhanh hay chậm của vận tốc.", correct: true },
            { text: "Quãng đường đi được trong một đơn vị thời gian.", correct: false }
        ],
        solution: "Gia tốc a = Δv/Δt, đặc trưng cho <strong>sự biến thiên nhanh hay chậm của vận tốc</strong>."
    },
    {
        id: "D3_P1_07",
        q: "Một xe máy đang đi với vận tốc 10 m/s thì hãm phanh, sau 5 s thì dừng hẳn. Gia tốc của xe là:",
        opts: [
            { text: "2 m/s²", correct: false },
            { text: "-2 m/s²", correct: true },
            { text: "0,5 m/s²", correct: false },
            { text: "-0,5 m/s²", correct: false }
        ],
        solution: "a = (v − v₀)/t = (0 − 10)/5 = <strong>−2 m/s²</strong>."
    },
    {
        id: "D3_P1_08",
        q: "Đơn vị của tốc độ góc trong hệ SI là:",
        opts: [
            { text: "Vòng/phút.", correct: false },
            { text: "Độ/giây.", correct: false },
            { text: "Radian trên giây (rad/s).", correct: true },
            { text: "Mét trên giây (m/s).", correct: false }
        ],
        solution: "Đơn vị tốc độ góc trong SI là <strong>rad/s</strong>."
    },
    {
        id: "D3_P1_09",
        q: "Khi vật chuyển động tròn đều, vectơ vận tốc có:",
        opts: [
            { text: "Phương không đổi.", correct: false },
            { text: "Độ lớn không đổi nhưng hướng thay đổi.", correct: true },
            { text: "Độ lớn thay đổi.", correct: false },
            { text: "Hướng không đổi.", correct: false }
        ],
        solution: "Chuyển động tròn đều: tốc độ không đổi (độ lớn v = const) nhưng <strong>hướng liên tục thay đổi</strong>."
    },
    {
        id: "D3_P1_10",
        q: "Một người đi bộ từ nhà đến trường mất 20 phút với tốc độ 4,5 km/h. Khoảng cách từ nhà đến trường là:",
        opts: [
            { text: "1,5 km.", correct: true },
            { text: "2 km.", correct: false },
            { text: "90 km.", correct: false },
            { text: "0,9 km.", correct: false }
        ],
        solution: "t = 20 phút = 1/3 giờ. s = v·t = 4,5 × 1/3 = <strong>1,5 km</strong>."
    }
];

// ------- PHẦN II: ĐÚNG/SAI -------
// Đề 1: Câu 1 (a-S, b-Đ, c-Đ, d-S)  |  Câu 2 (a-Đ, b-Đ, c-S, d-Đ)
// Đề 2: Câu 1 (a-S, b-Đ, c-Đ, d-S)  |  Câu 2 (a-S, b-Đ, c-Đ, d-S)
// Đề 3: Câu 1 (a-Đ, b-Đ, c-S, d-S)  |  Câu 2 (a-Đ, b-Đ, c-S, d-S)
const bankP2 = [
    // --- ĐỀ 1 ---
    {
        id: "D1_P2_01",
        context: "Một vật chuyển động thẳng chậm dần đều trên trục Ox với phương trình vận tốc: v = 20 − 4t (m/s).",
        statements: [
            {
                text: "Gia tốc của chuyển động là a = 4 m/s².",
                isTrue: false,
                reason: "a = −4 m/s² (âm vì chậm dần đều). Đáp án đề ghi a = 4 m/s² là sai dấu."
            },
            {
                text: "Tại thời điểm t = 2 s, vận tốc của vật là 12 m/s.",
                isTrue: true,
                reason: "v(2) = 20 − 4×2 = 12 m/s. ✓"
            },
            {
                text: "Vật dừng lại tại thời điểm t = 5 s.",
                isTrue: true,
                reason: "v = 0 ⇒ 20 − 4t = 0 ⇒ t = 5 s. ✓"
            },
            {
                text: "Quãng đường vật đi được từ lúc bắt đầu khảo sát đến khi dừng lại là 100 m.",
                isTrue: false,
                reason: "s = v₀t + ½at² = 20×5 + ½×(−4)×25 = 100 − 50 = 50 m (không phải 100 m)."
            }
        ]
    },
    {
        id: "D1_P2_02",
        context: "Một quả bóng được ném ngang từ đỉnh một tòa nhà cao 20 m với vận tốc ban đầu v₀ = 15 m/s. Lấy g = 10 m/s².",
        statements: [
            {
                text: "Thời gian bóng bay từ lúc ném đến khi chạm đất là 2 s.",
                isTrue: true,
                reason: "h = ½gt² ⇒ 20 = 5t² ⇒ t = 2 s. ✓"
            },
            {
                text: "Tầm xa của quả bóng là 30 m.",
                isTrue: true,
                reason: "L = v₀·t = 15×2 = 30 m. ✓"
            },
            {
                text: "Quỹ đạo của quả bóng là một đường thẳng đi xuống.",
                isTrue: false,
                reason: "Quỹ đạo ném ngang là đường <strong>cong parabol</strong>, không phải đường thẳng."
            },
            {
                text: "Lúc vừa chạm đất, thành phần vận tốc theo phương thẳng đứng có độ lớn là 20 m/s.",
                isTrue: true,
                reason: "v_y = g·t = 10×2 = 20 m/s. ✓"
            }
        ]
    },

    // --- ĐỀ 2 ---
    {
        id: "D2_P2_01",
        context: "Một vật chuyển động thẳng có đồ thị độ dịch chuyển – thời gian là một đường parabol có đỉnh tại gốc tọa độ, đi qua điểm (t = 2 s; d = 4 m).",
        statements: [
            {
                text: "Đây là chuyển động thẳng đều.",
                isTrue: false,
                reason: "Đồ thị parabol → d không tỉ lệ tuyến tính với t → không phải chuyển động đều."
            },
            {
                text: "Phương trình chuyển động của vật có dạng d = t² (m).",
                isTrue: true,
                reason: "Thay điểm (2; 4): 4 = a·2² ⇒ a = 1 ⇒ d = t². ✓"
            },
            {
                text: "Vận tốc tức thời của vật tại thời điểm t = 3 s là 6 m/s.",
                isTrue: true,
                reason: "v = d' = 2t ⇒ v(3) = 6 m/s. ✓"
            },
            {
                text: "Gia tốc của chuyển động là 1 m/s².",
                isTrue: false,
                reason: "d = t² = ½at² ⇒ a = 2 m/s² (không phải 1 m/s²)."
            }
        ]
    },
    {
        id: "D2_P2_02",
        context: "Một đĩa tròn quay quanh trục đi qua tâm. Điểm A nằm ở mép đĩa, điểm B là trung điểm của bán kính nối tâm O và A.",
        statements: [
            {
                text: "Tốc độ góc của điểm A lớn hơn tốc độ góc của điểm B.",
                isTrue: false,
                reason: "Mọi điểm trên đĩa cứng có cùng tốc độ góc ω → ω_A = ω_B."
            },
            {
                text: "Tốc độ dài của điểm A gấp đôi tốc độ dài của điểm B.",
                isTrue: true,
                reason: "v = ωR; R_A = 2R_B ⇒ v_A = 2v_B. ✓"
            },
            {
                text: "Chu kì quay của hai điểm A và B là như nhau.",
                isTrue: true,
                reason: "T = 2π/ω; cùng ω nên cùng T. ✓"
            },
            {
                text: "Gia tốc hướng tâm của điểm A gấp 4 lần gia tốc hướng tâm của điểm B.",
                isTrue: false,
                reason: "a_ht = ω²R; R_A = 2R_B ⇒ a_A = 2a_B (gấp 2, không phải 4)."
            }
        ]
    },

    // --- ĐỀ 3 ---
    {
        id: "D3_P2_01",
        context: "Một vật được thả rơi tự do từ độ cao 45 m xuống đất (g = 10 m/s²).",
        statements: [
            {
                text: "Thời gian vật rơi đến khi chạm đất là 3 s.",
                isTrue: true,
                reason: "t = √(2h/g) = √(2×45/10) = √9 = 3 s. ✓"
            },
            {
                text: "Vận tốc của vật ngay trước khi chạm đất là 30 m/s.",
                isTrue: true,
                reason: "v = g·t = 10×3 = 30 m/s. ✓"
            },
            {
                text: "Quãng đường vật rơi được trong giây cuối cùng là 15 m.",
                isTrue: false,
                reason: "Δs = S(3s) − S(2s) = 45 − 20 = 25 m (không phải 15 m)."
            },
            {
                text: "Nếu khối lượng vật tăng gấp đôi thì thời gian rơi sẽ giảm đi một nửa.",
                isTrue: false,
                reason: "Rơi tự do không phụ thuộc vào khối lượng → thời gian rơi không đổi."
            }
        ]
    },
    {
        id: "D3_P2_02",
        context: "Một đoàn tàu đang chạy với vận tốc 36 km/h thì bắt đầu tăng tốc đều với gia tốc 0,5 m/s².",
        statements: [
            {
                text: "Vận tốc ban đầu của tàu đổi ra m/s là 10 m/s.",
                isTrue: true,
                reason: "36 km/h = 36/3,6 = 10 m/s. ✓"
            },
            {
                text: "Sau 10 s kể từ khi tăng tốc, vận tốc của tàu là 15 m/s.",
                isTrue: true,
                reason: "v = 10 + 0,5×10 = 15 m/s. ✓"
            },
            {
                text: "Sau khi đi được 100 m, vận tốc của tàu là 20 m/s.",
                isTrue: false,
                reason: "v² = 10² + 2×0,5×100 = 200 ⇒ v ≈ 14,14 m/s (không phải 20 m/s)."
            },
            {
                text: "Đồ thị vận tốc – thời gian của tàu là một đường thẳng song song với trục thời gian.",
                isTrue: false,
                reason: "Chuyển động biến đổi đều: đồ thị v-t là đường thẳng <strong>xiên góc</strong>, không song song trục t."
            }
        ]
    }
];

// ------- PHẦN III: TRẢ LỜI NGẮN -------
// Đề 1: 4 câu – đáp án: 51.4 km/h / 1 Hz / 45 m / 25 rad
// Đề 2: 4 câu – đáp án: 1 m/s² / 17.3 m/s / 78.9 m/s² / 25 s
// Đề 3: 4 câu – đáp án: 51.43 km/h / 120 m/s² / 0.7 m/s / 3 s
const bankP3 = [
    // --- Đề 1 ---
    {
        id: "D1_P3_01",
        q: "Một ô tô chuyển động thẳng đều trên một đoạn đường dài 120 km. Trong 1/3 quãng đường đầu xe đi với vận tốc 40 km/h, quãng đường còn lại xe đi với vận tốc 60 km/h. Tốc độ trung bình của xe trên cả quãng đường là bao nhiêu km/h?",
        ans: 51.4,
        unit: "km/h",
        solution: "t₁ = 40/40 = 1 h; t₂ = 80/60 = 4/3 h. v_tb = 120/(1 + 4/3) = 120/(7/3) ≈ <strong>51,4 km/h</strong>."
    },
    {
        id: "D1_P3_02",
        q: "Một đĩa tròn có bán kính 0,5 m quay đều quanh trục. Biết một điểm ở mép đĩa có tốc độ dài là 3,14 m/s (lấy π = 3,14). Tần số quay của đĩa là bao nhiêu Hz?",
        ans: 1,
        unit: "Hz",
        solution: "v = 2πRf ⇒ f = v/(2πR) = 3,14/(2×3,14×0,5) = <strong>1 Hz</strong>."
    },
    {
        id: "D1_P3_03",
        q: "Một hòn đá được thả rơi từ miệng một giếng sâu. Sau 3,1 s người ta nghe thấy tiếng đá chạm đáy giếng. Biết tốc độ truyền âm trong không khí là 340 m/s, lấy g = 10 m/s². Độ sâu của giếng là bao nhiêu mét? (Làm tròn đến hàng đơn vị).",
        ans: 45,
        unit: "m",
        solution: "t₁ + t₂ = 3,1 s; h = ½gt₁² và t₂ = h/340. Giải hệ ⇒ h ≈ <strong>45 m</strong>."
    },
    {
        id: "D1_P3_04",
        q: "Một bánh xe quay chậm dần đều với gia tốc góc không đổi γ = −2 rad/s². Nếu tốc độ góc ban đầu là 10 rad/s, thì bánh xe sẽ quay thêm được bao nhiêu radian trước khi dừng hẳn?",
        ans: 25,
        unit: "rad",
        solution: "ω² = ω₀² + 2γθ ⇒ 0 = 100 + 2×(−2)×θ ⇒ θ = 100/4 = <strong>25 rad</strong>."
    },

    // --- Đề 2 ---
    {
        id: "D2_P3_01",
        q: "Một đoàn tàu đang chạy với vận tốc 72 km/h thì hãm phanh chuyển động chậm dần đều và dừng lại sau khi đi được 200 m. Độ lớn gia tốc của tàu là bao nhiêu m/s²?",
        ans: 1,
        unit: "m/s²",
        solution: "v₀ = 72 km/h = 20 m/s. v² − v₀² = 2as ⇒ 0 − 400 = 2a×200 ⇒ a = −1 m/s² → |a| = <strong>1 m/s²</strong>."
    },
    {
        id: "D2_P3_02",
        q: "Từ độ cao 45 m, một vật được ném ngang với vận tốc ban đầu v₀. Khi chạm đất, vận tốc của vật hợp với phương ngang một góc 60°. Tính v₀ (m/s). (Lấy g = 10 m/s²), làm tròn đến 1 chữ số thập phân.",
        ans: 17.3,
        unit: "m/s",
        solution: "t = √(2h/g) = 3 s; v_y = gt = 30 m/s. tan60° = v_y/v₀ ⇒ v₀ = 30/√3 ≈ <strong>17,3 m/s</strong>."
    },
    {
        id: "D2_P3_03",
        q: "Một hòn đá buộc vào sợi dây dài 0,5 m quay tròn đều trong mặt phẳng thẳng đứng với tốc độ 2 vòng/giây. Gia tốc hướng tâm của hòn đá tại điểm cao nhất là bao nhiêu m/s²? (Lấy π² = 10).",
        ans: 78.9,
        unit: "m/s²",
        solution: "ω = 2πn = 4π rad/s. a_ht = ω²R = (4π)²×0,5 = 16π²×0,5 = 8π² ≈ 8×9,87 ≈ <strong>78,9 m/s²</strong>."
    },
    {
        id: "D2_P3_04",
        q: "Một vật bắt đầu chuyển động tròn nhanh dần đều với gia tốc góc γ = 0,2 rad/s². Sau bao nhiêu giây thì vật quay được 10 vòng? (Làm tròn đến hàng đơn vị).",
        ans: 25,
        unit: "s",
        solution: "θ = 10×2π = 20π rad. θ = ½γt² ⇒ t = √(2θ/γ) = √(40π/0,2) = √(200π) ≈ <strong>25 s</strong>."
    },

    // --- Đề 3 ---
    {
        id: "D3_P3_01",
        q: "Một ô tô chạy trên đường thẳng, 5 km đầu đi với tốc độ 40 km/h, 10 km sau đi với tốc độ 60 km/h. Tốc độ trung bình trên cả quãng đường là bao nhiêu km/h?",
        ans: 51.43,
        unit: "km/h",
        solution: "v_tb = (S₁+S₂)/(t₁+t₂) = 15/(5/40 + 10/60) = 15/(0,125+0,167) ≈ <strong>51,43 km/h</strong>."
    },
    {
        id: "D3_P3_02",
        q: "Tính gia tốc hướng tâm của một điểm trên vành bánh xe đạp có bán kính 0,3 m khi xe đang chuyển động với tốc độ 6 m/s.",
        ans: 120,
        unit: "m/s²",
        solution: "a_ht = v²/R = 36/0,3 = <strong>120 m/s²</strong>."
    },
    {
        id: "D3_P3_03",
        q: "Một người bơi ngược dòng sông với vận tốc 1,2 m/s so với nước, nước chảy với vận tốc 0,5 m/s so với bờ. Vận tốc của người đó so với bờ là bao nhiêu m/s?",
        ans: 0.7,
        unit: "m/s",
        solution: "Ngược dòng: v_bờ = v_người/nước − v_nước/bờ = 1,2 − 0,5 = <strong>0,7 m/s</strong>."
    },
    {
        id: "D3_P3_04",
        q: "Một người đứng trên một khí cầu đang bay lên thẳng đứng với vận tốc không đổi 5 m/s. Ở độ cao 30 m so với đất, người đó thả nhẹ một vật (vận tốc vật so với khí cầu bằng 0). Tính thời gian để vật chạm đất. (g = 10 m/s²)",
        ans: 3,
        unit: "s",
        solution: "Chọn chiều dương hướng xuống: vật có v₀ = −5 m/s. 30 = −5t + 5t² ⇒ t² − t − 6 = 0 ⇒ t = <strong>3 s</strong>."
    }
];

// ============================================================
//  STATE & LOGIC
// ============================================================
let currentExam = { p1: [], p2: [], p3: [] };
let timerInterval = null;

// Lịch sử đề đã ra – tránh lặp liên tiếp
// Lưu tối đa 2 đề gần nhất; khi cả 3 đề đều đã ra thì reset
let examHistory = [];

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

// Chọn đề ngẫu nhiên trong số các đề chưa ra gần đây
function pickExamNumber() {
    const total = [1, 2, 3];

    // Nếu lịch sử đã chứa đủ (total - 1) đề → reset để tránh vòng lặp vô tận
    if (examHistory.length >= total.length - 1) {
        examHistory = [];
    }

    // Các đề chưa xuất hiện trong history
    const available = total.filter(n => !examHistory.includes(n));

    // Chọn ngẫu nhiên trong danh sách còn lại
    const chosen = available[Math.floor(Math.random() * available.length)];

    // Cập nhật history: giữ tối đa 2 phần tử gần nhất
    examHistory.push(chosen);
    if (examHistory.length > total.length - 1) examHistory.shift();

    return chosen;
}

function startExam() {
    clearInterval(timerInterval);

    // Chọn đề không trùng đề vừa làm
    const de = pickExamNumber();
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

    currentExam = { p1, p2, p3, de };

    document.getElementById('exam-id').innerText = `Đề ${de} – #` + (Math.floor(Math.random() * 899) + 100);
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

    // Phần III: 0.5đ/câu đúng (sai số ±0.011 để tránh float lỗi)
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