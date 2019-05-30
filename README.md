# YTra2GCal
Yahoo路線がYahooカレンダーにしか対応してくれてないのをGoogleカレンダーにも対応させたいプロジェクト

```
git clone https://github.com/konabe/YTra2GCal.git
cd ./YTra2GCal
```

[ここ](https://developers.google.com/calendar/quickstart/nodejs?hl=ja)から"ENABLE THE GOOGLE CALENDAR API"をクリック。

"ENABLE THE GOOGLE CALENDAR API"を押してダウンロードされる`credentials.json`を`./YTra2GCal`直下に入れる。

```
node .
```

URLは、路線の共有→カレンダーに登録を押した後に出てくるYahooカレンダーのURLをそのままコピーすればいいです。
