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
    // 該当クラスに属していればBarbaを無効に
    let ignoreClasses = ['noPjax'];
    ignoreClasses.forEach((cls) => {
        if (el.classList.contains(cls)) {
            return true;
        }
    })
}

barba.init({
    prevent: preventSettings,
    transitions: [{
        name: 'opacity-transition',

        //goatCounterを再読み込み
        enter() {
            const elem = document.getElementById("goatCounter");
            const newElem = document.createElement("script");
            newElem.setAttribute("id", elem.getAttribute("id"));
            newElem.setAttribute("src", elem.getAttribute("src"));
            document.body.appendChild(newElem);
            elem.remove();
        },
    }]
});

barba.hooks.after(() => {
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
  })
  
// 同じURLのときは遷移しない
const eventDelete = e => {
    if (e.currentTarget.href === window.location.href) {
        e.preventDefault()
        e.stopPropagation()
        return
    }
}

const links = [...document.querySelectorAll('a[href]')]
links.forEach(link => {
    link.addEventListener('click', e => {
        eventDelete(e)
    }, false)
})
