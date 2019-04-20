var Messages = {
  //constructor object
  makeMessage: function (username, text, roomname) {
    this.username = username;
    this.text = text;
    this.roomname = roomname;
  },

  addMessage: function (username, text, roomname) {
    var message = new this.makeMessage(username, text, roomname);
    return message;
  }

};


//Message.createMessage()