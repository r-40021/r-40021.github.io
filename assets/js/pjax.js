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

function topScroll(){
    if(document.scrollingElement.scrollTop < 10){
      document.scrollingElement.scrollTop = 0;
    }
    else{
      document.scrollingElement.scrollTop = document.scrollingElement.scrollTop / 1.5;
      setTimeout(topScroll , 10);
    }
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
        after() {
            topScroll();
        }
    }]
});

