# Techtown Portland 2016 Diversity Survey
This repo contains the 2016 Results for the Techtown Portland Diversity Survey.

## Prerequisites For this Application
This application uses Jekyll. To use Jekyll, make sure you follow these guides:
* Jekyll Guides (https://jekyllrb.com/docs/installation/)

## Install Steps
* Make sure you have the jekyll gem (and follow guides above)
* `bundle install --path vendor`
* `bundle exec jekyll serve` will run a localhost server and convert SCSS to CSS
* Navigate to http://localhost:4000/

## CSV Parser
Data for this application was collected from a CSV that was provided by Techtown Portland.

A ruby program in parser/parse.rb will parse through the CSV columns and find matching users based on your query. See parse.rb file for additional usage information.

Run in your console to initialize the program:
* `cd parser/` (or navigate there however)
* `ruby parse.rb`

## Javascript Usage
Chartist.js (https://gionkunz.github.io/chartist-js/) is used to render SVG charts on the page.

The charts-data.js organizes the options for Chartist as well as the data collected from the CSV Parser.

The filter-charts.js handles the logic for building the Charts based on data and options defined in charts-data.js.

The app.js initializes the Survey and handles front-end event handlers.
