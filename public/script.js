$(document).ready( () => {
  $('#submitForm').click( () => {
    $.ajax({
      dataType: 'json',
      url: '/employee',
      type: 'POST',
      cache: false,
      data: {
        name: $('#firstName').val(),
        last: $('#lastName').val()
      },
      success: function () {
        alert('Your submission was successful');
      },
      error: function (data) {
        alert('Your submission was not successful');
      }
    });
  });
  debugger;
});