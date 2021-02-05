# このファイルはクライアントとサーバーを結びつける為のファイル
# MVCでいうところのルーティングの機能
class MessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from "message_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
