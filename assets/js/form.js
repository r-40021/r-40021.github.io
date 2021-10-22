document.getElementById("contact").addEventListener("submit", (e) => {
    const form = document.getElementById("contact");
    const formData = new FormData(form);
    document.getElementById("success-message").style.display = "";
    document.getElementById("error-message").style.display = "";
    document.getElementById("empty-message").style.display = "";
  
    if (
      document.getElementById("form-email").value &&
      document.getElementById("form-name").value &&
      document.getElementById("form-message").value
    ) {
      const submitBtn = document.getElementById("form-submit");
      submitBtn.setAttribute("disabled", true);
      submitBtn.setAttribute("value", "送信中...");
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 0) {
          submitBtn.remove();
          document.getElementById("success-message").style.display = "block";
        } else if (xhr.readyState === 4) {
          submitBtn.removeAttribute("disabled");
          submitBtn.setAttribute("value", "送信");
          document.getElementById("error-message").style.display = "block";
        }
      });
  
      xhr.open("POST", form.getAttribute("action"));
      xhr.responseType = "jsonp";
      xhr.timeout = 5000;
      xhr.send(formData);
    } else {
      document.getElementById("empty-message").style.display = "block";
    }
    e.preventDefault();
  });
  