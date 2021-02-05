// このファイルはサーバーから送られてきたデータをクライアントの画面に描画する為のファイル
import consumer from "./consumer"

consumer.subscriptions.create("MessageChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  // 受け取った情報はこちらの引数dataに入る
  received(data) {
    const html = `<p>${data.content.text}</p>`;
    // contentはコントローラーのcreateアクションないで指定したcontentから。contentは@messageと同義なので、textを取り出せる
    const messages = document.getElementById('messages');
    const newMessage = document.getElementById('message_text');
    messages.insertAdjacentHTML('afterbegin', html);
    newMessage.value='';
  }
});
