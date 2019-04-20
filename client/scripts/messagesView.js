var MessagesView = {

  $chats: $('#chats'), //div on index.html

  initialize: function() {
  },

  render: function() {
  },
  //append the message passed in- to the chat DOM element 
  renderMessage: function (message) {
    MessagesView.$chats.prepend(MessageView.render(message));
  }
};
