var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() { 
    //adding the rooms that already exist on the server
    //when button is clicked, it will add room
    RoomsView.$button.on('click', RoomsView.render);
  },

  render: function() {
    //click event when button is clicked

    RoomsView.renderRoom('lul');
  },

  renderRoom: function (roomname) {
    //we append an option <option><%= roomname ></option>
    var $roomname = $('<option>' + roomname + '</option>');
    RoomsView.$select.append($roomname);
  }

};
