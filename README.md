# multiColorGenerator
[Github](https://github.com/AtsuyaKato/multiColorGenerator)  
  
デザインのためにn色欲しいなって時にサッと使えるツールを目指す  
ソリューションは[やすくんのツイート](https://twitter.com/yasutaku0523/status/1437582157686337538)より，
HSV形式でSとVを指定し(ユーザが直接，あるいは"パステルカラー(S=20,V100)"のようなプリセットで)，さらに欲しい色の数nを入力すると，Hをn等分することで色を決定・出力してくれる手法を取る  
出力は色の見本(該当の色がついた四角などの図形)とカラーコードが並ぶようにする

# Enviroment

Reactで開発，github-pagesで公開できる静的サイトとして実装する

# Note

# Requirements
```
    npm install --save react-router-dom
    npm install @material-ui/core
    npm install @material-ui/icons
```

# Textbook
[Markdown記法 チートシート](https://gist.github.com/mignonstyle/083c9e1651d7734f84c99b8cf49d57fa)
[配列へのフックの方法](https://ichi.pro/fukku-o-shiyoshite-react-jotai-no-hairetsu-ni-tsuikasuru-hoho-67108288520668)  
[ループ文](https://www.i-ryo.com/entry/2020/03/04/082411)  
[stateのリフトアップ](https://ja.reactjs.org/docs/lifting-state-up.html)  

# Log

* 2021/09/14 v0製作
* 2021/09/16 入力UI，計算結果のリスト表示機能の実装
* 2021/09/19 軽く説明を追加，Github-Pagesにデプロイ