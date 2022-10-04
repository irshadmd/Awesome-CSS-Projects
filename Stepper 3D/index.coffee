$(document).ready ->

  zero = 0
  rotateY = 180
  value = 0
  count = 0

  setValueFunc = () ->
    if count % 2 == 0
      $(".value_front").text(value)
    else
      $(".value_back").text(value)

  $(".increment").on "mouseenter", ->
    $(".increment").css("opacity": "1")
    $(".decrement").css("opacity": ".2")

  $(".container").on "mouseout", ->
    $(".increment").css("opacity": ".2")
    $(".decrement").css("opacity": ".2")

  $(".decrement").on "mouseenter", ->
    $(".decrement").css("opacity": "1")
    $(".increment").css("opacity": ".2")

  $(".increment").on "mousedown", ->
    count++
    $(".container").css("transform": "rotateY(#{zero = zero + rotateY}deg)")
    value++
    setValueFunc()
  $(".decrement").on "mousedown", ->
    count++
    $(".container").css("transform": "rotateY(#{zero = zero - rotateY}deg)")
    value--
    setValueFunc()
