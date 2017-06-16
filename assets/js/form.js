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
