/**
 * 外部リンクを新規タブで開くよう設定する関数
 */
function popupExternalLinks() {
    const domain = document.domain;
    const outsideLink = document.querySelectorAll('.block-hero-2 .columns a[href^=http]'); // Hero 内の外部リンクを取得
    outsideLink.forEach(elem => {
        elem.setAttribute('target', '_blank');
        elem.setAttribute('rel', 'noopener noreferrer');
    });
}

popupExternalLinks();


(function () {
    /**
     * ヘッダーをスクロールに合わせて隠したり表示したりする
     */
    const header = document.getElementById('header-wrapper'); // ヘッダー
    const headerHeight = header.clientHeight; // ヘッダーの高さ
    let last = 0; // 最後のスクロール量
    let isHide = false; // ヘッダーが隠れているか
    function handleScroll() {
        const windowHeight = window.innerHeight; // ウインドウの高さ
        const pageHeight = document.documentElement.scrollHeight; // ページの高さ
        const bottomScrollHeight = pageHeight - windowHeight; // ページの下端に到達するときにスクロール量
        const now = window.scrollY; // 現在のスクロール量
        if (now > headerHeight && last < now && bottomScrollHeight > now) {
            if (isHide === false) {
                header.classList.add('hide'); // ヘッダーを隠す
                isHide = true;
            }
        } else {
            if (isHide) {
                header.classList.remove('hide'); // ヘッダーを表示させる
                isHide = false;
            }
        }
        last = now;
    }
    window.addEventListener("scroll", handleScroll);
})();