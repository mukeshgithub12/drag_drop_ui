$(document).ready(function() {
    $(".droppableD").sortable({});
});

function Dropped(event) {
    $(".draggableD").each(function() {});
    refresh();
}

// google chart -------------
$(function() {
    var options = {
        chart: {
            height: 320,
            type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        series: [44, 55, 13, 43, 22],
        colors: ["#0073aa", "#0e9e4a", "#00acc1", "#f1c40f", "#e74c3c"],
        legend: {
            show: true,
            position: 'bottom',
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false,
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    var chart = new ApexCharts(
        document.querySelector("#google-chart"),
        options
    );
    chart.render();
});
// google chart end-------------

// facebook chart-----------
$(function() {
    var options = {
        chart: {
            height: 320,
            type: 'donut',
        },
        series: [44, 55, 41, 17, 15, 20],
        colors: ["#0073aa", "#0e9e4a", "#00acc1", "#f1c40f", "#e74c3c"],
        legend: {
            show: true,
            position: 'bottom',
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true
                        },
                        value: {
                            show: true
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false,
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    var chart = new ApexCharts(
        document.querySelector("#facebook-chart"),
        options
    );

    chart.render();
});

// facebook chart end-----------

$(function() {
    var options = {
        chart: {
            height: 320,
            type: 'donut',
        },
        series: [44, 55, 41, 17, 15, 20],
        colors: ["#0073aa", "#0e9e4a", "#00acc1", "#f1c40f", "#e74c3c"],
        legend: {
            show: true,
            position: 'bottom',
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true
                        },
                        value: {
                            show: true
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false,
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    var chart = new ApexCharts(
        document.querySelector("#facebook-chart2"),
        options
    );

    chart.render();
});
$(function() {
    var options = {
        chart: {
            height: 320,
            type: 'donut',
        },
        series: [44, 55, 41, 17, 15, 20],
        colors: ["#0073aa", "#0e9e4a", "#00acc1", "#f1c40f", "#e74c3c"],
        legend: {
            show: true,
            position: 'bottom',
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true
                        },
                        value: {
                            show: true
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false,
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    var chart = new ApexCharts(
        document.querySelector("#facebook-chart3"),
        options
    );

    chart.render();
});
$(function() {
    var options = {
        chart: {
            height: 320,
            type: 'donut',
        },
        series: [44, 55, 41, 17, 15, 20],
        colors: ["#0073aa", "#0e9e4a", "#00acc1", "#f1c40f", "#e74c3c"],
        legend: {
            show: true,
            position: 'bottom',
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true
                        },
                        value: {
                            show: true
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false,
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    var chart = new ApexCharts(
        document.querySelector("#facebook-chart4"),
        options
    );

    chart.render();
});
$(function() {
    var options = {
        chart: {
            height: 320,
            type: 'donut',
        },
        series: [44, 55, 41, 17, 15, 20],
        colors: ["#0073aa", "#0e9e4a", "#00acc1", "#f1c40f", "#e74c3c"],
        legend: {
            show: true,
            position: 'bottom',
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true
                        },
                        value: {
                            show: true
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false,
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    var chart = new ApexCharts(
        document.querySelector("#facebook-chart5"),
        options
    );

    chart.render();
});
$(function() {
    var options = {
        chart: {
            height: 320,
            type: 'donut',
        },
        series: [44, 55, 41, 17, 15, 20],
        colors: ["#0073aa", "#0e9e4a", "#00acc1", "#f1c40f", "#e74c3c"],
        legend: {
            show: true,
            position: 'bottom',
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true
                        },
                        value: {
                            show: true
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false,
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    var chart = new ApexCharts(
        document.querySelector("#facebook-chart6"),
        options
    );

    chart.render();
});
$(function() {
    var options = {
        chart: {
            height: 320,
            type: 'donut',
        },
        series: [44, 55, 41, 17, 15, 20],
        colors: ["#0073aa", "#0e9e4a", "#00acc1", "#f1c40f", "#e74c3c"],
        legend: {
            show: true,
            position: 'bottom',
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true
                        },
                        value: {
                            show: true
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false,
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    var chart = new ApexCharts(
        document.querySelector("#facebook-chart7"),
        options
    );

    chart.render();
});
$(function() {
    var options = {
        chart: {
            height: 320,
            type: 'donut',
        },
        series: [44, 55, 41, 17, 15, 20],
        colors: ["#0073aa", "#0e9e4a", "#00acc1", "#f1c40f", "#e74c3c"],
        legend: {
            show: true,
            position: 'bottom',
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true
                        },
                        value: {
                            show: true
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false,
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    var chart = new ApexCharts(
        document.querySelector("#facebook-chart8"),
        options
    );

    chart.render();
});
$(function() {
    var options = {
        chart: {
            height: 320,
            type: 'donut',
        },
        series: [44, 55, 41, 17, 15, 20],
        colors: ["#0073aa", "#0e9e4a", "#00acc1", "#f1c40f", "#e74c3c"],
        legend: {
            show: true,
            position: 'bottom',
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true
                        },
                        value: {
                            show: true
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false,
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    var chart = new ApexCharts(
        document.querySelector("#facebook-chart9"),
        options
    );

    chart.render();
});