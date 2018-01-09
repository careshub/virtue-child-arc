(function ( $ ) {
	"use strict";
	// Go when the DOM is ready.
	$(function() {

        // Highlight the county rows in a chart.
        $("#cdt").on("cdt-chart-created", ".cdt-chart", function(event, chartId, apiResponse) {

            $( "#" + chartId + " .highcharts-xaxis-labels text:contains('County')" ).each(function (index, value) {
                $( this ).find("tspan").addClass("county-label");

                // Highlight associated bars.
                // Find the "real" index of this node--used to find associated bar. 
                var index_in_set = $( this ).index();
                $( "#" + chartId + " .highcharts-series .highcharts-point" ).eq(index_in_set).addClass("county_value");
            });
        });

        // Highlight the county rows in a chart.
        $("#cdt").on("cdt-table-created", ".cdt-table", function(event, tableId) {
            $( "#" + tableId + " .cdt-countylist:contains('County')" ).addClass('arc-county');
        });

	});

}(jQuery));
