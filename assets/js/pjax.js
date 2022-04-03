const preventSettings = ({ el, href }) => {
    // 外部リンクはtarget="_blank"に
    let site_url = location.protocol + '//' + location.host;
    if (!href.startsWith(site_url)) {
        el.setAttribute('target', '_blank');
        return true;
    }
    // アンカーリンクであり同一ページでなければbarbaを有効に
    let url = location.protocol + '//' + location.host + location.pathname;
    let extract_hash = href.replace(/#.*$/, "");
    if (href.startsWith(location.protocol + '//' + location.host)) {
        if (href.indexOf('#') > -1 && extract_hash != url) {
            return false;
        }
    }
    // 拡張子が該当する場合はtarget="_blank"に
    if (/\.(xlsx?|docx?|pptx?|pdf|jpe?g|png|gif|svg)/.test(href.toLowerCase())) {
        el.setAttribute('target', '_blank');
        return true;
    }
}


barba.init({
    prevent: preventSettings,
    timeout: 5000,
    sync: true,
    debug: true,
    transitions: [{
        name: 'page',
        leave(data) {
            document.getElementById("progress").classList.add("active");
        },
        //goatCounterにデータ送信
        enter() {
            try {
                window.goatcounter.count({
                    path: location.pathname + location.search + location.hash,
                })
            } catch (e) {
                console.warn("Goatcounter had been blocked: " + e)
            }
        },
    }]
});

function scroll() {
    // ヘッダー追従かどうか
    const headerFixed = false;
    // URLに「#」が存在するか
    if (location.hash) {
        const anchor = document.querySelector(location.hash);
        if (anchor) {
            const rect = anchor.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let elemTop = 0;
            if (headerFixed) {
                const header = document.getElementById('header');
                if (header) {
                    elemTop = elemTop - header.clientHeight;
                }
            }
            elemTop = rect.top + scrollTop;
            window.scrollTo({
                top: elemTop,
                left: 0,
                behavior: 'smooth'
            });
        } else {
            // アンカー先が存在しなければページトップに
            window.scrollTo(0, 0);
        }
    } else {
        // URLに「#」が存在しなければページトップに
        window.scrollTo(0, 0);
    }
}

barba.hooks.after(() => {
    scroll();
    document.getElementById("progress").classList.remove("active"); //プログレスバー閉じる
    //フォーム用のスクリプトを追加
    if (location.pathname === '/contact.html') {
        const newScript = document.createElement("script");
        newScript.src = "../assets/js/form.js";
        document.body.appendChild(newScript);
    }
    const links = [...document.querySelectorAll('a[href]')]
    links.forEach(link => {
        link.addEventListener('click', e => {
            eventDelete(e);
        }, false)
    });
    const domain = document.domain;
    const outsideLink = document.querySelectorAll('.block-hero-2 .columns a[href^=http]'); // Hero 内の外部リンクを取得
    outsideLink.forEach(elem => {
        elem.setAttribute('target', '_blank');
        elem.setAttribute('rel', 'noopener noreferrer');
    });
})

// 同じURLのときは遷移しない
const eventDelete = e => {
    if (e.currentTarget.href === window.location.href.replace(window.location.hash, "")) {
        e.preventDefault();
        e.stopPropagation();
        if (window.location.hash) history.pushState(null, null, e.currentTarget.href);
        scroll();
        return;
    }
}
