$(document).ready(function () {
  const labels = <%- JSON.stringify(labelsData) %>;
  const datapoints = <%- JSON.stringify(resultsData) %>;

  const data = {
    labels: labels,
    datasets: [{
      label: 'pollresults',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: datapoints,
      
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {responsive: false}
  };


const myChart = new Chart(
  document.getElementById('myChart'),
  config
);


}