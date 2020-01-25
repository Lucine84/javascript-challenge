// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

console.log(data);


data.forEach(function(tableData) {
  console.log(tableData);
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

data.forEach((tableData) => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


displayData(tableData)

var inputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// filter data with desired date
function changeHandler(){
    d3.event.preventDefault();
    console.log(inputText.property("value"));
    var new_table = tableData.filter(sighting => sighting.datetime===inputText.property("value"))
    displayData(new_table)
}

// event listener to handle change and click
inputText.on("change", changeHandler)
button.on("click", changeHandler)