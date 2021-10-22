document.getElementById("contact").addEventListener("submit", (e) => {
    // document.documentElement.style.scrollBehavior = "auto";
    const form = document.getElementById("contact");
    const formData = new FormData(form); //フォームの入力内容
    // 各種ログを非表示に
    document.getElementById("success-message").style.display = "";
    document.getElementById("error-message").style.display = "";
    document.getElementById("empty-message").style.display = "";
  
    if (
      document.getElementById("form-email").value &&
      document.getElementById("form-name").value &&
      document.getElementById("form-message").value
    ) {
      const submitBtn = document.getElementById("form-submit");
      submitBtn.setAttribute("disabled", true); //送信ボタンを無効化
      submitBtn.setAttribute("value", "送信中..."); //送信ボタンのテキストを「送信中...」に
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 0) {
          submitBtn.remove();//送信ボタンを非表示に
          document.getElementById("success-message").style.display = "block"; // 成功メッセージを表示
        } else if (xhr.readyState === 4) {
          submitBtn.removeAttribute("disabled"); //送信ボタンを有効化
          submitBtn.setAttribute("value", "送信");
          document.getElementById("error-message").style.display = "block"; // エラーメッセージを表示
        }
      });
  
      xhr.open("POST", form.getAttribute("action"));
      xhr.responseType = "jsonp";
      xhr.timeout = 5000;
      xhr.send(formData);
    } else {
      document.getElementById("empty-message").style.display = "block"; //必要事項漏れを通知
    }
    e.preventDefault();
    // document.documentElement.style.scrollBehavior = "";
  });
  