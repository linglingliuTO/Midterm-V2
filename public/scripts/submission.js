$( function() {
  $( ".container" ).sortable ({
    change: function(event, ui) {
      console.log('event', event)
      console.log('ui', ui)
    }
  });
} );