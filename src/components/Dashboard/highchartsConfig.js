export default function(historicalData) {
  return {
    title: {
      text: ""
    },
    // subtitle: {
    //   text: "Source: thesolarfoundation.com"
    // },
    yAxis: {
      title: {
        text: "Price"
      }
    },
    xAsix: { type: 'datetime' },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle"
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },
    series: historicalData,
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom"
            }
          }
        }
      ]
    }
  };
};
