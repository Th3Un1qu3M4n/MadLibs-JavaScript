$('document').ready(function () {
  $('#tell-story').click(function () {
    var person = $('#inputPerson').val();
    var character = $('#inputCharacter').val();
    var adverb = $('#inputAdverb').val();
    var adjective = $('#inputAdjective').val();

    if (!(person && character && adverb && adjective)) {
      alert('please fill all the fields');
      return;
    }

    $('.person').html(person);
    $('.character').html(character);
    $('.adverb').html(adverb);
    $('.adjective').html(adjective);

    $('.story').show();
  });
});
