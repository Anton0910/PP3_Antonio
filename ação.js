$(document).ready(function() {
    $('.btn-add-badge').on('click', function() {
      var badgeValue = $('.badge-value').text();
      badgeValue = parseInt(badgeValue) + 1;
      $('.badge-value').text(badgeValue);
      if(badgeValue > 4) {
          $('#jumbotron').removeClass('invisible');
      }
    });
  });