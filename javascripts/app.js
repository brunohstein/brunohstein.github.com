$(document).ready(function() {

  $.getJSON('http://api.dribbble.com/players/brunohstein/shots?callback=?', 
    {},
    function (data) {
      $.each(data.shots, function(i, shot) {
        $('.work').append([
          '<div class="shot">',
            '<a href="' + shot.url + '" target="_blank">',
              '<img src="' + shot.image_url + '" />',
            '</a>',
          '</div>'
        ].join(''));
      });  
    }
  );

  
  function setAboutHeight() {
    var newHeight = $('.about').height() + 85;

    $('.clear').css('height', newHeight);
  };

  setAboutHeight();

  $(window).resize(function() {
    setAboutHeight();
  });

});