/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function () {
  // Language menu toggle
  $('#lang-toggle').on('click', function (e) {
    e.preventDefault();
    // console.log("Language icon clicked");
    $('#lang-menu').toggle();
  });

  // Close language menu if clicking outside
  $(document).on('click', function (e) {
    if (!$(e.target).closest('#lang-toggle').length) {
      $('#lang-menu').hide();
    }
  });
});
