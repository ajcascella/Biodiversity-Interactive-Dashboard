## Background

In this assignment I built an interactive dashboard using Plotly.js and a flask application to explore a Belly Button Biodiversity DataSet.

## Step by Step

* Used Plotly.js to build interactive charts for the dashboard.

    * Created a pie chart that uses data from the samples route (`/samples/<sample>`) to display the top 10 samples.

        * Used `sample_values` as the values for the pie chart.

        * Used `otu_ids` as the labels for the pie chart.

        * Used `otu_labels` as the hovertext for the chart.

    * Created a Bubble Chart that uses data from the samples route (`/samples/<sample>`) to display each sample.

        * Used `otu_ids` for the x values.

        * Used `sample_values` for the y values.

        * Used `sample_values` for the marker size.

        * Used `otu_ids` for the marker colors.

        * Used `otu_labels` for the text values.

    * Displayed the sample metadata from the route `/metadata/<sample>`

    * Displayed each key/value pair from the metadata JSON object somewhere on the page.

    * Updated all of the plots any time that a new sample is selected.