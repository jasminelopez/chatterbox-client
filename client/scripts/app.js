var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    
    Parse.readAll((data) => {
      // examine the response from the server request:
      for (var i = 0; i < data.results.length; i++) {
        //if it has a roomname and doesn't already exist in the <select> <select>
        if (data.results[i].roomname) {
          //roomname string 
          //var childs = $('#rooms select').children();
          RoomsView.renderRoom(data.results[i].roomname);
        }
        if (!data.results[i].username || !data.results[i].text) {
          //do nothing
        } else {
          $('#chats').append(MessageView.render(data.results[i]));
        }
      }
      console.log(data.results);
    });
    callback();
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
