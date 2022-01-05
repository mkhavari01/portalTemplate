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