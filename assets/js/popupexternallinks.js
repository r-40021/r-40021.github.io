/**
 * 外部リンクを新規タブで開くよう設定する関数
 */
function popupExternalLinks() {
    const links = [...document.querySelectorAll('a[href]')]
    links.forEach(link => {
        link.addEventListener('click', e => {
            eventDelete(e);
        }, false)
    });
}

popupExternalLinks();