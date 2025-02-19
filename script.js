let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "阿新？你认真的吗…",
    "姐姐，要不再想想？",
    "时新怡！不许选这个！",
    "宝贝，你为什么一直这样…",
    "我呸！你怎么这么自私！",
    "哒咩，我好伤心:(",
    "呜呜，你真的忍心吗？",
    "再点一次我就生气了！",
    "求求你了，选另一个吧~",
    "哼，我不理你了！",
    "最后一次机会，快改主意！"
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 11) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "images/shocked.png"; // 震惊
    if (clickCount === 2) mainImage.src = "images/think.png";   // 思考
    if (clickCount === 3) mainImage.src = "images/angry.png";   // 生气
    if (clickCount === 4) mainImage.src = "images/crying.png";  // 哭
    if (clickCount === 5) mainImage.src = "images/hs.gif?" + new Date().getTime(); // 添加时间戳
    if (clickCount >= 6) {
    mainImage.src = "images/crying.png";  // 哭
}

});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!喜欢你!! ( >᎑<)♡︎ᐝ</h1>
            <img src="images/hug.png" alt="拥抱" class="hug-image">
            <div class="love-container"></div>
        </div>
    `;

    // 添加样式
    const style = document.createElement("style");
    style.innerHTML = `
        body {
            background-color: #f1d5da; /* 浅粉色 */
            text-align: center;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }

        /* Yes 完全填满屏幕 */
        .yes-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: #ffdae0; /* 粉色 */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        /* 文字 */
        .yes-text {
            font-size: 3rem;
            color: #68495b; /* 和 h1 颜色一致 */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;
            animation: fadeIn 1s ease-in-out;
        }

        /* 拥抱图片 */
        .hug-image {
            width: 200px;
            height: auto;
            animation: hugFadeIn 1s ease-out;
        }

        /* 合照容器 */
        .love-container {
            position: relative;
            margin-top: 20px;
        }

        /* 合照图片 */
        .love-image {
            width: 300px;
            height: auto;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            animation: zoomIn 1s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes hugFadeIn {
            from { opacity: 0; transform: scale(0.5); }
            to { opacity: 1; transform: scale(1); }
        }

        @keyframes zoomIn {
            from { opacity: 0; transform: scale(0.5); }
            to { opacity: 1; transform: scale(1); }
        }
    `;
    document.head.appendChild(style);

    // 5秒后显示love图片
    setTimeout(() => {
        const container = document.createElement("div");
        container.classList.add("love-container");
        container.innerHTML = `<img src="images/love.png" alt="我们的合照" class="love-image">`;
        document.querySelector(".yes-screen").appendChild(container);
    }, 5000);
    });