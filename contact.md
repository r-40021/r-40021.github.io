---
layout: blocks
title: お問い合わせ
date: 2021-10-22 15:00:00 +0000
page_sections:
- template: hero-banner-w-image
  block: hero-2
  content: "<strong>お問い合わせ</strong>はこちらからお願いします"
  headline: "<strong>お問い合わせ</strong>"
  background_image: ''
  image:
    image: "/uploads/mail.png"
    alt_text: mail
  cta:
    enabled: false
    url: ''
    button_text: ''
- template: 1-column-text
  block: one-column-1
  headline: ご注意
  content: スパム防止のため、お問い合わせフォームを通さないお問い合わせに対応することはできません。<br>また、お問い合わせフォームを通していても、スパム・いたずらと思われるものには一切応じません。
  slug: ''
- template: full-width
  block: full-1
  content: |-
    <div class="container">

    <form action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfiTlaCkGe9HzxBytKEMFupoowYf9Yn6jomz-GFCR7UIrF7nQ/formResponse" target="_self" method="POST" id="contact" class="form">

      <div class="email text-input form-part">

        <input id="form-email" type="email" name="entry.1921312276" required class="ef">

        <label>Email</label>

        <span class="focus_line"></span>

      </div>

      <div class="name text-input form-part">

        <input id="form-name" type="text" name="entry.13022715" required class="ef">

        <label>お名前</label>

        <span class="focus_line"></span>

      </div>

      <div class="message textarea form-part">

        <textarea id="form-message" name="entry.1447379776" required></textarea>

        <label for="form-message">お問い合わせ内容</label>

        <span class="focus_line"></span>

      </div>

      <div class="reply form-part checkbox">

        <input type="checkbox" name="entry.1998096288" value="返信を希望する" id="want-reply"><label for="want-reply">返信を希望する</label>

      </div>

      <div class="submit form-part">

        <input type="submit" class="form-submit" id="form-submit" value="送信">

      </div>

    </form>

    <div id="success-message" class="result">

      <p class="title">送信が完了しました。</p>

      <p>返信を希望された方には、なるべく1週間以内にメールでご返事いたします。<br>

        @gmail.com からのメールを受信できるよう、設定の確認をお願いいたします。</p>

    </div>

    <div id="error-message" class="result">

      <p class="title">エラーが発生しました。</p>

      <p>以下の方法でエラーが解決する場合があります。</p>

      <ul>

        <li>Wi-Fi のアクセスポイントを変更する</li>

        <li>ブラウザのシークレットモードやゲストモードでアクセスする</li>

        <li>別のブラウザや端末でアクセスする</li>

      </ul>

    </div>

    <div id="empty-message" class="result">

      <p class="title">記入内容に不備があります。</p>

    </div>

    </div>

    <script src="../assets/js/form.js" defer></script>

---
