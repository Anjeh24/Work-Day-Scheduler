//displaying day and time using moment.js
var dayofWeek = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(dayofWeek);


//trying to stop the text area from being a blank aftre the page is refreshed.
$( "textarea" ).click(function( event ) {
    event.preventDefault();
    $( "<div>" )
      .append( "default " + event.type + " prevented" )
      .appendTo( "#textspace" );
  });