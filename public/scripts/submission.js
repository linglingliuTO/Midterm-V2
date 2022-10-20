

$(document).ready(function () {
  $(function () {
    $("#options-container").sortable({
      change: function (event, ui) {
      }
    });
  });


  // function to send the data from the order and name back to the router

  const recordResults = (e) => {
    e.preventDefault()
    let itemOrder = $('#options-container').sortable("toArray");
    const pollId = window.location.pathname.split("/")[2]
    const voterName = $("#user_input_name").val()
    for (let i = 0; i < itemOrder.length; i++) {
      const newSubmission = {
        voter_name: voterName,
        option_id: itemOrder[i],
        rank: itemOrder.length - i,
        poll_id: pollId,
      }
      $.ajax({
        method: 'post',
        url: '/submissions/',
        data: newSubmission
      })
        .done((response) => {
          const getMarkup = () => {
            const $markup = $(
              `
        <div class="container text-center">
        Thank you for your submission!
        </div>
      `)
            return $markup;
          }
          $optionElement = getMarkup()
          $('#overall_container').empty()
          $('#overall_container').append($optionElement)

        });

    }


  }



  $("#submitOptionsbtn").on("click", recordResults);



});

