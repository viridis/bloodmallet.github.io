Highcharts.chart('death_knight_frost_patchwerk', 
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
                166466,
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
                0,
                10661,
                11583,
                5564,
                8019,
                8944,
                6286,
                11342,
                8972,
                8476,
                6016,
                8057,
                10628,
                9810,
                7826,
                6679,
                8943,
                8213,
                9162,
                0,
                5745,
                8491,
                7619,
                8730,
                9773,
                7575,
                8085,
                7233,
                0,
                6517,
                5406,
                0,
                3723,
                5327,
                3222,
                2822,
                4956,
                4044,
                1400,
                2679,
                3479,
                4026,
                2652,
                2202,
                4378,
                891
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                0,
                14635,
                9937,
                3569,
                8205,
                11369,
                8346,
                5810,
                8577,
                5845,
                9298,
                8024,
                9981,
                4945,
                7092,
                8617,
                7528,
                8207,
                8530,
                8161,
                7283,
                4868,
                6120,
                6553,
                7263,
                9397,
                5502,
                7811,
                0,
                6760,
                6045,
                0,
                4807,
                3288,
                2405,
                7529,
                4029,
                6624,
                5384,
                3137,
                2751,
                1841,
                1949,
                2986,
                8203,
                3603
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                0,
                6602,
                9039,
                3871,
                6959,
                7983,
                7247,
                8965,
                6447,
                7435,
                6342,
                7557,
                7810,
                9190,
                7488,
                5968,
                6036,
                6511,
                8529,
                5813,
                6882,
                6490,
                4289,
                6029,
                6670,
                5917,
                8086,
                6656,
                0,
                5929,
                3995,
                0,
                4238,
                6431,
                526,
                3788,
                3294,
                554,
                3737,
                2727,
                3046,
                1300,
                4414,
                3311,
                4361,
                792
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                0,
                7198,
                7771,
                5521,
                8372,
                5876,
                7070,
                6260,
                6596,
                6597,
                8306,
                7182,
                8941,
                4909,
                5697,
                7393,
                6961,
                6336,
                6206,
                6147,
                4799,
                5332,
                6189,
                6921,
                4888,
                5624,
                6418,
                6588,
                0,
                4815,
                3947,
                0,
                4422,
                2277,
                4236,
                1273,
                1662,
                4348,
                3749,
                3501,
                2238,
                4036,
                161,
                774,
                3940,
                1530
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                0,
                6373,
                5399,
                4905,
                5930,
                6212,
                6612,
                5666,
                6172,
                7795,
                4496,
                6817,
                79813,
                6378,
                6329,
                5004,
                5811,
                6459,
                5212,
                5323,
                4710,
                5255,
                6124,
                6947,
                6651,
                6210,
                4788,
                5713,
                4580,
                5512,
                4969,
                6138,
                2971,
                3230,
                1658,
                1926,
                3827,
                2056,
                652,
                2196,
                489,
                91,
                3760,
                1557,
                4499,
                2026
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                6835,
                91812,
                2983,
                5546,
                5451,
                5662,
                5277,
                6448,
                4474,
                5550,
                80061,
                0,
                5133,
                5655,
                5749,
                4948,
                5829,
                66875,
                76966,
                7581,
                4656,
                3586,
                4339,
                4737,
                4864,
                2938,
                4454,
                7149,
                3194,
                2891,
                4747,
                60721,
                55961,
                1852,
                2700,
                2934,
                442,
                3415,
                1450,
                3165,
                3637,
                1952,
                2811,
                4541,
                1005
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                86042,
                0,
                107801,
                90067,
                79922,
                81870,
                77946,
                76755,
                78470,
                77908,
                0,
                0,
                76292,
                76544,
                76312,
                73820,
                72020,
                0,
                0,
                63985,
                65759,
                64244,
                53657,
                52126,
                52356,
                54044,
                51123,
                77728,
                51871,
                56039,
                71298,
                0,
                0,
                60232,
                47606,
                44267,
                44901,
                39261,
                41740,
                40109,
                39306,
                37016,
                34762,
                14779,
                33689
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "UTC 2017-09-22 18:32 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/241e09d6aeb2f51f8b24e2b7038b7dc580223b38\" target=\"blank\">241e09d</a>"
    },
    title: {
        text: "Death_Knight - Frost - Patchwerk"
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
            "Kil'jaeden's Burning Wish",
            "Chaos Talisman",
            "Cradle of Anguish",
            "Unstable Arcanocrystal",
            "Eye of Command",
            "Stat Stick (Haste)",
            "Fel-Oiled Infernal Machine",
            "Chrono Shard",
            "Entwined Elemental Foci",
            "Ettin Fingernail",
            "Memento of Angerboda",
            "Engine of Eradication",
            "Specter of Betrayal",
            "Stat Stick (Crit)",
            "Stat Stick (Versatility)",
            "Nightmare Egg Shell",
            "Stat Stick (Mastery)",
            "PVP Badge of Victory",
            "Vial of Ceaseless Toxins",
            "Astral Alchemist Stone",
            "Gift of Radiance",
            "PVP Insignia of Victory",
            "Horn of Valor",
            "Ursoc's Rending Paw",
            "Bloodstained Handkerchief",
            "Claw of the Crystalline Scorpid",
            "Might of Krosus",
            "Void Stalker's Contract",
            "Darkmoon Deck: Dominion",
            "Convergence of Fates",
            "Faulty Countermeasure",
            "Infernal Alchemist Stone",
            "Infernal Cinders",
            "Umbral Moonglaives",
            "Nature's Call",
            "Spiked Counterweight",
            "The Devilsaur's Bite",
            "Toe Knee's Promise",
            "Ravaged Seed Pod",
            "Spontaneous Appendages",
            "Giant Ornamental Pearl",
            "Terrorbound Nexus",
            "Mark of Dargrul",
            "Tiny Oozeling in a Jar",
            "Draught of Souls",
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
                    text: "mean at 95425",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 95425.67391304347,
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