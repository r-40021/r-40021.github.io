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