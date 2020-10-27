am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv3", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.data = [
      {
        country: "Clothes",
        litres: 0.2168
      },
      {
        country: "Sport Shoes",
        litres: 0.1986
      },
      {
        country: "Bags",
        litres: 0.1591
      },
      {
        country: "Make up",
        litres: 0.1135
      },
      {
        country: "Jewellry",
        litres: 0.1135
      },
      {
        country: "Toys",
        litres: 0.0963
      },
      {
        country: "Electronics",
        litres: 0.0750
      },
      {
        country: "Other",
        litres: 0.0023
      }
    ];



    
    chart.innerRadius = am4core.percent(30);
    chart.depth = 120;

    chart.fontSize = 12;

    
    var series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.depthValue = "litres";
    series.dataFields.category = "country";
    series.slices.template.cornerRadius = 5;
    series.colors.step = 3;
    
  }); // end am4core.ready()