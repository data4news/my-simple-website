d3.text("veggies.csv", function(data) {
    var parsedCSV = d3.csv.parseRows(data);

    var container = d3.select("#veggiestable")
        .append("table")

        .selectAll("tr")
            .data(parsedCSV).enter()
            .append("tr")

        .selectAll("td")
            .data(function(d) { return d; }).enter()
            .append("td")
            .text(function(d) { return d; });
});