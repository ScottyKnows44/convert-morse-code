$('#pongView').hide()
$('#submitForm').hide()
$('#calc').hide()

$( "#codeLink" ).click(function() {
  $( "#submitForm" ).toggle();
  $('#pongView').hide()
  $('#calc').hide()
});

$('#pongLink').click(function() {
  $('#pongView').toggle();
  $('#submitForm').hide();
  $('#calc').hide()
});

$('#calculator').click(function(){
  $('#calc').toggle();
  $('#submitForm').hide()
  $('#pongView').hide()
});