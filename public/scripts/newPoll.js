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
        <input type="text" class="form-control" id="option${lastRow} is-invalid" placeholder="add option"  required name="option">
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


})
module.exports = { validateForm };
