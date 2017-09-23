Highcharts.chart('rogue_outlaw_patchwerk', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
                }
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#ffeb3b",
            data: [
                0,
                153514,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                6693,
                0,
                12990,
                12630,
                9546,
                10439,
                8815,
                8213,
                10051,
                9292,
                11112,
                9977,
                9515,
                7577,
                8921,
                9327,
                7640,
                7815,
                8338,
                8809,
                3485,
                9240,
                7212,
                6979,
                8127,
                9310,
                7975,
                0,
                6998,
                6162,
                7046,
                8876,
                5986,
                4884,
                0,
                0,
                2976,
                4427,
                2960,
                3259,
                7922,
                4586,
                3685,
                3031,
                1837,
                0,
                2820,
                1899,
                2893,
                2463
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                7455,
                0,
                10522,
                9547,
                8827,
                6531,
                7800,
                8310,
                10037,
                6830,
                9234,
                7445,
                7604,
                8203,
                7009,
                7223,
                7686,
                7522,
                7306,
                7681,
                2899,
                10142,
                7830,
                8466,
                9632,
                4984,
                5541,
                6789,
                9382,
                5455,
                6001,
                5560,
                8096,
                6337,
                0,
                0,
                6435,
                2784,
                5782,
                3003,
                9285,
                3543,
                1056,
                3758,
                3169,
                515,
                3094,
                2354,
                1755,
                649
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                5711,
                0,
                9531,
                10991,
                7096,
                7940,
                8215,
                8515,
                8981,
                7266,
                7963,
                7811,
                8110,
                7168,
                7988,
                6660,
                6049,
                6630,
                7287,
                6447,
                5405,
                4765,
                6554,
                8570,
                6114,
                8355,
                6485,
                6818,
                6196,
                7472,
                5327,
                6391,
                6556,
                7145,
                0,
                0,
                2819,
                2750,
                2637,
                2583,
                6150,
                3078,
                3623,
                3072,
                2011,
                2839,
                1881,
                3351,
                2353,
                2893
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                5513,
                0,
                9354,
                6644,
                6279,
                8334,
                6189,
                5492,
                7227,
                7386,
                6783,
                5101,
                4701,
                5213,
                5964,
                6160,
                7313,
                5993,
                6307,
                6757,
                2892,
                8813,
                8811,
                7811,
                7072,
                7839,
                5708,
                6732,
                5946,
                5888,
                5093,
                5428,
                5129,
                1672,
                0,
                0,
                5287,
                3419,
                2936,
                2438,
                4287,
                3319,
                54,
                2241,
                3668,
                85,
                3457,
                0,
                3157,
                2493
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                5809,
                0,
                8350,
                92015,
                9708,
                6000,
                5656,
                6433,
                7763,
                4930,
                8540,
                6710,
                6523,
                7125,
                6972,
                7161,
                5664,
                5323,
                5463,
                5733,
                4057,
                8143,
                4785,
                5021,
                4989,
                4876,
                3986,
                4949,
                7795,
                6038,
                5042,
                5433,
                5080,
                5843,
                7280,
                6584,
                2702,
                2624,
                3668,
                4331,
                8351,
                1809,
                2581,
                2957,
                0,
                799,
                1142,
                1962,
                764,
                149
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                3415,
                0,
                6876,
                0,
                4566,
                88417,
                7930,
                5671,
                75153,
                6568,
                6570,
                5929,
                4767,
                4679,
                3318,
                4441,
                4694,
                6049,
                5535,
                71226,
                157,
                4245,
                4718,
                5577,
                6106,
                5576,
                5342,
                71883,
                5566,
                65357,
                4138,
                4453,
                6207,
                59275,
                3440,
                2697,
                2347,
                2504,
                3848,
                1027,
                4538,
                3734,
                1956,
                1803,
                2516,
                844,
                1614,
                3739,
                1890,
                2443
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                145416,
                0,
                76605,
                0,
                84211,
                0,
                80660,
                78951,
                0,
                76348,
                64717,
                71115,
                68898,
                69330,
                68752,
                67249,
                68623,
                68272,
                66713,
                0,
                87312,
                59351,
                63594,
                58467,
                57374,
                56598,
                62251,
                0,
                54496,
                0,
                62121,
                57921,
                55148,
                0,
                68847,
                67561,
                45567,
                47063,
                42289,
                45211,
                21275,
                38530,
                43040,
                36046,
                38941,
                45251,
                34057,
                30901,
                30347,
                24611
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-09-22 18:32 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/241e09d6aeb2f51f8b24e2b7038b7dc580223b38\" target=\"blank\">241e09d</a>"
    },
    title: {
        text: "Rogue - Outlaw - Patchwerk"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Convergence of Fates",
            "Kil'jaeden's Burning Wish",
            "Nightblooming Frond",
            "Specter of Betrayal",
            "Chaos Talisman",
            "Cradle of Anguish",
            "Bloodthirsty Instinct",
            "Eye of Command",
            "Vial of Ceaseless Toxins",
            "Stat Stick (Haste)",
            "Six-Feather Fan",
            "Stat Stick (Versatility)",
            "Chrono Shard",
            "PVP Badge of Conquest",
            "Memento of Angerboda",
            "Thrice-Accursed Compass",
            "Nightmare Egg Shell",
            "Entwined Elemental Foci",
            "Stat Stick (Crit)",
            "Engine of Eradication",
            "Unstable Arcanocrystal",
            "Tirathon's Betrayal",
            "Stat Stick (Mastery)",
            "Arcanogolem Digit",
            "Bloodstained Handkerchief",
            "Tempered Egg of Serpentrix",
            "Horn of Valor",
            "Astral Alchemist Stone",
            "Void Stalker's Contract",
            "Infernal Cinders",
            "PVP Insignia of Conquest",
            "Gift of Radiance",
            "Splinters of Agronax",
            "Umbral Moonglaives",
            "Darkmoon Deck: Dominion",
            "Infernal Alchemist Stone",
            "The Devilsaur's Bite",
            "Toe Knee's Promise",
            "Faulty Countermeasure",
            "Spiked Counterweight",
            "Draught of Souls",
            "Spontaneous Appendages",
            "Nature's Call",
            "Terrorbound Nexus",
            "Ravaged Seed Pod",
            "Ley Spark",
            "Mark of Dargrul",
            "Giant Ornamental Pearl",
            "Tiny Oozeling in a Jar",
            "Windscar Whetstone"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#1E90FF",
                label: {
                    align: "left",
                    rotation: -90,
                    style: {
                        color: "#1E90FF"
                    },
                    text: "mean at 94404",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 94404.76,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: false,
            formatter: function() {            /* I need to figure out how to get the mean value here,            ** to allow the percent diff to mean as label            ** console.log(this); */            return;          },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});