$(document).ready(function () {
  // deleting an option on the form
  const deleteOption = (e) => {
    e.preventDefault()
    const optionContainer = document.getElementById('options-parent');
    const optionRow = optionContainer.children;
    const lastRow = document.querySelectorAll('.option').length - 1
    if (lastRow > 1) { optionRow[lastRow].remove() }
    else { alert("Cannot Remove , need  at least 2 Options") };


  }


  const getMarkup = (lastRow) => {
    const $markup = $(
    `
    <div class="row">
    <div class="col-4">
      <div class="mb-3">
        <label for="option_${lastRow}" class="option">Option ${lastRow}</label>
        <input type="text" class="form-control" id="option${lastRow}" placeholder="add option"  name="option">
      </div>
    </div>
    <div class="col">
      <label for="option_${lastRow}_description" class="label">Optional Description </label>
      <input type="text" class="form-control" id="description${lastRow}" placeholder="describe option", name="description">
    </div>
  </div>
  `  )
    return $markup;
  }
  // adding an option on the form
  const addOption = (e) => {
    e.preventDefault()
    const lastRow = document.querySelectorAll('.option').length + 1
    $optionElement = getMarkup(lastRow)
    if (lastRow > 5) {
      alert("Cannot Add , Max 5 Options")
    } else {
      $("#options-parent").append($optionElement)
    }

  }




  $("#deleteOptionBtn").on("click", deleteOption);
  $("#addOptionBtn").on("click", addOption);



  // id SERIAL PRIMARY KEY NOT NULL,
  // user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  // sub_link TEXT NOT NULL,
  // admin_link TEXT NOT NULL,
  // name_required VARCHAR(255) NOT NULL

  // id SERIAL PRIMARY KEY NOT NULL,
  // title VARCHAR(255) NOT NULL (good),
  // poll_id INTEGER REFERENCES polls(id) ON DELETE CASCADE,
  // description TEXT

  // const addNewPoll= () => {
  //   // e.preventDefault()
  //   const lastRow = document.querySelectorAll('.option').length

  //   const title = $("#poll_question").val()
  //   const sub_link  = `http://localhost:8080/submissions/`
  //   console.log(title, sub_link, lastRow)
  //   // for (let i = 0; i < itemOrder.length; i++) {
  //   //   const newSubmission = {
  //   //     voter_name: voterName,
  //   //     option_id: itemOrder[i],
  //   //     rank: itemOrder.length - i,
  //   //     poll_id: pollId,
  //   //   }
  //     $.ajax({
  //       method: 'get',
  //       url: '/newpoll/',
  //       data: newSubmission
  //     })



  //   }


  //   // const recordResults = (e) => {
  //   //   e.preventDefault()
  //   //   console.log("hello!")
  //   // }

  //   $("#createPollbtn").on("click", addNewPoll);

})
