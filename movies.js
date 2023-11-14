"use strict";

$('#movie-input').on('submit', addMovieToRatingsList);

function addMovieToRatingsList(evt){
  evt.preventDefault();
  console.log('adding movie to list');
  const titleInput = $('#title-input').val();
  const ratingInput = $('#rating-input').val();
  console.log('logging movie, title:', titleInput, 'rating:', ratingInput);
}