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
  var navState = $nav.attr('data-scrolled')
  if (navState === 'true') navState = true
  if (navState === 'false') navState = false
  // Run the function
  navScroll($nav, px_scrolled, 10, navState)

  fadeIn(px_scrolled)
})

function navScroll ($element, px_scrolled, breakpoint, current) {
  if (px_scrolled > breakpoint && current !== true) {
    $element.attr('data-scrolled', true)
  } else if (px_scrolled < breakpoint && current !== false) {
    $element.attr('data-scrolled', false)
  }
}

function fadeIn (px_scrolled) {
  $('.fade-in').each(function () {
    var pos = $(this).offset().top
    var breakpoint = px_scrolled + ($(window).height() * (2/3))
    if (pos < breakpoint && !$(this).hasClass('animated')) {
      console.log('ran')
      $(this).removeClass('hidden').addClass('animated')
    }
  })
}
$(document).ready(function () {
  $('.fade-in').addClass('hidden')
  // Take care of the elements already in view right from the start.
  $('.fade-in.now').removeClass('hidden').addClass('animated')
})
