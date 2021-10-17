window.goatcounter = {no_onload: true}

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
            if(!data.next.url.hash){
                document.documentElement.style.scrollBehavior = "auto";
            }
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

function scroll (){
    // ヘッダー追従かどうか
    const headerFixed = false;
    // URLに「#」が存在するか
    if(location.hash){
        const anchor = document.querySelector( location.hash );
        if(anchor){
            const rect = anchor.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let elemTop = 0;
            if(headerFixed){
                const header = document.getElementById('header');
                if(header){
                    elemTop = elemTop - header.clientHeight;
                }
            }
            elemTop = rect.top + scrollTop;
            window.scrollTo(0,elemTop);
        }else{
          // アンカー先が存在しなければページトップに
            window.scrollTo(0,0);
        }
    }else{
      // URLに「#」が存在しなければページトップに
        window.scrollTo(0,0);
    }
}

barba.hooks.after(() => {
        scroll();
      document.documentElement.style.scrollBehavior = "";
      document.getElementById("progress").classList.remove("active"); //プログレスバー閉じる
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

const links = [...document.querySelectorAll('a[href]')]
links.forEach(link => {
    link.addEventListener('click', e => {
        eventDelete(e);
    }, false)
})
