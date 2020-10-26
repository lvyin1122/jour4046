
    am4core.ready(function() {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        am4core.useTheme(am4themes_material);
        // Themes end
    
        // Create chart instance
        var chart = am4core.create("chartdiv2", am4charts.XYChart);
    
        // Add data
        chart.data = [
          {
            "Year": 2014,
            "Users": 1.5
          },
          {
            "Year": 2015,
            "Users": 2.2
          },
          {
            "Year": 2016,
            "Users": 2.7
          },
          {
            "Year": 2017,
            "Users": 3.1
          },
          {
            "Year": 2018,
            "Users": 3.5
          },
          {
            "Year": 2019,
            "Users": 3.9
          },
          {
            "Year": 2020,
            "Users": 4.1
          },
          {
            "Year": 2021,
            "Users": 4.2
          },
          {
            "Year": 2022,
            "Users": 4.2
          }
        ]

        let title = chart.titles.create();
        title.text = "China's Pan-ACG Users";
        title.fontSize = 25;
        title.marginBottom = 30;
    
        let topContainer = chart.chartContainer.createChild(am4core.Container);
        topContainer.layout = "absolute";
        topContainer.toBack();
        topContainer.paddingBottom = 15;
        topContainer.width = am4core.percent(100);
    
        let axisTitle = topContainer.createChild(am4core.Label);
        axisTitle.text = "Users (100 million)";
        axisTitle.fontWeight = 600;
        axisTitle.align = "left";
        axisTitle.paddingLeft = 10;
    
        chart.responsive.enabled = true;
        chart.fontSize = 14;
        // Create axes
    
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "Year";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
    
        categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
          if (target.dataItem && target.dataItem.index & 2 == 2) {
            return dy + 25;
          }
          return dy;
        });
    
        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "Users";
        series.dataFields.categoryX = "Year";
        series.name = "Users";
        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = .8;
    
        var columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;
    
        }); // end am4core.ready()
    
