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
        const now = Math.ceil(window.scrollY); // 現在のスクロール量(小数点以下切り上げ)
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
    window.addEventListener("scroll", () => {throttle(handleScroll)});

    /**
   * 重たいイベントを間引きする関数
   * @param {Function} callback 間引きしたい処理
   * @param {Number} interval 間引きする間隔(デフォルトでは1280ms)
   * @returns {Function} 
   */
    const throttle = (function (callback, interval = 256) {
        var time = Date.now(),
            lag,
            debounceTimer,
            debounceDelay = 16;

        return function (callback) {
            lag = time + interval - Date.now();
            if (lag < 0) {
                callback();
                time = Date.now();
            } else {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(function () {
                    callback();
                }, (interval - lag + debounceDelay));
            }
        }
    })();
})();