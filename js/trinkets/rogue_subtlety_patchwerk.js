Highcharts.chart('rogue_subtlety_patchwerk', 
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
                164051,
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
                12604,
                0,
                11231,
                10280,
                9470,
                6258,
                9603,
                9645,
                8627,
                8865,
                8393,
                7149,
                8885,
                3824,
                7982,
                8233,
                9731,
                11540,
                7044,
                6187,
                6574,
                7353,
                9295,
                0,
                8406,
                8810,
                8090,
                8625,
                9312,
                7720,
                6414,
                8929,
                8284,
                7348,
                0,
                0,
                4917,
                5022,
                3427,
                4199,
                1151,
                6353,
                3868,
                2039,
                1858,
                1498,
                3075,
                3877,
                0,
                1328
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                15605,
                0,
                8287,
                10692,
                10311,
                6385,
                9210,
                9517,
                8017,
                7477,
                8118,
                8890,
                7391,
                5913,
                8341,
                8992,
                9122,
                6333,
                8934,
                8849,
                7398,
                7534,
                8944,
                7214,
                8954,
                6680,
                6016,
                9952,
                6819,
                7321,
                6269,
                7826,
                6623,
                6189,
                0,
                0,
                3159,
                2995,
                3194,
                3782,
                4856,
                8011,
                2619,
                2262,
                3905,
                3241,
                615,
                0,
                2161,
                1021
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                12706,
                0,
                5858,
                9215,
                6081,
                7150,
                7285,
                11037,
                7495,
                7240,
                8425,
                7124,
                8061,
                3583,
                7621,
                6518,
                7924,
                8146,
                7750,
                6338,
                4974,
                8279,
                7442,
                6510,
                6803,
                5807,
                7247,
                6086,
                9268,
                4530,
                5259,
                4761,
                6096,
                5110,
                0,
                0,
                4874,
                3388,
                4597,
                2457,
                2534,
                5191,
                1714,
                3680,
                1475,
                2799,
                2955,
                1728,
                0,
                1711
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                9994,
                0,
                8643,
                9418,
                7389,
                5831,
                6548,
                6905,
                5549,
                7356,
                8109,
                7081,
                7424,
                3353,
                6736,
                6538,
                7830,
                3587,
                3084,
                6072,
                7109,
                6511,
                6854,
                6538,
                5575,
                7232,
                6274,
                6368,
                6326,
                5749,
                7435,
                8304,
                5995,
                4771,
                0,
                0,
                5173,
                3106,
                2070,
                2521,
                1488,
                5288,
                2472,
                1992,
                2229,
                2808,
                2499,
                2717,
                2171,
                2081
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                113894,
                0,
                7834,
                7877,
                6385,
                5298,
                5355,
                7666,
                7501,
                7024,
                4763,
                6537,
                4194,
                2431,
                3746,
                6414,
                7396,
                5734,
                5784,
                5837,
                6113,
                4715,
                5819,
                7540,
                8481,
                4298,
                5665,
                7500,
                6321,
                6339,
                4514,
                5673,
                5155,
                5187,
                6221,
                5634,
                2922,
                3037,
                2872,
                2583,
                1967,
                5277,
                2100,
                3813,
                2784,
                2148,
                517,
                2155,
                0,
                2027
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                5800,
                6873,
                85460,
                5738,
                8209,
                78544,
                5098,
                4978,
                80813,
                4545,
                6003,
                3269,
                7955,
                6064,
                6269,
                5563,
                6047,
                5539,
                75578,
                5768,
                6101,
                75997,
                5319,
                6761,
                6135,
                5022,
                5609,
                3668,
                5127,
                6002,
                6224,
                67441,
                5190,
                5062,
                2749,
                2605,
                2803,
                4510,
                3557,
                4679,
                2481,
                1551,
                1096,
                1459,
                1835,
                1536,
                2658,
                616
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                89124,
                77706,
                0,
                87875,
                77700,
                0,
                78419,
                76156,
                0,
                76660,
                73973,
                93138,
                72938,
                72546,
                66589,
                72577,
                70568,
                69777,
                0,
                65140,
                60728,
                0,
                58903,
                62535,
                62577,
                58445,
                57880,
                66110,
                66019,
                56138,
                58266,
                0,
                79389,
                72250,
                54750,
                49058,
                45543,
                43925,
                45781,
                20328,
                38903,
                37615,
                38259,
                37208,
                35846,
                30577,
                35302,
                28939
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-09-22 18:32 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/241e09d6aeb2f51f8b24e2b7038b7dc580223b38\" target=\"blank\">241e09d</a>"
    },
    title: {
        text: "Rogue - Subtlety DfA - Patchwerk"
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
            "Specter of Betrayal",
            "Kil'jaeden's Burning Wish",
            "Eye of Command",
            "Nightblooming Frond",
            "Engine of Eradication",
            "Convergence of Fates",
            "Stat Stick (Mastery)",
            "Vial of Ceaseless Toxins",
            "Stat Stick (Versatility)",
            "Chaos Talisman",
            "Cradle of Anguish",
            "Stat Stick (Crit)",
            "Entwined Elemental Foci",
            "Unstable Arcanocrystal",
            "Thrice-Accursed Compass",
            "Memento of Angerboda",
            "Six-Feather Fan",
            "Bloodthirsty Instinct",
            "Gift of Radiance",
            "Stat Stick (Haste)",
            "Umbral Moonglaives",
            "PVP Badge of Conquest",
            "Arcanogolem Digit",
            "Astral Alchemist Stone",
            "Bloodstained Handkerchief",
            "Nightmare Egg Shell",
            "Chrono Shard",
            "Void Stalker's Contract",
            "Tirathon's Betrayal",
            "Horn of Valor",
            "PVP Insignia of Conquest",
            "Tempered Egg of Serpentrix",
            "Splinters of Agronax",
            "Infernal Cinders",
            "Darkmoon Deck: Dominion",
            "Infernal Alchemist Stone",
            "The Devilsaur's Bite",
            "Spontaneous Appendages",
            "Terrorbound Nexus",
            "Faulty Countermeasure",
            "Nature's Call",
            "Draught of Souls",
            "Windscar Whetstone",
            "Mark of Dargrul",
            "Tiny Oozeling in a Jar",
            "Spiked Counterweight",
            "Giant Ornamental Pearl",
            "Toe Knee's Promise",
            "Ley Spark",
            "Ravaged Seed Pod"
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
                    text: "mean at 96952",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 96952.88,
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