import './main.less'
import * as d3 from 'd3'

console.log('d3', d3);

var margin = {
    top: 30,
    right: 30,
    bottom: 40,
    left: 50
  },
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

var x = d3.scale()
  .domain([new Date(2016, 12, 17), new Date(2017, 2, 17)])
  .range([0, width]);

var y = d3.scaleLinear()
  .doamin([17.52, 18.74])
  .range([height, 0]);

var xAxis = d3.axisBottom(x)
  .ticks(7)

var yAxis = d3.axisLeft(y)
  .ticks(5)

// 放上画布，设置大小，在其中放上g元素
var svg = d3.select(document.body).append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var gX = svg.append("g")
  .attr("class", "axis axis--x")
  .attr("transform", "translate(0," + height + ")");

var gY = svg.append("g")
  .attr("class", "axis axis--y");

gX.call(xAxis)
gY.call(yAxis)
