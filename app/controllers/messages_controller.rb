class MessagesController < ApplicationController
  def new
    @messages = Message.all
    @message = Message.new
  end

  def create
    @message = Message.new(text: params[:message][:text])
    if @message.save
      ActionCable.server.broadcast 'message_channel', content: @message
      # broadcast（サーバーから）を通して'message_channel'に向けて@messageを送信する
      # 送信された情報はmessage_channel.jsで受け取る
    end
  end
end
