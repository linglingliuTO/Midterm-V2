

$(document).ready(function () {
$( function() {
  $( "#options-container" ).sortable ({
    change: function(event, ui) {
    }
  });
} );


// function to send the data from the order and name back to the router

const recordResults = (e)=> {
  e.preventDefault()
  let itemOrder = $('#options-container').sortable("toArray");
  const pollId = window.location.pathname.split("/")[2]
  const voterName = $("#user_input_name").val()
  for (let i = 0; i < itemOrder.length; i ++) {
    const newSubmission = {
      voter_name: voterName,
      option_id: itemOrder[i],
      rank: itemOrder.length-i,
      poll_id: pollId,
     }
     $.ajax({
      method: 'post',
      url: '/submissions/',
      data: newSubmission
    })
    .done((response) => {
      window.location.href = `/results/${pollId}`
    });

  }


}



$("#submitOptionsbtn").on("click", recordResults);



});

const getOptionId = () => {
  let itemID = []
  for (i of itemOrder ) {
    itemID.push(i)
  }
}
