//全ページに共通の事項を書く
/*---------topへ戻るボタン-------------*/
function getScrolled() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : document.documentElement.scrollTop;
}

//トップに戻るボタンの要素を取得
var topButton = document.getElementById('js-scroll-fadein');

//ボタンの表示・非表示
window.onscroll = function () {
    (getScrolled() > 500) ? topButton.classList.add('is-fadein') : topButton.classList.remove('is-fadein');
};

//トップに移動する関数
function scrollToTop() {
    var scrolled = getScrolled();
    window.scrollTo(0, Math.floor(scrolled / 2));
    if (scrolled > 0) {
        window.setTimeout(scrollToTop, 30);
    }
};

//イベント登録
topButton.onclick = function () {
    scrollToTop();
};



//ヘッダーのスクロール
let lastPos = 0;
// ヘッダーを取得
const header = document.getElementById("header");

// ヘッダーの高さを取得
const hH = header.clientHeight;

// 現在地を示す変数を定義
let pos = 0;

const onScroll = () => {
    // スクロール位置がヘッダーの高さ分より大きい場合にclass名を追加し、そうでない場合にclass名を削除


    //上にスクロールした時に出す
    if (pos > hH && pos > lastPos) {
        header.classList.add('header--unpinned');
    }
    // スクロール位置がヘッダーの高さ分より小さいか
    // またはスクロール位置が最後のスクロール位置より小さい場合はclass名を削除
    if (pos < hH || pos < lastPos) {
        header.classList.remove('header--unpinned');
    }

    // 最後のスクロール位置を保存
    lastPos = pos;


    //ページの最下部に到達したらヘッダーを表示する
    // ウィンドウの高さを取得
    const winH = window.innerHeight;

    // ページの高さを取得
    const docH = document.documentElement.scrollHeight;

    // ウィンドウが最下部達した場合のウィンドウ上部の位置を取得
    const windBtm = docH - winH;

    if (pos < hH || pos < lastPos || windBtm <= pos) {
        header.classList.remove('header--unpinned');
    }

};

window.addEventListener("scroll", () => {
    // スクロールするごとにpos（現在地）の値を更新
    pos = window.scrollY;
    onScroll();
});