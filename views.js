$('#pongView').hide()
$('#submitForm').hide()

$( "#codeLink" ).click(function() {
  $( "#submitForm" ).toggle();
  $('#pongView').hide()
});

$('#pongLink').click(function() {
  $('#pongView').toggle();
  $('#submitForm').hide();
});