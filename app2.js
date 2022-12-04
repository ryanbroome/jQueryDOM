$('.submit').on('click', function (event) {
  event.preventDefault();
  const title = $('input').eq(0).val().toString();
  if (title.length <= 2) {
    alert('Titles must be more than two characters');
  } else {
    const rating = $('input').eq(1).val();
    $('body').append(`<div class="container"><p class="title">${title}</p> <p class="rating"> ${rating}</p></div>`).append('<button class="remove">Remove</button>');
  }
});
// COMMENT This feels like it can be refactored. I think I could get there with the last part of the exercise to sort by rating or alphabetical but may take a while. I think I would do something similar to below but maybe a shorthand version to collect those specific values 'ratings', then sort them and then reappend them and their parents or siblings to the body or wrapper in correct order somehow small to large or A to Z.
$('.sort').on('click', function (event) {
  event.preventDefault();
  const ratings = [];
  $('p.rating').each(function (index) {
    ratings.push(Number($(this).text()));
  });
  console.log(ratings);
});

$('body').on('click', '.remove', function () {
  $(this).prev().remove();
  $(this).remove();
});
