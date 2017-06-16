$('.form-group').click(function () {
  $(this).addClass('focussed')
  $(this).find('input[type="text"]').focus()
  $(this).find('textarea').focus()
})

$(document).mouseup(function (e) {
  $('.form-group.focussed').each(function () {

    // If the field has content... Don't show the label
    var content = $(this).find('input').val() || $(this).find('textarea').val()
    if (content) { return }

    if (! $(this).is(e.target) && $(this).has(e.target).length === 0) {
      $(this).removeClass('focussed')
    }
  })
})

$(document).on('click', '.submit', function () {
  $('section#form form').valid()
})

$(document).ready(function (e) {
  $('section#form form').validate({
    rules: {
      subject: 'required',
      first_name: 'required',
      last_name: 'required',
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      subject: 'This field is required',
      first_name: 'This field is required',
      last_name: 'This field is required',
      email: {
        required: 'This field is required',
        email: 'Please enter a valid email'
      }
    },
    invalidHandler: function (e, validator) {
      $('html, body').animate({
        scrollTop: $('section#form').offset().top
      }, 500)
      $('#error').addClass('active')
    }
  })
})
