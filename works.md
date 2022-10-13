---
layout: blocks
title: 作品
date: 2022-05-21T03:00:00.000+00:00
page_sections:
- template: hero-banner-w-image
  block: hero-2
  headline: "<strong>作品</strong>"
  content: 技術力＜＜＜＜＜使いやすさを念頭に、頑張ってアプリを作っています。<br>まあ、技術力も高めなきゃいけないんですけど。<br>
  background_image: ''
  image:
    image: "/uploads/hero/website.webp"
    alt_text: Webサイトのイメージ
  cta:
    enabled: false
    url: "/browser"
    button_text: 対応ブラウザ
- template: detail-content
  block: text-1
  headline: Web アプリ
  content: "<p>真面目に作った、色んな人に使ってほしいアプリです。ソースコードはGitHubに、アプリもインターネット上に公開しています。</p>"
- template: content-feature
  block: feature-1
  media_alignment: Left
  media:
    image: "/uploads/works/timer.webp"
    alt_text: やまだのタイマー
  headline: "<strong>やまだの<wbr>タイマー</strong>"
  slug: timer
  content: |-
    <p>目覚まし時計とタイマーのいいとこ取りをした、オープンソースのちょっと変わったタイマーです。いろんな用途に使えます。</p><p>もともと、学校でクラス解散までの時間をカウントダウンする目的で作ったのですが、それ以外にもいろいろな機能を追加しています。</p>

    <ul>

    <li>設定時刻がパラメータに格納されるので、URLを共有するだけで、一緒に緊迫のカウントダウンを楽しめます。</li>

    <li>ブラウザのタイトルバーに残り時間が表示されるので、他の作業をしていても時間を忘れることはありません。</li>

    <li>プッシュ通知にも対応。音が出せない場所でも使えます。</li>

    <li>アラーム音を好きなものに変えられます。</li>

    <li>オフラインでも使えます。</li>

    </ul>

    <a class="button primary body" href="https://timer.frogapp.net" target="_blank">アプリを開く</a>

    <a class="button primary body" href="https://github.com/r-40021/countdown-timer" target="_blank" rel="noopener noreferrer">ソースコードを見る</a>

    <a class="button primary body" href="https://github.com/r-40021/countdown-timer/issues" target="_blank" rel="noopener noreferrer">問題を報告</a>
- template: content-feature
  block: feature-1
  media_alignment: Left
  headline: "<strong>やまだ<wbr>BINGO</strong>"
  content: |-
    <p>インストール不要で、デバイスを問わず使えるビンゴマシーン。シンプルで使いやすい上に、履歴の自動保存機能まで搭載しています。

    <br>

    <small>* 一部の古いブラウザでは保存機能に対応していません。</small>

    </p>

    <p>また、誤ってボタンを押してしまった際に操作を取り消すことができる機能を搭載。ビンゴ大会のあるあるなハプニングにも、戸惑うことなく対応できます。</p>

    <a class="button primary body" href="https://bingo.frogapp.net" target="_blank">アプリを開く</a>

    <a class="button primary body" href="https://github.com/r-40021/bingo" target="_blank" rel="noopener noreferrer">ソースコードを見る</a>

    <a class="button primary body" href="https://github.com/r-40021/bingo/issues" target="_blank" rel="noopener noreferrer">問題を報告</a>
  slug: bingo
  media:
    image: "/uploads/works/bingo.webp"
    alt_text: ビンゴマシーンのスクリーンショット
- template: content-feature
  block: feature-1
  media_alignment: Left
  headline: "<strong>ストップウォッチ</strong>"
  slug: stopwatch
  content: |-
    <p>シンプルすぎるストップウォッチ。</p>

    <p>作業に集中できるよう、広告を始めとした余計なものを取り除きました。</p>

    <p>もちろん完全無料で使えます。</p>

    <a class="button primary body" href="https://stopwatch.frogapp.net" target="_blank">アプリを開く</a>

    <a class="button primary body" href="https://github.com/r-40021/stopwatch/" target="_blank" rel="noopener noreferrer">ソースコードを見る</a>

    <a class="button primary body" href="https://github.com/r-40021/stopwatch/issues/" target="_blank" rel="noopener noreferrer">問題を報告</a>
  media:
    image: "/uploads/works/stopwatch.webp"
    alt_text: stopwatch
- template: content-feature
  block: feature-1
  media_alignment: Left
  headline: "<strong>文字起こし<wbr>ツール</strong>"
  slug: transcription
  content: |-
    <p>ブラウザだけで文字起こしが手軽にできるアプリです。</p>

    <p>日本語のみならず、アメリカ英語・イギリス英語に対応しているため英語の発音練習にも最適です。</p>

    <p>また、書き起こした文章はテキストファイルに書き出すことができます。</p>

    <p>まだ試験段階の技術を使用しているため、一部のブラウザでは正常に機能しません。おすすめは Chrome です。

    <br>

    <small>* Chromium"系"のブラウザでは動かないことがあります。</small></p>

    <a class="button primary body" href="https://speech.frogapp.net" target="_blank">アプリを開く</a>

    <a class="button primary body" href="https://github.com/r-40021/web-speech-api" target="_blank" rel="noopener noreferrer">ソースコードを見る</a>

    <a class="button primary body" href="https://github.com/r-40021/web-speech-api/issues/" target="_blank" rel="noopener noreferrer">問題を報告</a>
  media:
    image: "/uploads/works/speech.webp"
    alt_text: 音声認識の様子
- template: content-feature
  block: feature-1
  media_alignment: Left
  headline: "<strong>簡易<wbr>テキスト<wbr>読み上げくん</strong>"
  slug: read-text
  content: |-
    <p>手軽に音声読み上げができるサイトです。</p>

    <p>読み上げたい文字を入力して Enter キーを押すだけで文字が読み上げられます。</p>

    <p>必要最低限の機能しか搭載していない分、非常にシンプルなものになっています。</p>

    <p>

    <small>某検索エンジンの画面と似ている？気のせい、気のせい…</small></p>

    <a class="button primary body" href="https://read.frogapp.net" target="_blank">アプリを開く</a>

    <a class="button primary body" href="https://github.com/r-40021/read-text" target="_blank" rel="noopener noreferrer">ソースコードを見る</a>

    <a class="button primary body" href="https://github.com/r-40021/read-text/issues/" target="_blank" rel="noopener noreferrer">問題を報告</a>
  media:
    image: "/uploads/works/read.webp"
    alt_text: 簡易テキスト読み上げくんのスクリーンショット
- template: content-feature
  block: feature-1
  media_alignment: Left
  media:
    image: "/uploads/works/snapdrop-jp.webp"
    alt_text: Snapdrop JPのスクリーンショット
  headline: "<strong>Snapdrop JP</strong>"
  slug: snap-jp
  content: |-
    <p>AirDrop みたいなことがブラウザでできる、<a href="https://snapdrop.net/" target="_blank" rel="noopener noreferrer">Snapdrop</a> を日本語化したもの。</p>

    <p>英語特有のノリの文章を訳すのは大変でまだ不自然な部分が残っているが、今後改善していく予定。</p>

    <a class="button primary body" href="https://share.frogapp.net" target="_blank">アプリを開く</a>

    <a class="button primary body" href="https://github.com/r-40021/snapdrop-jp" target="_blank" rel="noopener noreferrer">ソースコードを見る</a>

    <a class="button primary body" href="https://github.com/r-40021/snapdrop-jp/issues" target="_blank" rel="noopener noreferrer">問題を報告</a>
- template: detail-content
  block: text-1
  headline: Chrome 拡張機能
  content: "<p>最近は Chrome の拡張機能も作っています。</p>"
- template: content-feature
  block: feature-1
  media_alignment: Left
  headline: "<strong>Rename Tab</strong>"
  content: |-
    <p>この拡張機能を用いると、ブラウザのタブに表示されるアイコンは非表示になり、Web サイト名は別のものに置き換えられます。</p>

    <p>ブラウザの画面を他人に見せる時に、ほかのタブで開いている Web ページを知られたくない場合などに使えます。</p>

    <a class="button primary body" href="https://chrome.google.com/webstore/detail/rename-tab/nbpkdabdmbefnemcjehinaeklgmngdoo" target="_blank" rel="noopener noreferrer">インストール</a>

    <a class="button primary body" href="https://github.com/r-40021/rename_tab" target="_blank" rel="noopener noreferrer">ソースコードを見る</a>

    <a class="button primary body" href="https://github.com/r-40021/ishiki_takaku/issues/" target="_blank" rel="noopener noreferrer">問題を報告</a>
  slug: rename-tab
  media:
    image: "/uploads/works/rename-tab.png"
    alt_text: 設定画面
- template: content-feature
  block: feature-1
  media_alignment: Left
  headline: "<strong>ページ<wbr>簡単<wbr>共有</strong>"
  content: |-
    <p>閲覧しているページのタイトルや URL をコピーしたり、各種 SNS でシェアしたりできる拡張機能です。</p>

    <p>簡単な操作で、すぐにシェアできます。</p>

    <p>インストールする際に権限を一切要求しないのもポイント。</p>

    <a class="button primary body" href="https://chrome.google.com/webstore/detail/easy-page-sharing/eoccdpbaigkllhflcgidhpcedgmlckkp" target="_blank" rel="noopener noreferrer">インストール</a>

    <a class="button primary body" href="https://github.com/r-40021/copy_title-URL" target="_blank" rel="noopener noreferrer">ソースコードを見る</a>

    <a class="button primary body" href="https://github.com/r-40021/copy_title-URL/issues/" target="_blank" rel="noopener noreferrer">問題を報告</a>
  media:
    image: "/uploads/works/share.png"
    alt_text: ページ簡単共有
  slug: easy-share
- template: content-feature
  block: feature-1
  media_alignment: Left
  headline: "<strong>文字数<wbr>カウント</strong>"
  slug: countChar
  content: |-
    <p>Web サイト上のフォームに文字を入力した際に、リアルタイムで文字数を表示する拡張機能です。</p>

    <p>改善点はまだまだ多いですが、ぜひ使ってみてください。</p>

    <a class="button primary body" href="https://chrome.google.com/webstore/detail/%E6%96%87%E5%AD%97%E6%95%B0%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88/bhfihcmmnnagikobmgakbjliddjmfgmd" target="_blank" rel="noopener noreferrer">インストール (Chrome)</a>

    <a class="button primary body" href="https://addons.mozilla.org/ja/firefox/addon/count-character/" target="_blank" rel="noopener noreferrer">インストール (Firefox)</a>

    <a class="button primary body" href="https://github.com/r-40021/count-character" target="_blank" rel="noopener noreferrer">ソースコードを見る</a>

    <a class="button primary body" href="https://github.com/r-40021/count-character/issues/" target="_blank" rel="noopener noreferrer">問題を報告</a>
  media:
    image: "/uploads/works/count-character.jpg"
    alt_text: その場で字数を確認できる拡張機能です。
- template: content-feature
  block: feature-1
  media_alignment: Left
  headline: "<strong>やっぱり Noto Sans</strong>"
  slug: noto
  content: |-
    <p>Web サイト上の読みづらい・美しくない(と作者が勝手に思っている)フォントを、読みやすく美しい Noto Sans に置き換える拡張機能です。</p>

    <p>やっと実用的な拡張機能が作れた気がする。</p>

    <a class="button primary body" href="https://chrome.google.com/webstore/detail/oecglhldbofcklanmhckefiflhfhabdd" target="_blank" rel="noopener noreferrer">インストール (Chrome)</a>

    <a class="button primary body" href="https://addons.mozilla.org/ja/firefox/addon/replace-with-noto/" target="_blank" rel="noopener noreferrer">インストール (Firefox)</a>

    <a class="button primary body" href="https://github.com/r-40021/replace-font" target="_blank" rel="noopener noreferrer">ソースコードを見る</a>

    <a class="button primary body" href="https://github.com/r-40021/replace-font/issues/" target="_blank" rel="noopener noreferrer">問題を報告</a>
  media:
    image: "/uploads/works/replace-font.jpg"
    alt_text: replace-font

---
