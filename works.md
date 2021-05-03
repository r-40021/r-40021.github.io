---
layout: blocks
title: 作品
date: 2021-04-10T00:00:00.000+09:00
page_sections:
- template: hero-banner-w-image
  block: hero-2
  headline: "<strong>やまだのアプリ</strong>"
  content: 技術力＜＜＜＜＜使いやすさを念頭に、頑張ってアプリを作っています。<br>まあ、技術力も高めなきゃいけないんですけど。
  background_image: ''
  image:
    image: ''
    alt_text: ''
  cta:
    enabled: false
    url: ''
    button_text: ''
- template: detail-content
  block: text-1
  headline: 真面目な作品
  content: "<p>真面目に作った、色んな人に使ってほしいアプリです。ソースコードはGitHubに、アプリもインターネット上に公開しています。</p>"
- template: content-feature
  block: feature-1
  media_alignment: Left
  media:
    image: "/uploads/timer.png"
    alt_text: やまだのタイマー
  headline: "<strong>やまだのタイマー</strong>"
  slug: timer
  content: |-
    <p>目覚まし時計とタイマーのいいとこ取りをした、オープンソースのちょっと変わったタイマーです。いろんな用途に使えます。</p><p>もともと、学校でクラス解散までの時間をカウントダウンする目的で作ったのですが、それ以外にもいろいろな機能を追加しています。</p><p>以下のような特長があります。</p>

    <ul>

    <li>設定時刻がパラメータに格納されるので、URLを共有するだけで、一緒に緊迫のカウントダウンを楽しめます。</li>

    <li>プッシュ通知やブラウザのタイトルバーで時間をお知らせします。よって、他の作業をしていても便利です。</li>

    <li>アラーム音を好きなものに変えられます。</li>

    <li>Service Workerにより、オフラインでも使えます。</li>

    <li>Googleが提唱するマテリアルデザインのようなデザイン（つまり、マテリアルデザインではない）を採用。Androidユーザーにとってはとても馴染みやすいデザインです。<br>（iPhoneユーザーでも使いやすいよ！）</li>

    </ul>

    <a class="button primary body" href="https://r-40021.github.io/countdown-timer/" target="_blank">アプリを開く</a>

    <a class="button primary body" href="https://github.com/r-40021/countdown-timer" target="_blank">ソースコードを見る</a>

    <a class="button primary body" href="https://github.com/r-40021/countdown-timer/issues" target="_blank">問題を報告</a>
- template: content-feature
  block: feature-1
  media_alignment: Left
  headline: "<strong>やまだBINGO</strong>"
  content: |-
    <p>オンラインで使えるビンゴマシーン。シンプルで使いやすい上に、履歴の自動保存機能まで搭載しています。</p>

    <p>*一部の古いブラウザでは保存機能に対応していません。</p>

    <br>

    <p>また、PWA(Webアプリをあたかも普通のアプリのように扱える技術)やService Worker(一度ページを読み込むと二度目からはオフラインでも使える技術)を採用しているため、オフライン環境でも、ギガが残りわずかでも、通信制限がかかっていても使えます。（一度ページを読み込んでおくことが条件となります）</p><br>

    <p>さらに、Webアプリなので、インストール不要で、デバイスを問わず使えます。</p>

    <p>【追記】最近、ダークモードにも対応しました。</p>

    <a class="button primary body" href="https://r-40021.github.io/bingo/" target="_blank">アプリを開く</a>

    <a class="button primary body" href="https://github.com/r-40021/bingo" target="_blank">ソースコードを見る</a>

    <a class="button primary body" href="https://github.com/r-40021/bingo/issues" target="_blank">問題を報告</a>
  slug: bingo
  media:
    image: "/uploads/2021/04/25/bingo.png"
    alt_text: ''
- template: detail-content
  block: text-1
  headline: ネタアプリ
  content: "<p>完全にネタとして作ったアプリ。恥ずかしくてスクショしか公開できません。</p>"
- template: content-feature
  block: feature-1
  media_alignment: Left
  headline: "<strong>ニセモノ体温計</strong>"
  slug: fake-thermometer
  content: |-
    <p>それは、ある日のこと。友達が、「センサー不要の体温計のコード見る？」とPythonのたった３行の簡潔なコードを見せてきました。なんということでしょう、35.5℃〜36.6℃の範囲の乱数を出力するプログラムではありませんか。笑いと同時に、「自分も作ってみよう」という気持ちが湧いてきました。</p><br>

    <p>ということで、２時間位かけて、たった3行のPythonのコードを171行のHTML・JavaScript・CSSに書き換えたものです。(フレームワークを含めたらもっと多いです。)</p>
  media:
    image: "/uploads/fake.jpg"
    alt_text: ''

---
