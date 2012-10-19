$(document).ready(function() {

  $.getJSON('http://api.dribbble.com/players/brunohstein/shots?callback=?', 
    {},
    function (data) {
      $.each(data.shots, function(i, shot) {
        $('.work').append([
          '<div class="shot">',
            '<img src="' + shot.image_url + '" />',
          '</div>'
        ].join(''));
      });  
    }
  );

  
  function setAboutHeight() {
    var newHeight = $('.about').height() + 90;

    $('.clear').css('height', newHeight);
  };

  setAboutHeight();

  $(window).resize(function() {
    setAboutHeight();
  });

});