$('.form-group').click(function () {
  $(this).addClass('focussed')
  $(this).find('input[type="text"]').focus()
  $(this).find('textarea').focus()
})

$(document).mouseup(function (e) {
  $('.form-group.focussed').each(function () {

    // If the field has content... Don't revert the label style
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
      _subject: 'required',
      first_name: 'required',
      last_name: 'required',
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      _subject: 'This field is required',
      first_name: 'This field is required',
      last_name: 'This field is required',
      email: {
        required: 'This field is required',
        email: 'Please enter a valid email'
      }
    },
    invalidHandler: formError,
    submitHandler: function (form) {
      $.ajax({
        url: "https://formspree.io/jesse.vd.pluym@gmail.com",
        method: "post",
        dataType: "json",
        accept: "application/json",
        data: $(form).serialize(),
        success: function(){
          $('.initial').hide()
          $('html, body').animate({
            scrollTop: 0
          }, 500)
          $('.after').show()
        },
        error: formError
      })
    }
  })
})

function formError () {
  $('html, body').animate({
    scrollTop: $('section#form').offset().top
  }, 500)
  $('#error').addClass('active')
}
