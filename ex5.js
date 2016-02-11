$(function () {
    console.log('Hello');

    // Get context with jQuery - using jQuery's .get() method.
    // var ctx = $("#myChart").get(0).getContext("2d");
    // Get the context of the canvas element we want to select


    var ctx = document.getElementById("myChart").getContext("2d");
    // For a pie chart
    //More than 1 in 3 women (35.6%)and more than 1 in 4 men(28.5%) in the United States have experienced rape, physical violence, and/or stalking by an intimate partner in their lifetime.
    var data = [
        {
            value: 64.4,
            color: "#525174",
            highlight: "#626181",
            label: "Non-Victims"

    },
        {
            value: 35.6,
            color: "#EDAE49",
            highlight: "#F2C277",
            label: " Female Victims"
    },

]
    var options = {
        percentageInnerCutout: 50,
        tooltipTemplate: "<%= value %>%"
    }

    var chart = new Chart(ctx).Pie(data, options);
    document.getElementById('js-legend').innerHTML = chart.generateLegend();

    //bar chart
    //Nearly 1 in 2 women (44.6%) and 1 in 5 men (22.2%) experienced sexual violence victimization other than rape at some point in their lives

    var ctx = document.getElementById("myChart2").getContext("2d")

    var data = {
        labels: ["% of Women", "% of Men"],
        datasets: [
            {
                highlightFill: "#3594B7",

                fillColor: "#5FC2F1",

                data: [44.6, 22.2]
        }
    ]
    };
    var options = {
        scaleShowGridLines: false,
        tooltipTemplate: "<%= value %>%",
        barShowStroke: false

    }
    var myBarChart = new Chart(ctx).Bar(data, options);



}); //close functions