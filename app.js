// PART ONE
// =============>>>>>>>>>>>>>
//When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
console.log("Let's get ready to party with jQuery");
// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article img').attr('class', 'image-center');
// Remove the last paragraph in the article.
$('article p:last-child').remove();
// Set the font size of the title to be a random pixel size from 0 to 100.
$('#title').css('font-size', function () {
  return `${Math.floor(Math.random() * 100)}` + 'px';
});
// Add an item to the list; it can say whatever you want.
$('aside ol').append('<li>Whatever you want</li>');
// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside *').remove();
$('aside').append('<p>I sincerely apologize that there was once a list that existed here prior to your visit.</p>');
// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$('div.row mb-5').on('click', '.form-control', function () {
  console.log($(this));
});
$('div').on('focus', '.col-sm-4', function () {
  $('body').css({
    'background-color': `rgb( ${$('input').eq(0).val()}, ${$('input').eq(1).val()},${$('input').eq(2).val()}`,
  });
});
//COMMENT  Believe I should use logic for $('input').eq(0).val() or logic to determine when the val changes rather than the inputs having focus/click/hover maybe set a short timer to check for a different value other than the default or something every shortwhile.

//iterates over each item, evaluates expression/ if true returns each value to new array

// Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function () {
  $(this).fadeOut(1500, function () {
    $(this).remove();
  });
});
