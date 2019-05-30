class YahooCalURLParser{
  constructor(url){
    this.url = url;
    this.parser = new URL(url);
    this.parse();
  }
  // パース処理を行う
  parse(){
    // クエリパラメータから値を取得
    let startStr = this.parser.searchParams.get("ST");
    let durStr = this.parser.searchParams.get("DUR");
    this.title = this.parser.searchParams.get("TITLE");
    this.desc = this.parser.searchParams.get("DESC");
    // データ形式の加工
    this.durHour = parseInt(durStr.slice(0, 2));
    this.durMin = parseInt(durStr.slice(2, 4));
    this.startDate = new Date(
      startStr.slice(0, 4),
      parseInt(startStr.slice(4, 6)-1),
      startStr.slice(6, 8),
      startStr.slice(9, 11),
      startStr.slice(11, 13)
    );
    this.endDate = new Date(this.startDate.getTime());
    this.endDate.setHours(this.startDate.getHours() + this.durHour);
    this.endDate.setMinutes(this.startDate.getMinutes() + this.durMin);
    console.log(`-----------------------------------------------`);
    console.log(`タイトル:${this.title}`);
    console.log(`説明:\n\n${this.desc}\n`);
    console.log(`開始時間:${this.startDate}`);
    console.log(`終了時間:${this.endDate}`);
    console.log(`-----------------------------------------------`);
    return;
  }
  dateToStr(date){
    let str = `${date.getFullYear()}-`;
    str += `${('0' + (date.getMonth()+1)).slice(-2)}-`;
    str += `${('0' + (date.getDate())).slice(-2)}T`;
    str += `${('0' + (date.getHours())).slice(-2)}:`;
    str += `${('0' + (date.getMinutes())).slice(-2)}:00`;
    str += `+09:00`;  // UTC標準時間との差
    return str;
  }
  startStr(){
    return this.dateToStr(this.startDate);
  }
  endStr(){
    return this.dateToStr(this.endDate);
  }
}

module.exports = YahooCalURLParser;