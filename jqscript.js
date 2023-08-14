// Zoom MAP
$(document).ready(function() {
    var svgElement = $('#my-svg');
    var zoomLevel = 1;
  
    $('.zoom-container').on('wheel', function(e) {
      e.preventDefault();
      var zoomAmount = e.originalEvent.deltaY > 0 ? 0.9 : 1.1;
      zoomLevel *= zoomAmount;
      svgElement.css('transform', 'scale(' + zoomLevel + ')');
    });
  
    // Enable draggable functionality using jQuery UI Draggable
    svgElement.draggable();
  });