// @TODO: Complete the following function that builds the metadata panel

function buildMetadata(sample) {
    // Use `d3.json` to fetch the metadata for a sample
  d3.json(`/metadata/${sample}`).then((data) => {
  // Use d3 to select the panel with id of `#sample-metadata`
  var PANEL =  d3.select("#sample-metadata");
 // Use `.html("") to clear any existing metadata
  PANEL.html("");
  // Use `Object.entries` to add each key and value pair to the panel
  Object.entries(data).forEach(([key, value]) => {
  // Hint: Inside the loop, you will need to use d3 to append new
  // tags for each key-value in the metadata.
    PANEL.append("h6").text(`${key}: ${value}`);
  });
});
}
  // BONUS: Build the Gauge Chart
  // buildGauge(data.WFREQ);

function buildCharts(sample) {
  d3.json(`/samples/${sample}`).then((data) => {
    var traceBubble = {
      x: data.otu_ids,
      y: data.sample_values,
      mode: 'markers',
        marker : {
          color: data.otu_ids,
          size: data.sample_values,
          colorscale: "Rainbow"}
          };

        var layoutBubble = {
          title: "Bubble Chart of Sample Values"
          };
        
        Plotly.newPlot('bubble', [traceBubble], layoutBubble);
    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values, otu_ids, and labels (10 each)
      var tracePie = {
        labels: data.otu_ids.slice(0,10),
        values: data.sample_values.slice(0,10),
        type: "pie"
      }
      var layoutPie = {
        title: "Sample Values"
        };

        Plotly.newPlot("pie", [tracePie], layoutPie);
      });
    };
 


  // @TODO: Use `d3.json` to fetch the sample data for the plots

    // @TODO: Build a Bubble Chart using the sample data


function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}
function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
};

init();