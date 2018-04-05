(function ( $ ) {
    "use strict";

    $( ".bar-chart-container" ).each( function( i, element) {
        var elementId = element.id;
        element = $(element);
        var chartCats  = element.data( "chart-categories" ) || null,
            seriesData = element.data( "chart-series" ) || null,
            yAxisTitle = element.data( "chart-y-axis-title" ) || null,
            chartTitle = element.data( "chart-title" ) || null;

        var args = {
            chart: {
                type: 'bar',
                borderColor: '#DDD',
                borderRadius: 5,
                borderWidth: 1,
                height: 300
            },
            title: {
                text: chartTitle
            },
            xAxis: {
                categories: chartCats,
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: yAxisTitle,
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ''
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {},
            credits: {
                enabled: false
            },
            series: [ seriesData ]
        };
        Highcharts.chart( elementId, args );
    });

}(jQuery));
