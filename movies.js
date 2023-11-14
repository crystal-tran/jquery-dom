"use strict";

$('#movie-input').on('submit', addMovieToRatingsList);

function addMovieToRatingsList(evt){
  evt.preventDefault();
  console.log('adding movie to list');
  const $titleInput = $('#title-input').val();
  const $ratingInput = $('#rating-input').val();
  const $deleteBtn = $("<button>").text("Delete");
  $deleteBtn.addClass('btn btn-dark click')

  $('#movie-ratings').append($("<div>").text(`${$titleInput} ${$ratingInput}`).append($deleteBtn));
  //console.log('logging movie, title:', titleInput, 'rating:', ratingInput);
}

$('#movie-ratings').on('click', 'button', function(evt){
  evt.preventDefault();
  $(evt.target).parent().remove();
})