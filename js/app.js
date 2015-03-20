$(function() {
  // touch select for tag-list.html and preview-tag.html
  $('.table-view-cell').click(function() {
      $(this).find('.check').toggleClass('hide');

      $('.table-view').find('.radio').addClass('hide');
      $(this).find('.radio').toggleClass('hide');
  });
})
