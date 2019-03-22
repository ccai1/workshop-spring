// Cathy Cai, Jared Asch - Team Yaks from Yonder
// SoftDev2 pd6
// K #15: Scattered
// 2019-03-21

var data = [[1,5],[2,3],[3,7],[4,3],[5,9]];

var margin = {top: 50, right: 90, bottom: 50, left: 90}
, width = 1000 - margin.left - margin.right
, height = 500 - margin.top - margin.bottom;

// Configure domain and range of scale
var x = d3.scaleLinear()
.domain([0, d3.max(data, function(d) { return d[0]; })])
.range([ 0, width ]);

var y = d3.scaleLinear()
.domain([0, d3.max(data, function(d) { return d[1]; })])
.range([ height, 0 ]);

var chart = d3.select('body')
.append('svg')
.attr('width', width + margin.right + margin.left)
.attr('height', height + margin.top + margin.bottom)
.attr('class', 'chart')

// Append a g element to the SVG
var main = chart.append('g')
.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
.attr('class', 'main')

main.append('text').attr("x", 450 ).attr("y",  0 ).style("text-anchor", "middle").text('Some Random Data');

// Draw the x-axis
var xAxis = d3.axisBottom(x);

main.append('g').attr('transform', 'translate(0,' + height + ')').attr('class', 'axis').call(xAxis);
main.append("text")      // text label for the x axis
        .attr("x", 450 )
        .attr("y",  450 )
        .style("text-anchor", "middle")
        .text("x-axis label");

// Draw the y-axis
var yAxis = d3.axisLeft(y);

main.append('g').attr('class', 'axis').call(yAxis);
main.append("text")      // text label for the x axis
        .attr("transform", "rotate(-90)")
        .attr("x", -200 )
        .attr("y",  -40 )
        .style("text-anchor", "middle")
        .text("y-axis label");

var g = main.append("g");

g.selectAll("dots")
.data(data)
.enter().append("circle")
.attr("cx", function (d) { return x(d[0]); } )
.attr("cy", function (d) { return y(d[1]); } )
.attr("fill","green")
.attr("r", 10);
