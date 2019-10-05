import * as request from 'request-promise-native';
import * as chardet from 'chardet';
import * as iconv   from 'iconv-lite';
import { JSDOM }    from 'jsdom';

export const test = async () : string => {
  const url = 'https://idolmaster.jp/schedule/?ey=2019&em=10';

  // HTTPリクエスト送信
  const option = {
    url: url,
    encoding: null
  };
  const response = await request.get(option);

  // 文字コード判別
  const encoding = chardet.detect(response)!.toString();
  if(!encoding) throw new Error();

  // 文字コード変換
  const html: string = iconv.decode(response, encoding);

  // HTMLパース
  const jsdom = new JSDOM(html);
  const document = jsdom.window.document;

  // スクレイピング
  // ここからはquerySelectorとかgetElementByIdとかお馴染みのメソッドで好きなだけスクレイピングしちゃってください
  const elm = document.querySelector('.List');

  return elm.text;
};

test();
