$('nav').on('click', '.menu-button', function () {
  var value = $('nav.top').attr('data-expanded')

  // Convert string to Boolean
  if (value === 'true') value = true
  if (value === 'false') value = false
  value = !value // Invert value

  $('nav.top').attr('data-expanded', value)
})
