/* ==========================================================================
   toggle the language selection bars
   ========================================================================== */

$(document).ready(function () {
  // Language menu toggle
  $('#lang-toggle').on('click', function (e) {
    e.preventDefault();
    // console.log("Language icon clicked");
    e.stopPropagation();  // <-- ADD this!
    $('#lang-menu').toggle();
  });

  // Prevent click inside lang-menu from closing it
  $('#lang-menu').on('click', function (e) {
    e.stopPropagation();  // <-- ADD this!
  });
  
  // Close language menu if clicking outside
  $(document).on('click', function (e) {
    if (!$(e.target).closest('#lang-toggle').length) {
      $('#lang-menu').hide();
    }
  });
});
