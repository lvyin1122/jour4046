am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv1", am4charts.XYChart);
    
    // Add data
    chart.data = [
  {
    "year": "2015",
    "value": 6.3
  },
  {
    "year": "2016",
    "value": 8.2
  },
  {
    "year": "2017",
    "value": 10.8
  },
  {
    "year": "2018",
    "value": 14
  },
  {
    "year": "2019",
    "value": 20.7
  },
  {
    "year": "2020",
    "value": 26.2
  },
  {
    "year": "2021",
    "value": 36.6
  },
  {
    "year": "2022",
    "value": 47.8
  },
  {
    "year": "2023",
    "value": 60.8
  },
  {
    "year": "2024",
    "value": 76.3
  }
];


    let topContainer = chart.chartContainer.createChild(am4core.Container);
    topContainer.layout = "absolute";
    topContainer.toBack();
    topContainer.paddingBottom = 15;
    topContainer.width = am4core.percent(100);

    let axisTitle = topContainer.createChild(am4core.Label);
    axisTitle.text = "Market size (billion)";
    axisTitle.fontWeight = 600;
    axisTitle.align = "left";
    axisTitle.paddingLeft = 10;
    
    // Create axes
    var yearAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    yearAxis.dataFields.category = "year";
    // Create value axis
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
    // Create series
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryX = "year";
    lineSeries.dataFields.valueY = "value";
    // lineSeries.dataFields.category = "year";
    lineSeries.name = "Market Size";
    lineSeries.strokeWidth = 3;
    
    // Add simple bullet
    var bullet = lineSeries.bullets.push(new am4charts.Bullet());
    var image = bullet.createChild(am4core.Rectangle);
    image.width = 20;
    image.height = 20;
    image.horizontalCenter = "middle";
    image.verticalCenter = "middle";

    var labelBullet = lineSeries.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.text = "{value}";
    
    }); // end am4core.ready()

    