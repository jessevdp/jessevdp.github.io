function infoSection(speed) {
  $(document).on('click', '.info-button', function () {
    // From main page to info page
    $('.title').fadeOut(speed, function () {
      $('.info').fadeIn(speed);
    });
    $('.info-button').fadeOut(speed, function () {
      $('.close-button').show();
    })
  });

  $(document).on('click', '.close-button', function () {
    // From info page to main page
    $('.info').fadeOut(speed, function () {
      $('.title').fadeIn(speed);
    });
    $('.close-button').fadeOut(speed, function () {
      $('.info-button').show();
    })
  });
}

$(document).ready(function () {
  infoSection();
});
