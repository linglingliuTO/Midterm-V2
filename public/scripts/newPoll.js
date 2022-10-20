$(document).ready(function () {

  const deleteOption = ()=> {
    const optionContainer = document.getElementById('options-parent');
    const optionRow = optionContainer.children;
    const lastRow = document.querySelectorAll('.option').length-1
    if (lastRow > 1 )  { optionRow[lastRow].remove()}
    else {alert( "Cannot Remove , need  at least 2 Options" )};


  }

  const getMarkup =(lastRow) => {
    const  $markup = $(
    `
    <div class="row">
    <div class="col-4">
      <div class="mb-3">
        <label for="option_3" class="option">Option ${lastRow}</label>
        <input type="text" class="form-control" id="option_3" placeholder="add option">
      </div>
    </div>
    <div class="col">
      <label for="option_3_description" class="label">Optional Description</label>
      <input type="text" class="form-control" id="option_3_description" placeholder="describe option">
    </div>
  </div>
  `  )
  return $markup;
    }


  const addOption = ()=> {
    const lastRow = document.querySelectorAll('.option').length+1
    $optionElement= getMarkup(lastRow)
     console.log(lastRow)
    if (lastRow > 5) {
      alert( "Cannot Add , Max 5 Options" )
     } else {
    $("#options-parent").append($optionElement)
     }

  }

  $("#deletePollbtn").on("click",  deleteOption);
  $("#addPollbtn").on("click", addOption );
 })
