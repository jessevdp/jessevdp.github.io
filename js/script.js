$('nav').on('click', '.menu-button', function () {
  var value = $('nav.top').attr('data-expanded')

  // Convert string to Boolean
  if (value === 'true') value = true
  if (value === 'false') value = false
  value = !value // Invert value

  $('nav.top').attr('data-expanded', value)
})

$(window).scroll(function () {
  var px_scrolled = $(this).scrollTop()

  var $nav= $('nav.top')
  // Current state -> Boolean
  var state = $nav.attr('data-scrolled')
  if (state === 'true') state = true
  if (state === 'false') state = false
  // Run the function
  navScroll($nav, px_scrolled, 10, state)
})

function navScroll ($element, px_scrolled, breakpoint, current) {
  if (px_scrolled > breakpoint && current !== true) {
    $element.attr('data-scrolled', true)
  } else if (px_scrolled < breakpoint && current !== false) {
    $element.attr('data-scrolled', false)
  }
}
