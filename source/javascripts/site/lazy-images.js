var ready = function() {
  $('.image.lazy')
  .visibility({
    type       : 'image',
    transition : 'fade in',
    duration   : 300
  });
};

$(document).ready(ready);
$(document).on('page:load', ready);