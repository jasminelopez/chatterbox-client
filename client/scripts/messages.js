var Messages = {
  //constructor object
  makeMessage: function (username, message) {
    this.username = username;
    this.message = message;
  },

  addMessage: function (username, message) {
    var message = new this.makeMessage(username, message);
    return message;
  }

};


//Message.createMessage()