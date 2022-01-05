Highcharts.chart('bar-chart', {
    // style : {
    //     color : 'white'
    // },
    credits: {
        enabled: false
    },
    chart: {
        type: 'column',
        height: 250,
    },
    title: {
        text: '<span class="bar-chart-title" style="color:#a0adb9">تعداد مقالات بر اساس سال</span>',
        // labels: {
        //     style: {
        //         fontSize: '13px',
        //         fontFamily: 'yekan',
        //     }
        // }
        // color: "black"
        // fontSize : '50px'
    },
    // subtitle: {
    //     text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    // },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -90,
            style: {
                fontSize: '13px',
                fontFamily: 'yekan',
            }
        },
        gridLineWidth: '1px'
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        labels: {
            style: {
                fontSize: '13px',
                fontFamily: 'yekan',
            }
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        headerFormat : '',
        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
        // pointFormat: '<span style="color:black">تست تولتیپ{point.y:.1f}</span>'
    },
    // option : {
    //     credits: {
    //         enabled: false
    //     }
    // },
    series: [{
        name: 'Population',
        data: [
            ['2007', 24.2],
            ['2008', 20.8],
            ['2009', 14.9],
            ['2010', 13.7],
            ['2011', 13.1],
            ['2012', 12.7],
            ['2013', 12.4],
            ['2014', 12.2],
            ['2015', 12.0],
            ['2016', 11.7],
            ['2017', 11.5],
            ['2018', 11.2],
            ['2019', 11.1],
            ['2020', 10.6],
        ],
        // dataLabels: {
        //     enabled: true,
        //     rotation: -90,
        //     color: '#FFFFFF',
        //     align: 'right',
        //     format: '{point.y:.1f}', // one decimal
        //     y: 10, // 10 pixels down from the top
        //     style: {
        //         fontSize: '13px',
        //         fontFamily: 'yekan'
        //     }
        // }
    }],
    plotOptions: {
        series: {
            color: '#83c4e3',
            pointWidth: 30
        }
    },
    
});


// pie-percentage

Highcharts.chart('pie-percentage', {
    credits: {
        enabled: false
    },
    chart: {
        height: 400,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        innerSize: '60%',
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 61.41,
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Sogou Explorer',
            y: 1.64
        }, {
            name: 'Opera',
            y: 1.6
        }, {
            name: 'QQ',
            y: 1.2
        }, {
            name: 'Other',
            y: 2.61
        }]
    }]
});

// pie percent 1

Highcharts.chart('pie-percent', {
    tooltip: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    chart : {
        type: 'pie',
        height : 150,
        width : 150
    },
    colors: ['#3aabf0', '#dcdcdc'],
    title: {
        text: '',
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false
            },
            borderWidth: 3
        }
    },
    series: [{
        name: 'Browser share',
        innerSize: '0',
        data: [35.2,65.8],
        states: {
            hover: {
                enabled: false
            }
        },
    }],
});

// pie percent 2

Highcharts.chart('pie-percent2', {
    tooltip: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    chart : {
        type: 'pie',
        height : 150,
        width : 150
    },
    colors: ['#3aabf0', '#dcdcdc'],
    title: {
        text: '',
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false
            },
            borderWidth: 3
        },
    },
    series: [{
        name: 'Browser share',
        innerSize: '0',
        data: [35.2,65.8],
        states: {
            hover: {
                enabled: false
            }
        },
    }],
    
});